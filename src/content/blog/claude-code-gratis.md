---
title: "Claude Code gratis"
description: "Debes descargar Ollama y registrarte, luego, cuando estés en tu computadora con Windows corriendo una sesión de programación y desarrollo web en VS Code,"
pubDate: 2026-02-17
heroImage: "/assets/blog/covers/claude-code-gratis.svg"
---

<p>Programar con asistencia de IA ya no requiere pagar una suscripción mensual. Con <strong>Claude Code</strong> conectado a modelos de código abierto a través de <strong>Ollama</strong>, podés disfrutar de un flujo completo de desarrollo asistido en tu propia máquina, sin enviar tu código a servicios externos.</p>

<ul>
<li><p>Configurá Claude Code gratis en tu propia máquina conectándolo a Ollama y modelos open-source como kimi-k2.5.</p></li>
<li><p>La conexión se hace en minutos desde WSL con variables de entorno de Anthropic apuntando a localhost.</p></li>
<li><p>El plan gratuito tiene límites claros: contexto que se reinicia cada 6 horas y un tope de uso semanal.</p></li>
</ul>

<ul>
<li><a href="#conecta-claude-code-a-modelos-de-ia-de-codigo-abierto">Conecta Claude Code a modelos de IA de código abierto</a></li>
<li><a href="#como-funciona-la-conexion">Cómo funciona la conexión entre Claude Code y Ollama</a></li>
<li><a href="#limites-del-plan-gratuito">Límites del plan gratuito de Ollama</a></li>
<li><a href="#consejos-ralph-loop">Consejos para exprimir el plugin ralph-loop</a></li>
<li><a href="#conclusion">Conclusión</a></li>
</ul>

<h2 id="conecta-claude-code-a-modelos-de-ia-de-codigo-abierto">Conecta Claude code a modelos de IA de código abierto</h2>

<figure><img width="1024" height="576" src="/assets/blog/claude-code-gratis-1.webp" alt="Claude Code conectado a modelos de IA de código abierto corriendo en VS Code"></figure>

<p>Debes descargar <a href="https://ollama.com/" target="_blank" rel="nofollow noopener">Ollama</a> y registrarte, luego, cuando estés en tu <a href="https://lanuscomputacion.com/" target="_blank" rel="nofollow noreferrer noopener">computadora con Windows</a> corriendo una sesión de <a href="https://selvaggiesteban.dev/" target="_blank" rel="nofollow noreferrer noopener">programación y desarrollo web</a> en VS Code, ejecuta:</p>

<pre><code><strong>wsl</strong>
<strong>export ANTHROPIC_AUTH_TOKEN=ollama</strong>
<strong>export ANTHROPIC_API_KEY=""</strong>
<strong>export ANTHROPIC_BASE_URL=http://127.0.0.1:11434</strong>
<strong>claude -c --dangerously-skip-permissions --model kimi-k2.5:cloud</strong></code></pre>

<p>Debes ver: Skill(superpowers:subagent-driven-development)</p>

<figure><img width="1024" height="223" src="/assets/blog/claude-code-gratis-2.webp" alt="Mensaje de Claude Code confirmando que el skill superpowers está cargado"></figure>

<p>El día en el que este articulo es publicado Ollama facilita un plan gratuito limitado con restricciones por concurrencia y múltiples <a href="https://ollama.com/search" target="_blank" rel="nofollow noopener">modelos disponibles</a>. </p>

<p>Las restricciones del uso de contexto diario para las sesiones de programación y desarrollo web se reinicia cada 6 horas. Adicionalmente existe un límite de uso semanal.</p>

<p>Te puede interesar: <a href="https://selvaggiesteban.dev/kimi-k2-5-en-la-nube-la-proxima-frontera-de-la-ia-empresarial/" target="_blank" rel="nofollow noopener">kimi-k2.5</a> y minimax-m2.1 de Moonshot AI, también Qwen3:4b para <a href="https://lanuscomputacion.com" target="_blank" rel="nofollow noopener">computadoras con 8 gb de ram</a>.</p>

<p>Es clave el uso del plugin ralph-loop y ejecutar /ralph-loop:ralph-loop completa todas las tareas pendientes –max-iterations 5 –completion-promise ‘Te confirmo que no hay tareas pendientes por completar’.</p>

<h2 id="como-funciona-la-conexion">Cómo funciona la conexión entre Claude Code y Ollama</h2>

<p>El truco de esta configuración es simple pero potente: Claude Code es una interfaz de línea de comandos que habla el protocolo de la API de Anthropic, y Ollama puede exponer modelos locales (o en la nube, como kimi-k2.5:cloud) emulando exactamente ese mismo protocolo. Al apuntar la variable <code>ANTHROPIC_BASE_URL</code> al servidor local de Ollama en el puerto 11434, la CLI nunca sale de tu máquina para hacer las inferencias del modelo: le pedís a Ollama que actúe de proxy compatible con Anthropic.</p>

