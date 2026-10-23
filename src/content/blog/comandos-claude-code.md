---
title: "Comandos Claude Code: la guía práctica para dominar tu agente de código"
description: "Descubrí los comandos Claude Code esenciales: slash commands, atajos de teclado, permisos y técnicas de prompting para usar tu agente de código."
pubDate: 2026-10-21
heroImage: "/assets/blog/covers/comandos-claude-code.svg"
---

<p>Claude Code se maneja casi por completo desde el teclado: comandos que empiezan con <code>/</code>, atajos y modos de permisos que deciden qué puede tocar el agente. Conocer los comandos Claude Code correctos convierte una sesión común en un flujo rápido, ordenado y bajo control, sin sorpresas en el repo.</p>

<ul>
<li><p>Los slash commands esenciales: de <code>/help</code> y <code>/clear</code> a <code>/model</code>, <code>/mcp</code> y <code>/agents</code> para gestionar la sesión.</p></li>
<li><p>Atajos clave como Shift+Tab para ciclar modos de permisos, Esc para interrumpir y Tab para aceptar autocompletados.</p></li>
<li><p>Prompts efectivos en terminal con contexto limpio, plan mode y revisiones antes de cada commit.</p></li>
</ul>

## Los slash commands que vas a usar todos los días

Al escribir <code>/</code> al inicio del mensaje se abre el menú de comandos y skills: filtrás tipeando y confirmás con Enter. Estos son los que más vas a usar, según la <a href="https://code.claude.com/docs/en/commands" rel="nofollow noopener" target="_blank">referencia oficial de comandos</a>:

- <code>/help</code>: muestra la ayuda y todos los comandos disponibles.
- <code>/clear</code>: conversación nueva con contexto vacío (alias <code>/reset</code> y <code>/new</code>); la anterior queda guardada y la retomás con <code>/resume</code>.
- <code>/compact</code>: resume la conversación para liberar ventana de contexto sin cortar el hilo; acepta instrucciones de foco.
- <code>/context</code>: muestra en una grilla qué consume tu ventana y sugiere optimizaciones.
- <code>/model</code>: cambia el modelo y lo guarda como default; sin argumentos abre un selector (y con <code>s</code> cambiás solo por la sesión).
- <code>/mcp</code>: gestiona servidores MCP: reconecta, habilita o deshabilita y resuelve autenticación OAuth.
- <code>/agents</code>: crea y administra subagentes editando <code>.claude/agents/</code> o <code>~/.claude/agents/</code>.
- <code>/permissions</code>: diálogo de reglas allow, ask y deny por alcance (alias <code>/allowed-tools</code>).
- <code>/init</code>: genera un <code>CLAUDE.md</code> inicial con las convenciones del proyecto; <code>/memory</code> lo edita después.
- <code>/diff</code> y <code>/code-review</code>: revisás los cambios y pedís review del diff antes de commitear (alias <code>/review</code>).
- <code>/rewind</code>: devuelve código y conversación a un checkpoint (alias <code>/checkpoint</code> y <code>/undo</code>).
- <code>/usage</code> (alias <code>/cost</code>): costos y límites del plan; <code>/status</code> muestra versión, modelo y conectividad.
- <code>/doctor</code>: chequeo de instalación y configuración que propone arreglos.

Para git, el plugin oficial commit-commands de Anthropic agrega <code>/commit</code> y <code>/commit-push-pr</code>: redactan el mensaje al estilo de tu historial y evitan archivos sensibles como <code>.env</code>; o podés pedirle a Claude que commitee cuando el trabajo esté revisado.

## Atajos de teclado que cambian la experiencia en terminal

La <a href="https://code.claude.com/docs/en/interactive-mode" rel="nofollow noopener" target="_blank">guía de modo interactivo</a> documenta decenas de atajos; estos rinden más en el día a día:

- <code>Ctrl+L</code>: redibuja la pantalla conservando el input y el historial, para cuando la terminal queda "torta" a mitad de render.
- <code>Ctrl+O</code>: alterna el visor de transcripción con detalle de cada llamada a herramientas, timestamp y modelo por mensaje.
- <code>Esc</code>: interrumpe a Claude a mitad de turno conservando el trabajo hecho; también cierra diálogos y rechaza un prompt de permiso.
- <code>Esc</code> dos veces: con texto, limpia el borrador y lo guarda en el historial (↑ lo recupera); con el input vacío, abre el menú de rewind.
- <code>Tab</code>: acepta la sugerencia de autocompletado visible; en prompts de permiso, agrega un comentario a la respuesta elegida.
- <code>Shift+Tab</code>: cicla los modos de permiso —default (Manual), acceptEdits, plan y, cuando están disponibles, bypassPermissions y auto—. En Windows, <code>Alt+M</code> hace lo mismo sin input VT.
- <code>Ctrl+C</code> y <code>Ctrl+D</code>: interrumpen o limpian el input; dos <code>Ctrl+D</code> seguidos salen de la sesión.
- <code>Ctrl+R</code>: búsqueda inversa interactiva por todo tu historial de prompts.
- <code>Ctrl+B</code>: manda un comando bash o agente a segundo plano para seguir trabajando.
- <code>Ctrl+G</code>: abre tu borrador en el editor externo por defecto.
- <code>Ctrl+Enter</code>: envía de inmediato los mensajes que encolaste mientras Claude trabajaba.
- <code>Alt+P</code>: cambia de modelo sin perder el prompt escrito; <code>Ctrl+T</code> muestra u oculta la checklist de tareas.

