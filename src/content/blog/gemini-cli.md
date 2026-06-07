---
title: "Gemini CLI en VS Code usando Vertex AI"
description: "Trabajar con inteligencia artificial dentro del editor puede acelerar muchísimo el análisis de proyectos, la revisión de código y la planificación técnica."
pubDate: 2026-04-16
---



                


<p>Trabajar con inteligencia artificial dentro del editor puede acelerar muchísimo el análisis de proyectos, la revisión de código y la planificación técnica. Sin embargo, cuando uno empieza a integrar herramientas como <strong>Gemini CLI en Visual Studio Code</strong>, no siempre todo funciona a la primera.</p>



<p>En mi caso, el objetivo era claro: usar <strong>Gemini CLI en VS Code</strong> conectado a <strong>Vertex AI</strong> dentro de <strong>Google Cloud</strong>, en lugar de depender de una API key tradicional. La idea era aprovechar un entorno más sólido, más profesional y mejor alineado con un flujo de trabajo real de desarrollo.</p>



<p>El problema apareció cuando, aun teniendo parte de la configuración avanzada, Gemini CLI seguía fallando con errores de autenticación.</p>



<h2>El problema: Gemini CLI no respondía como esperaba</h2>



<p>Al ejecutar Gemini CLI dentro de Visual Studio Code, el comportamiento no era consistente. En algunos momentos parecía iniciar correctamente, pero al enviar instrucciones devolvía errores de autenticación. En otros casos, el sistema seguía pidiendo una API key, incluso cuando el objetivo era usar <strong>Vertex AI con Google Cloud</strong>.</p>



<p>Ese fue el punto que más confusión generó.</p>



<p>A simple vista, parecía que todo estaba correctamente configurado. La terminal abría, Gemini CLI iniciaba y parte de la autenticación parecía resuelta. Pero al intentar trabajar con el proyecto real, seguían apareciendo errores relacionados con credenciales.</p>



<h2>Qué estaba pasando realmente</h2>



<p>La raíz del problema era una mezcla de configuración previa y variables de entorno heredadas.</p>



<p>Aunque la intención era usar <strong>Vertex AI</strong>, el entorno todavía conservaba rastros de autenticación anterior mediante:</p>



<ul>
<li><code>GEMINI_API_KEY</code></li>



<li><code>GOOGLE_API_KEY</code></li>
</ul>



<p>Mientras esas variables siguieran presentes, el comportamiento de Gemini CLI podía entrar en conflicto con el uso de <strong>Google Cloud Application Default Credentials</strong>.</p>



<p>En otras palabras, el editor y la terminal estaban intentando trabajar con dos caminos de autenticación distintos al mismo tiempo.</p>



<p>Y eso terminaba rompiendo la ejecución.</p>



<h2>La solución: limpiar el entorno y forzar Vertex AI</h2>



<p>La solución consistió en limpiar completamente las claves anteriores, dejar vacías esas variables, definir explícitamente que quería usar Vertex AI y establecer el proyecto y la ubicación correctos dentro del entorno de VS Code.</p>



<p>Después, el paso fundamental fue autenticar con:</p>



<pre>gcloud auth application-default login</pre>



<p>Ese comando fue el punto de inflexión, porque permitió que la autenticación se apoyara en las <strong>Application Default Credentials</strong> de Google Cloud, que era exactamente el camino correcto para trabajar con Vertex AI desde el entorno local.</p>



<h2>Los comandos que utilicé en VS Code</h2>



<p>Estos son los comandos que usé en la terminal de Visual Studio Code para resolver el problema:</p>



<pre><code>Remove-Item Env:\GEMINI_API_KEY -ErrorAction Ignore
Remove-Item Env:\GOOGLE_API_KEY -ErrorAction Ignore

$env:GEMINI_API_KEY=""
$env:GOOGLE_API_KEY=""

$env:GOOGLE_GENAI_USE_VERTEXAI="true"
$env:GOOGLE_CLOUD_PROJECT="project-34567154-44b6-48f8-8d3"
$env:GOOGLE_CLOUD_LOCATION="global"

gcloud auth application-default login</code></pre>



<h2>Qué hace cada comando</h2>



<p>Para quienes quieran entender bien la lógica detrás de la solución, este fue el papel de cada bloque.</p>



<h3>1. Eliminar claves antiguas del entorno</h3>



<pre><code>Remove-Item Env:\GEMINI_API_KEY -ErrorAction Ignore<br>Remove-Item Env:\GOOGLE_API_KEY -ErrorAction Ignore</code></pre>