<p>Las variables de entorno tienen un rol específico cada una. <code>ANTHROPIC_AUTH_TOKEN=ollama</code> es un valor arbitrario que satisfase la validación de la CLI sin requerir una API key real de Anthropic. <code>ANTHROPIC_API_KEY=""</code> se deja vacío justamente para que no se envíe ninguna credencial legítima al proxy local. Y <code>claude -c</code> reanuda la sesión anterior, de modo que el contexto de tu trabajo no se pierde entre corridas. La flag <code>--dangerously-skip-permissions</code> saltea las confirmaciones de ejecución de comandos: úsala solo en entornos de desarrollo donde confíes plenamente en lo que el modelo propone, porque le estás dando vía libre para editar archivos y correr terminal.</p>

<p>Desde Windows, el paso por WSL no es un detalle menor: muchas de las herramientas del ecosistema de desarrollo asistido por IA asumen un entorno Unix. WSL te da una terminal Linux real dentro de Windows, con acceso a tu filesystem, Git y Node.js, sin instalar una máquina virtual completa. Si ya trabajás con VS Code, la extensión de WSL Remote te permite editar dentro de ese entorno con toda la experiencia de la IDE.</p>

<h2 id="limites-del-plan-gratuito">Límites del plan gratuito de Ollama</h2>

<p>Como toda capa gratuita, el plan tiene condiciones que conviene conocer antes de armar tu flujo de trabajo alrededor de él. El más importante es la <strong>concurrencia</strong>: si abrís varias sesiones de Claude Code al mismo tiempo contra el mismo modelo en la nube, vas a encontrar esperas o errores de rate limit. La experiencia fluida se da trabajando en una sesión por vez, con tareas bien delimitadas.</p>

<p>El <strong>reinicio de contexto cada 6 horas</strong> significa que, si venís trabajando en un proyecto largo, cada ese período la ventana disponible de tokens se renueva. Estratégicamente, conviene planificar las sesiones: arrancar con un objetivo claro por bloque (por ejemplo, “implementar el módulo de autenticación completo”) en lugar de dejar sesiones abiertas todo el día consumiendo cuota en tareas menores. Un buen hábito es cerrar cada bloque con un resumen de estado en un archivo del repo, así cuando el contexto se reinicie podés retomar el hilo leyendo ese resumen en lugar de reconstruirlo de memoria.</p>

<p>El <strong>límite semanal</strong> protege la plataforma del uso intensivo. Si combinás varios modelos disponibles de Ollama y alternás entre tareas de generación de código, revisión y documentación, vas a distribuir mejor el consumo. Para proyectos con deadlines ajustados, una buena práctica es tener un modelo de respaldo configurado (por ejemplo, un Qwen local para tareas chicas) y reservar kimi-k2.5:cloud para lo que realmente necesita razonamiento largo.</p>

<h2 id="consejos-ralph-loop">Consejos para exprimir el plugin ralph-loop</h2>

<p>El plugin <strong>ralph-loop</strong> transforma a Claude Code de un asistente de ida y vuelta en un agente autónomo de ejecución por lotes. El comando <code>/ralph-loop:ralph-loop</code> le pide que siga trabajando en las tareas pendientes hasta confirmar que no queda nada, y los parámetros que lo acompañan controlan el ciclo: <code>--max-iterations 5</code> limita las pasadas para que no se dispare, y <code>--completion-promise</code> define la condición de corte en lenguaje natural.</p>

<p>Para que funcione bien, el prompt inicial debe ser concreto: listar las tareas como checks verificables (“agregar validación al formulario”, “escribir tests del servicio X”, “actualizar el README”) funciona mucho mejor que un objetivo vago como “mejorar el proyecto”. Cada iteración del loop va a tomar el estado actual del código, ejecutar, verificar y volver a evaluar; por eso el <code>--completion-promise</code> explícito evita que el modelo declare victoria prematuramente o, al contrario, siga iterando sobre trabajo ya terminado.</p>

<p>Un flujo que funciona en la práctica: corrés el loop sobre una rama dedicada, revisás el diff al finalizar cada iteración, y solo mergeás cuando el resultado pase tus checks. Combiná esta técnica con una buena carpeta de contexto (archivos de convenciones del proyecto, ejemplos de código preferido) y vas a notar que las respuestas del modelo se alinean mucho mejor con el estilo de tu codebase. Si querés llevar la automatización al siguiente nivel, en <a href="/es/blog/claude-vs-openclaw-guia-comparativa" target="_blank">nuestra comparativa entre Claude y OpenClaw</a> exploramos otras alternativas del ecosistema, y en <a href="/es/services/automatizaciones-inteligencia-artificial" target="_blank">automatizaciones con IA</a> vemos cómo aplicar estos flujos a proyectos de negocio reales.</p>

<h2 id="conclusion">Conclusión</h2>

<p>Tener <strong>Claude Code gratis</strong> conectado a modelos open-source vía Ollama es hoy una de las formas más inteligentes de acelerar tu programación y desarrollo web sin incurrir en costos fijos de suscripción. La configuración es de minutos, corre en tu propia máquina, y si respetás los límites del plan gratuito (concurrencia, contexto cada 6 horas y tope semanal) el flujo de trabajo es plenamente productivo. Sumado al plugin ralph-loop, podés delegar tareas completas de refactor o implementación y dedicar tu tiempo a la revisión y las decisiones de arquitectura.</p>

<p>Si querés implementar este u otros flujos de desarrollo asistido por IA en tu proyecto o negocio, <a href="/es/contact" target="_blank">Contáctanos</a> y lo vemos juntos.</p>
