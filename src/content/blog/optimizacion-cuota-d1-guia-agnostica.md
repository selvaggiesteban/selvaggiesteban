---
title: "Optimización de cuota D1 — guía agnóstica"
description: "Guía práctica para reducir el consumo de row reads y row writes en Cloudflare D1, evitar anti-patrones comunes y optimizar sincronizaciones masivas sin quedarse sin cuota."
pubDate: 2026-11-03
heroImage: "/assets/blog/covers/optimizacion-cuota-d1.svg"
---



                 
 


<p>Cloudflare D1 ofrece una base de datos SQL serverless potente, pero su modelo de cuotas —<strong>~5 millones de row reads/día</strong> y <strong>100 mil row writes/día</strong> en el plan gratuito, reseteando a las 00:00 UTC— obliga a diseñar consultas y escrituras con disciplina. Esta guía agnóstica (válida para cualquier proyecto D1: Workers, Pages Functions, scripts CLI, CI/CD) recopila patrones probados para mantenerse dentro de los límites sin sacrificar funcionalidad.</p>


<h2>1. Diagnóstico previo</h2>


<p>Antes de tocar código, mide la situación real:</p>

<ul>
<li><strong>wrangler d1 insights <DB></strong> — muestra lecturas/escrituras por día y las <em>hot queries</em> que más consumen.</li>
<li><strong>wrangler d1 dump / query log</strong> o <code>EXPLAIN QUERY PLAN</code> en las SQL candidatas — revela SCANs, falta de índices y planes ineficientes.</li>
<li>Recuerda: son <strong>dos cuotas separadas</strong> (row reads y row writes); ambas se reinician a medianoche UTC.</li>
</ul>


<h2>2. Reducir ROWS LEÍDOS</h2>


<h3>Índices covering para queries calientes</h3>

<p>Crea un índice que contenga <em>todas</em> las columnas del <code>SELECT</code> (WHERE + filtros + columnas proyectadas) para que SQLite resuelva la consulta solo con el índice, sin tocar la tabla:</p>

<pre><code>CREATE INDEX idx_orders_user_status_created 
  ON orders(user_id, status, created_at, total, currency);
</code></pre>

<p>Ejecuta <code>ANALYZE</code> tras crearlos para que el planner los use. Verifica con <code>EXPLAIN QUERY PLAN</code> que aparezca <code>USING COVERING INDEX</code> y <strong>no</strong> <code>SCAN</code>.</p>


<h3>Cachea en el edge lo que se lee repetido</h3>

<ul>
<li>Usa <strong>Cache API / KV / middleware</strong> con TTL corto (segundos/minutos) para servir dato «viejo» o <em>fallback</em> ante error, en lugar de reconsultar D1.</li>
<li><strong>Circuit breakers</strong>: si D1 falla o está bajo presión, corta / cachéa en lugar de reintentar queries en cascada (que multiplican el consumo).</li>
</ul>


<h3>Evita queries de «espejo»</h3>

<p>No leas una tabla completa para luego escribir en bucle. <strong>Lee una sola vez</strong> y guarda en memoria (<code>Map</code>) durante la misma invocación.</p>


<h3>COUNT(*) en tablas grandes</h3>

<ul>
<li>Cachea el conteo o sírvelo desde un campo materializado (ej. <code>counter</code> actualizado en la misma transacción de escritura).</li>
</ul>


<h3>Workflows / CI</h3>

<p>Evita llamadas API redundantes: cada <em>lookup</em> innecesario consume cuota propia.</p>


<h2>3. Reducir ROWS ESCRITOS</h2>


<h3>Patrón difusivo (diff upsert)</h3>

<p>Antes de escribir, carga el estado actual (solo columnas clave → <code>Map</code>), compara en memoria y <strong>solo emite upsert si algo cambió</strong>:</p>

<ul>
<li>Comparar con tolerancia numérica: <code>abs(a - b) > 0.01</code>.</li>
<li>Incluir <em>todas</em> las columnas que el <code>ON CONFLICT DO UPDATE</code> escribiría.</li>
<li>Loguear <code>skipped</code> vs <code>written</code> para verificar que el diff funciona.</li>
</ul>


<h3>Evita upserts ciegos en syncs horarios</h3>

<p>Reescribir la misma fila 24×/día consume 24 escrituras de la nada. Usa diff.</p>


<h3><code>INSERT OR IGNORE</code> en seeds / seed-data</h3>

<p>Solo inserta si falta; aun así, con diff previo mejor.</p>


<h3>Limpieza de datos basura</h3>

<p>Elimina filas de prueba / obsoletas para que no consuman lecturas en <code>SCAN</code>s.</p>


<h3>Timestamps</h3>

<p>Actualiza columnas de <code>updated_at</code> <strong>solo cuando el contenido cambia</strong> (o acepta su costo si es estrictamente necesario para observabilidad).</p>


<h2>4. Límites por invocación (free: 50 subrequests externas + 1.000 a servicios Cloudflare)</h2>