<p>Con esto eliminé posibles variables activas que seguían forzando el uso de autenticación por clave.</p>



<h3>2. Vaciar explícitamente las API keys</h3>



<pre><code>$env:GEMINI_API_KEY=""<br>$env:GOOGLE_API_KEY=""</code></pre>



<p>Esto ayudó a evitar que el entorno siguiera heredando valores previos en la sesión actual.</p>



<h3>3. Forzar el uso de Vertex AI</h3>



<pre><code>$env:GOOGLE_GENAI_USE_VERTEXAI="true"</code></pre>



<p>Esta línea fue clave para indicar de forma explícita que Gemini debía trabajar con Vertex AI.</p>



<h3>4. Definir proyecto y ubicación</h3>



<pre><code>$env:GOOGLE_CLOUD_PROJECT="project-09b11e05-e833-4306-ba7"
$env:GOOGLE_CLOUD_LOCATION="global"</code></pre>



<p>Acá establecí el proyecto correcto y una ubicación global, algo especialmente útil cuando se trabaja con determinados modelos y configuraciones dentro de Vertex AI.</p>



<h3>5. Autenticación con credenciales por defecto</h3>



<pre>gcloud auth application-default login</pre>



<p>Este paso permitió autenticar correctamente el entorno local contra Google Cloud usando credenciales adecuadas para trabajar con Vertex AI.</p>



<h2>El resultado después de aplicar la solución</h2>



<p>Una vez ordenado el entorno y autenticado correctamente con Google Cloud, Gemini CLI empezó a comportarse de una forma mucho más coherente dentro de Visual Studio Code.</p>



<p>A partir de ahí, la experiencia cambió por completo.</p>



<p>Ya no se trataba de pelear contra errores de credenciales o rutas de autenticación cruzadas, sino de usar Gemini CLI como realmente quería hacerlo: dentro del proyecto, desde la terminal del editor y con un flujo mucho más profesional para análisis técnico, revisión de estructura y asistencia contextual.</p>



<h2>Qué aprendí de esta experiencia</h2>



<p>La principal enseñanza fue esta: cuando una integración con inteligencia artificial falla, muchas veces el problema no está en una sola cosa.</p>



<p>Puede ser una suma de factores:</p>



<ul>
<li>variables viejas cargadas en el entorno,</li>



<li>mezcla entre API key y Vertex AI,</li>



<li>una terminal de VS Code con configuración heredada,</li>



<li>o una autenticación local incompleta.</li>
</ul>



<p>Por eso, antes de asumir que la herramienta “no funciona”, conviene revisar el entorno con paciencia y limpiar todo lo que pueda estar interfiriendo.</p>



<p>En mi caso, la solución no pasó por reinstalarlo todo desde cero, sino por entender qué método de autenticación quería usar realmente y dejar el entorno alineado con esa decisión.</p>



<h2>Mi conclusión sobre Gemini CLI en VS Code</h2>



<p>Después de resolverlo, mi impresión es muy positiva.</p>



<p>Usar <strong>Gemini CLI en Visual Studio Code</strong> puede aportar mucho valor cuando querés analizar proyectos, revisar código, ordenar documentación técnica y trabajar con asistencia de IA sin salir del editor.</p>



<p>Pero para que eso funcione bien, conviene tener muy claro desde el principio si vas a trabajar con <strong>API key</strong> o con <strong>Vertex AI</strong>. Mezclar ambos caminos en el mismo entorno solo genera fricción.</p>



<p>En mi caso, la solución definitiva fue limpiar las claves anteriores, forzar el uso de Vertex AI y autenticar correctamente con Google Cloud desde la terminal.</p>



<p>Y una vez hecho eso, el flujo de trabajo mejoró muchísimo.</p>



<h2>Conclusión</h2>



<p>Si estás intentando usar <strong>Gemini CLI en VS Code</strong> y te encontrás con errores de autenticación, mi recomendación es revisar primero las variables de entorno y confirmar que no estén conviviendo métodos de acceso incompatibles.</p>



<p>A veces la diferencia entre que todo falle y que finalmente funcione está en unos pocos comandos bien aplicados.</p>



<p>En este caso, esos comandos fueron suficientes para transformar un entorno confuso en una configuración lista para trabajar con <strong>Vertex AI desde Visual Studio Code</strong>.</p>
                                    
                        <div class="page-links">
                                                
                    
                    