## Autocompletado y atajos de entrada

El autocompletado va más allá del menú de <code>/</code>: escribir <code>/</code> a mitad del mensaje (después de un espacio) también completa comandos, aunque solo se ejecutan cuando inicia el mensaje. <code>@</code> dispara el autocompletado de rutas de archivo para señalar el archivo exacto sin escribirlo entero. El prefijo <code>!</code> entra en shell mode: corre el comando, suma su salida al contexto y Claude responde sobre ella; ahí, <code>Tab</code> completa comandos <code>!</code> anteriores y rutas. <code>:</code> sugiere shortcodes de emoji y <code>?</code> con el input vacío abre el panel de atajos.

Para multilínea: <code>\</code> + Enter funciona en cualquier terminal y <code>Ctrl+J</code> no requiere configuración; <code>Shift+Enter</code> queda nativo tras correr <code>/terminal-setup</code> en VS Code, Cursor u otro terminal compatible. Las flechas ↑ y ↓ (o <code>Ctrl+P</code> / <code>Ctrl+N</code>) navegan el historial, que se guarda por directorio de trabajo y alcanza sesiones anteriores del proyecto.

## Permisos: qué puede y qué no hacer el agente

Los modos de permiso definen cuánto te pregunta Claude antes de actuar. El modo default (Manual) pide aprobación para cada herramienta; <code>acceptEdits</code> acepta las ediciones de archivos automáticamente; <code>plan</code> deja el repo de solo lectura mientras se planifica; <code>bypassPermissions</code> saltea todo tipo de confirmaciones, igual que la flag <code>--dangerously-skip-permissions</code> al iniciar la CLI; y el modo <code>auto</code> delega decisiones a un clasificador. Se ciclan con <code>Shift+Tab</code> y se gestionan con <code>/permissions</code>.

La regla práctica: en repos propios con entornos descartables (contenedores, worktrees) podés usar <code>acceptEdits</code> o incluso bypass para ganar velocidad; en repos ajenos, con credenciales o acceso a producción, mantené el modo manual. Si los prompts te saturan, <code>/fewer-permission-prompts</code> escanea tus transcripts y arma una allowlist de solo lectura en <code>.claude/settings.json</code>.

## Plan mode: que el agente piense antes de tocar nada

Entrá a plan mode con <code>Shift+Tab</code> hasta el indicador "plan" o con <code>/plan</code> (acepta una descripción de la tarea como argumento). En este modo Claude lee el código, arma un plan de acción y no edita nada hasta que lo apruebes. Es la forma más segura de atacar cambios que atraviesan varios archivos: separa el análisis de la ejecución y te deja corregir el rumbo antes de que exista un solo diff. Aprobado el plan, Claude ejecuta paso a paso; después conviene cerrar con <code>/diff</code> y <code>/code-review</code> para verificar que cumplió lo prometido.

## Buenas prácticas de prompting en la terminal

- Arrancá cada repo con <code>/init</code> y mantené el <code>CLAUDE.md</code> corto y accionable: convenciones, comandos de build y test, y límites claros. Para editarlo, <code>/memory</code>.
- Un objetivo por tarea: pedidos concretos, archivos mencionados con <code>@</code> y criterios de éxito verificables ("que pasen los tests del módulo X") en lugar de "mejorá el proyecto".
- Usá <code>/clear</code> entre tareas sin relación, <code>/compact</code> cuando la conversación se alarga y <code>/context</code> para ver qué consume la ventana.
- Encolá mensajes mientras Claude trabaja con Enter y envialos ya con <code>Ctrl+Enter</code>; <code>Esc</code> interrumpe sin perder lo hecho.
- Revisá siempre con <code>/diff</code> y <code>/code-review</code> antes de commitear, y mirá los costos con <code>/usage</code>.
- Si recién arrancás, nuestra guía de <a href="/es/blog/claude-code-gratis" target="_blank">Claude Code gratis</a> te muestra un flujo completo sin pagar.

## Conclusión

Los comandos Claude Code no son decoración: son la palanca de velocidad y de control del agente. Los slash commands ordenan la sesión (<code>/clear</code>, <code>/compact</code>, <code>/model</code>, <code>/mcp</code>, <code>/agents</code>), los atajos como <code>Shift+Tab</code>, <code>Esc</code>, <code>Tab</code>, <code>Ctrl+L</code> y <code>Ctrl+O</code> te mantienen al teclado sin perder contexto, y los modos de permiso y el plan mode garantizan que nada se toque sin tu visto bueno. Con un <code>CLAUDE.md</code> bien escrito y revisiones con <code>/diff</code> y <code>/code-review</code>, tenés un flujo profesional de punta a punta.

Si querés llevar este flujo a un proyecto real de <a href="/es/services/programacion" target="_blank">programación y desarrollo web</a>, o necesitás que lo implementemos con vos, <a href="/es/contact" target="_blank">Contáctanos</a> y lo vemos juntos.