<ul>
<li>Cada <code>.prepare().run()</code> / <code>.first()</code> = <strong>1 subrequest D1</strong>. <strong>Nunca</strong> hagas bucles con una sentencia por fila.</li>
<li>Usa <code>db.batch([...])</code>: <strong>1 llamada HTTP por batch</strong> (máx. 100 sentencias por batch). Para N filas: <code>ceil(N/100)</code> subrequests.</li>
<li>Límite de <strong>100 parámetros bound por sentencia</strong>: prohibido <code>IN (?,?,...×1800)</code>. Patrón correcto:
  <ol>
  <li><code>SELECT</code> de candidatos,</li>
  <li>diff en JS,</li>
  <li><code>UPDATE</code>s de a ≤100 params (o ≤100 stmts por batch) solo de las filas afectadas.</li>
  </ol>
</li>
<li>Presupuesta la invocación completa: seed + sync + archive + notificaciones < ~100 subrequests.</li>
<li><strong>No</strong> subas <code>[limits]</code> subrequests — solo existe en planes pagos.</li>
</ul>


<h2>5. Patrones de sync (el mayor consumidor de escrituras)</h2>


<ol>
<li>Traer el feed externo <strong>una vez por invocación</strong> (paginado), normalizar, y reconciliar contra <em>snapshot en memoria</em>.</li>
<li>Marcar como «fuera de catálogo» con diff (solo las filas que cambiaron de estado), <strong>no</strong> con un <code>NOT IN</code> gigante.</li>
<li>Partir cualquier escritura masiva en <strong>batches de 100</strong> con conteo de <code>meta.changes</code>.</li>
</ol>


<h2>6. Observabilidad y CI</h2>


<ul>
<li><strong>Workflow programado</strong> que <em>advertencia-no-falla</em> cuando la cuota se acerca (umbral ~90%), usando solo llamadas baratas (GraphQL / d1 insights, sin scans de tablas).</li>
<li>Loguear por run: <code>written</code>, <code>unchanged</code>, <code>archived</code> — si <code>written ≈ total filas</code>, el diff no está funcionando.</li>
<li>Monitorear <code>MAX(timestamp_actualizacion)</code> para detectar syncs muertos.</li>
</ul>


<h2>7. Anti-patrones a buscar en cualquier proyecto D1</h2>


<table>
<thead>
<tr>
<th>Anti-patrón</th>
<th>Por qué duele</th>
<th>Solución rápida</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>for (row of rows) await db.prepare(...).run()</code></td>
<td>Explosión de subrequests (1 por fila)</td>
<td><code>db.batch([...])</code> + diff en memoria</td>
</tr>
<tr>
<td><code>.bind(...millones_de_ids)</code> en <code>NOT IN / IN</code></td>
<td>Pasa el límite de 100 params</td>
<td><code>SELECT</code> candidatos → diff → <code>UPDATE</code>s batch ≤100</td>
</tr>
<tr>
<td>Upsert incondicional cada N min sobre toda la tabla</td>
<td>Quema cuota de escrituras</td>
<td>Diff upsert + <code>INSERT OR IGNORE</code> en seeds</td>
</tr>
<tr>
<td><code>SELECT *</code> + SCAN en tablas grandes sin índice covering</td>
<td>Quema lecturas</td>
<td>Índice covering + <code>EXPLAIN QUERY PLAN</code></td>
</tr>
<tr>
<td>Reintentos en cascada ante error de D1</td>
<td>Multiplican el consumo</td>
<td>Circuit breaker + cache/fallback</td>
</tr>
<tr>
<td>Queries de conteo/lista sin caché en el hot path del sitio</td>
<td>Consumo constante evitable</td>
<td>Cache API / KV con TTL corto</td>
</tr>
</tbody>
</table>


<h2>Checklist rápido antes de deploy</h2>


<ul>
<li>[ ] <code>wrangler d1 insights</code> revisado en producción reciente.</li>
<li>[ ] Todas las queries calientes tienen <code>EXPLAIN QUERY PLAN</code> → <code>USING COVERING INDEX</code>.</li>
<li>[ ] No hay bucles <code>for...await db.prepare()</code>; todo pasa por <code>db.batch()</code>.</li>
<li>[ ] Syncs usan diff en memoria + batches de 100.</li>
<li>[ ] Cache TTL en edge para lecturas repetidas.</li>
<li>[ ] Workflow de alerta al 90% de cuota configurado.</li>
<li>[ ] Logs de <code>written / unchanged / archived</code> por run.</li>
</ul>


<h2>Conclusión</h2>


<p>La cuota D1 no es un límite arbitrario: es una <strong>señal de diseño</strong>. Cada vez que ves un <code>SCAN</code>, un bucle de <code>run()</code> o un upsert ciego, hay una oportunidad de reescribir esa pieza con diff + batch + cache. Aplicar estos patrones de forma sistemática transforma un proyecto que «se queda sin cuota a mediodía» en uno que cabe holgadamente en el plan gratuito y escala sin sorpresas al pasar a planes pagos.</p>

<p>¿Tienes un caso concreto que no encaja? Abre un issue o PR en el repo del proyecto y lo analizamos juntos.</p>