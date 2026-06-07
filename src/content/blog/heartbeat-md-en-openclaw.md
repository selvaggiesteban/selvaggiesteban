---
title: "HEARTBEAT.md en OpenClaw"
description: "HEARTBEAT.md en OpenClaw es un archivo del workspace del agente que sirve para definir una pequeña lista de chequeo periódica que el sistema revisa durante"
pubDate: 2026-04-17
---



                


<p>HEARTBEAT.md en OpenClaw es un archivo del workspace del agente que sirve para definir una pequeña lista de chequeo periódica que el sistema revisa durante los heartbeats. OpenClaw lo inyecta como parte del contexto del proyecto cuando existe, junto con otros archivos como AGENTS.md, TOOLS.md, IDENTITY.md y USER.md.</p>



<p>En la práctica, un <strong>heartbeat</strong> es un turno programado de la <strong>sesión principal</strong> del agente. Por defecto corre cada <strong>30 minutos</strong>, y su objetivo es que el agente revise cosas que podrían requerir atención sin esperar un mensaje tuyo. No crea tareas en segundo plano: eso se maneja aparte con automatizaciones o cron.</p>



<p>La plantilla oficial de <code>HEARTBEAT.md</code> es muy simple: si lo dejás vacío, OpenClaw <strong>omite</strong> esas llamadas de heartbeat; si agregás texto o tareas, el agente lo usa como guía para revisar periódicamente lo que le indiques. La documentación también recomienda <strong>mantenerlo corto</strong> para no gastar tokens de más.</p>



<p>Una forma simple de entenderlo es esta:</p>



<ul>
<li><code>HEARTBEAT.md</code> = <strong>qué revisar</strong></li>



<li>Heartbeat = <strong>cuándo revisarlo</strong></li>



<li>Cron / tareas desacopladas = <strong>trabajos separados del chat principal</strong></li>
</ul>



<p>Ejemplo conceptual de uso dentro de <code>HEARTBEAT.md</code>:</p>



<pre># Revisar en cada heartbeat<br>- Ver si hay emails importantes sin responder<br>- Ver si hoy hay eventos de calendario próximos<br>- Ver si hay recordatorios pendientes<br>- Avisar solo si hay algo que requiera acción</pre>



<p>Entonces, la respuesta corta sería: <code>HEARTBEAT.md</code> es el archivo donde le decís a OpenClaw <strong>qué chequeos proactivos querés que haga en cada latido programado del agente</strong>.</p>
                                    
                        <div class="page-links">
                                                
                    
                    

