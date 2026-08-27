---
title: "Máster en Posicionamiento Web con IA"
description: "Descubre qué hacer para decirle a la IA cómo entrar a los datos de Google de tu sitio web y sacar los temas donde ya aparecés pero muy abajo, y escriba SOLO sobre ellos, los que la gente busca de verdad, con tu experiencia dentro."
pubDate: 2026-07-19
heroImage: "/assets/blog/covers/maestro-posicionamiento-web-ia.svg"
---

<h1>Máster en Posicionamiento Web con IA</h1>

<ul>
 	<li>Descubre <strong>qué hacer para decire a la IA cómo entrar a los datos de Google de tu sitio web y sacar los temas donde ya aparecés pero muy abajo</strong>, y escriba SOLO sobre ellos, los que la gente buca de verdad, con tu experiencia dentro.</li>
 	<li>El prompt completo, (el largo, el que valida la demanda con tus datos reales de Google antes de escribir una sola palabra) cómo conectar los datos a tu IA, la arquitectura de temas para no canibalizar keywords, el estándar exacto que hace que Google premie tu contenido en vez de cazarlo, y el kit de venta a empresas para conseguir el primer cliente).</li>
</ul>

<h2>1. El sistema, sin humo: el volumen es el riesgo, no la jugada</h2>

La tentación es pensar que el truco es el volumen: soltar cien mil artículos con bots y a facturar. Es exactamente al revés. El volumen es lo que Google penaliza. Lo que de verdad separa una <a href="https://selvaggiesteban.dev/es/services/posicionamiento-seo/">estrategia SEO</a> que aguanta del spam es una sola disciplina, y es la que casi nadie copia: no escribir nada que Google no confirme que la gente busca.

Eso es el sistema de <a href="https://selvaggiesteban.dev/es/blog/automatizacion-de-marketing-profesional/">automatización con IA</a>. Un filtro que va delante de la máquina de escribir y solo deja pasar los temas que cumplen dos cosas: que hay demanda real (Google ya te enseña para esa búsqueda) y que tú tienes algo real que decir (experiencia, un caso, un dato tuyo). Todo lo que no pasa ese filtro, no se escribe. Suena obvio dicho así, pero el 99% de la gente que "hace <a href="https://selvaggiesteban.dev/es/services/posicionamiento-seo/">SEO con IA</a>" hace lo contrario: le pide a la IA cien temas de la nada y publica los cien. Esos cien son ruido, y el ruido es lo que penaliza Google.

El sitio web ya te está diciendo, en los datos de Google, dónde estás a un empujón de la primera página. Son las búsquedas donde ya apareces pero en la página 2 o 3 (el puesto 11 al 30, más o menos), con muchas impresiones y pocos clics. Eso quiere decir que Google ya te considera relevante para ese tema y te enseña, pero no lo suficiente arriba para que te visiten. Un artículo bueno sobre justo ese tema es el que más barato te sube, porque no partes de cero: partes de la página 2.

<h2>2. Cómo conectar los datos de Google con la IA</h2>

Para que la automatización funcione, tu IA necesita ver los datos de tu web en Google. Esos datos viven en una herramienta gratuita de Google que se llama Search Console (si tienes web y no la tienes dada de alta, hazlo primero, es gratis y es de Google).

<h3>Camino A: cero setup, el CSV.</h3>

En Search Console entras en el informe de Rendimiento, pestaña Consultas, pones el rango de los últimos 6 meses, activas las cuatro columnas (Clics, Impresiones, CTR y Posición media) y le das a Exportar. Te baja un documento. Se lo adjuntas a tu IA y listo. Suficiente para empezar hoy sin tocar nada más.

<h3>Camino B: queda montado para siempre, un conector.</h3>

Hay un conector (lo que en el mundo de la IA se llama un MCP) que enchufa Search Console directo a Claude Code, de modo que tu IA le pregunta a Google sola cuando lo necesita. El más usado es un proyecto abierto de la comunidad llamado mcp-gsc: le da a tu IA acceso a tus consultas, clics, impresiones, CTR y posición. Se instala con uvx mcp-search-console y se autentica con tu cuenta de Google (por login de navegador o por una clave de servicio). Es un proyecto de un tercero, no de Google ni de Anthropic, así que le estás dando acceso a tus datos con tus credenciales. Revisa la versión antes de usarlo en serio, y si no quieres tocar nada de esto, tira del CSV del camino A, que hace el mismo trabajo.

<h3>Qué significan esos datos</h3>

La consulta es lo que la gente escribió; las impresiones, cuántas veces te enseñó Google; los clics, cuántas veces te visitaron; el CTR es clics partido por impresiones (si es bajo, te ven pero no te eligen); y la posición media, tu puesto medio. La distancia de golpeo vive en posición 11 a 30 con impresiones altas.

<h3>3. El prompt para hacer el trabajo de un consultor SEO</h3>

Importante: Requiere haber conectado antes tus datos de Google (bloque 2). Pegalo tal cual y cambiá lo que va entre {llaves}:

<pre>Tienes acceso a mi Google Search Console. Vamos a hacer un plan de contenido que solo
escriba lo que Google YA me confirma que la gente busca. Sigue estos pasos y no te saltes ninguno.

PASO 1 → Deduce mi negocio. Entra en mi web {URL} (léela rastreando el sitemap {} y el enlazado interno que encuentres navegando: el home, la página nosotros, páginas de productos o servicios y artículos de blog si hay) y escríbeme en 5 líneas: qué vendo, a quién, y las 3 categorías de tema en las que tendría sentido que yo apareciera en Google. No inventes: si algo no está claro en la web, dilo.

PASO 2 → Saca mis datos reales de los últimos 6 meses de Search Console. Tráeme las consultas con: consulta, posición media, impresiones, clics y CTR. Al menos las 500 con más impresiones.

PASO 3 → Cribar por distancia de golpeo. De esa lista, quédate SOLO con las búsquedas que cumplan las tres a la vez:
a) posición media entre 11 y 30 (estoy en página 2-3 de Google, a un empujón),
b) impresiones altas (Google ya me enseña mucho: hay demanda real),
c) CTR bajo o clics casi cero (aparezco pero no me llevo el clic).
Ordénalas por impresiones de mayor a menor. Descarta las que ya están en el top 10 (esas ya funcionan) y las que tienen impresiones ridículas (no hay demanda).

PASO 4 → Filtra por relevancia de negocio. De las que sobrevivan, tacha las que no tengan nada que ver con lo que vendo ni con alguien que me podría comprar. Quiero temas donde yo tenga experiencia real y donde quien busca pueda acabar siendo cliente.

PASO 5 → Entrégame una tabla con: búsqueda | posición actual | impresiones/mes | CTR actual | por qué está a tiro | qué ángulo MÍO (mi experiencia real) puede ganarla. Marca las 10 con mejor relación de demanda/esfuerzo como "empieza por aquí".

PASO 6 → Agrupa esas búsquedas en temas (clusters) y dime, para cada uno, cuál será la página gorda (el pilar) y cuáles los artículos satélite. Avísame si dos búsquedas son tan parecidas que dos artículos se pelearían por lo mismo: en ese caso fundelos en uno. No escribas ningún artículo todavía. Primero quiero ver la tabla y los temas y decidir yo.</pre>

<h3>El freno del final</h3>

Fijate en el freno del final: "no escribas nada todavía". El <strong>sistema de automatización con IA</strong> no es una máquina de escribir, es una máquina de decidir qué merece escribirse. Vos mirás la tabla, tachás lo que no encaja con tu negocio, y solo entonces le das luz verde a los diez primeros. Ese "decido yo" es la mitad del sistema.

<h3>Segundo prompt: escribir un artículo para capturar el featured snippet de Google</h3>

Cuando ya tengas los temas aprobados, el segundo prompt es para escribir uno, y ahí entra el estándar del bloque 5.

<pre>Redacción de artículo optimizado para SEO de Google en primera persona del singular, en Español de {%}, de categoría de {%} para el blog institucional de "{%}" con extensión mínima de "{%}" palabras y con la palabra clave objetivo en el/los subencabezado/s como H2, H3, H4, etc. ordenados con párrafos de hasta 100 palabras cada uno incluyendo de manera natural y atractiva la palabra clave principal "{%}", adicionalmente enlazado externo con dirección URL {%} y anchor text "{%}", enlace interno a otra página del sitio web, o entrada, forzando el llamado a la acción con dirección URL {%}, y cierre con conclusión del tema, consejos e invitación a hacer contacto con "{%}". Adicionalmente eres encargado de crear título SEO, descripción SEO, mínimo 5 textos alternativos de imágenes, y configuración de enlace permanente. Nota: El cuerpo debe incluir al principio una lista desordenada con 2 (dos) o 3 (tres) párrafos destacados de hasta 160 caracteres cada uno.</pre>

<h3>4. La arquitectura de temas (sin canibalizarte)</h3>

No sueltes artículos huérfanos. Se organizan en pilar y satélites: una página gorda por tema central, y entre seis y doce artículos alrededor que responden subpreguntas, todos enlazados entre sí y hacia el pilar. Eso le dice a Google que dominás el tema, no que tenés un artículo suelto.

<h3>La trampa a evitar: la canibalización</h3>

La canibalización es cuando dos páginas tuyas se pelean por la misma búsqueda y se hacen sombra la una a la otra (Google no sabe cuál mostrar y acaba mostrando peor las dos). La regla práctica: si no sabés decir en una frase en qué se diferencia un satélite del de al lado, es que se van a pelear; fundelos en uno. La señal de que ya te está pasando: la página tuya que sale para una búsqueda va cambiando de una semana a otra entre dos URLs.

<h3>5. El estándar que Google premia (para no ser cazado)</h3>

Acá está la letra pequeña que hace que todo lo demás no te explote. Google tiene una política pública contra lo que llama "abuso de contenido a escala". La definición oficial es: generar muchas páginas cuyo fin principal es manipular el ranking sin ayudar al usuario. Y aclara algo importante: da igual el método. La política aplica "sea con IA, con esfuerzo humano o una mezcla". O sea, la IA no es el delito. El delito es el resultado: montones de páginas sin valor para trepar en Google. De hecho Google pone como ejemplo explícito de infracción "usar IA generativa para producir muchas páginas sin añadir valor".

<h3>E-E-A-T: el escudo</h3>

El escudo tiene nombre y son unas siglas que verás por todas partes: E-E-A-T. La primera E es de Experiencia (Google la añadió en 2022). Traducido a lo que vos hacés al escribir con IA:

<ul>
 	<li>Experiencia de primera mano. Tu caso real, tus números, capturas propias, resultados con su fecha. La IA redacta, pero el dato es tuyo. Es lo que ningún competidor puede copiar y ninguna IA puede inventar.</li>
 	<li>Datos citados. Cada afirmación fuerte con su fuente enlazada (esto ya es doctrina de la casa).</li>
 	<li>Autor verificable. No un artículo anónimo firmado por "el equipo". Un autor real y verificable detrás.</li>
</ul>

Para que no te lo vendan como un botón mágico: E-E-A-T no es un interruptor de ranking directo. Es el marco con el que los revisores humanos de Google juzgan la calidad. Hacer las cosas así baja el riesgo de que te cacen y sube tus opciones; no te garantiza el puesto 1. Google además aprieta esto en cada actualización grande de su algoritmo (las llamadas core updates), y las páginas de relleno son las primeras que caen.

<h2>6. Nicho, precio y primer cliente: el kit de venta a empresas</h2>

Este mismo sistema es vendible como servicio, y ahí está la segunda salida de todo esto. No le vendés a una empresa "cien mil artículos". Le vendés esto: escribir solo lo que Google ya confirma que buscan sus clientes, con la experiencia del negocio dentro, para subir de la página 2 a la 1 en los temas que ya casi tienen ganados.

<h3>Qué cobrar (rangos reales 2025-2026)</h3>

El <a href="https://selvaggiesteban.dev/es/services/posicionamiento-seo/">SEO para pyme</a> se mueve en unos pocos miles al mes. La agencia media cobra alrededor de 3.200 dólares mensuales, y la mayoría cobra por encima de los 1.000 (los datos varían por país: en EE. UU. y Canadá casi el 80% de las agencias cobra más de 1.000 al mes; a nivel mundial hay más agencias por debajo). Se cobra por cuota mensual recurrente, no por horas: cobrás por el resultado que se acumula. Algunas agencias cobran además una cuota de arranque de una vez, pero no es la norma (la mayoría no la cobra); si la ponés, va bien para filtrar a quien va en serio.

<h3>Cómo conseguís el primer cliente (en orden)</h3>

Elegí un nicho estrecho. Clínicas dentales de tu ciudad, fisios, despachos, un tipo concreto de e-commerce. "Hago SEO para cualquiera" no vende; "monto el SEO de clínicas dentales" sí, porque el de al lado te recomienda.

Auditoría gratis como cebo, pero de las buenas. No una auditoría genérica de "tu web carga lento". Mostrale tres búsquedas que ese negocio concreto ya tiene a distancia de golpeo y no está aprovechando (sacalas con el prompt espía sobre su web). Y traducí cada hallazgo a dinero, no a jerga: no "estás en el puesto 14 de esta keyword", sino "hay X personas al mes buscando esto en tu zona y se las está llevando tu competencia".

Un caso. Hacé el primero gratis o a mitad de precio a cambio de un testimonio con cifra. Ese caso te abre los siguientes.

La auditoría gratis bien hecha convierte bien según la gente del oficio, porque cambia la conversación de "te vendo SEO" a "mirá este problema tuyo que te cuesta dinero". Y esa conversación la gana el especialista, no el generalista.

<h2>7. La frontera honesta (lo que no te sale gratis ni rápido)</h2>

<h3>El volumen es el riesgo, no la jugada</h3>

Cientos de miles de artículos generados son exactamente el perfil que vigila la política de abuso de contenido a escala. Que a ellos les funcione hoy no significa que tu web sobreviva si copiás el volumen sin la experiencia real dentro. Una actualización del algoritmo te puede borrar de un día para otro.

<h3>El SEO tarda</h3>

No es dinero mañana. Indexar lleva semanas, ver tráfico lleva meses, y el crecimiento de verdad, medio año. El sistema no acelera eso; lo que hace es que no tires ese tiempo escribiendo de lo que nadie busca.

<h3>La demanda validada tiene techo</h3>

Solo podés escribir de lo que la gente YA busca y donde YA aparecés. Es una máquina de exprimir lo que tenés, no de inventar demanda nueva. Para crear una categoría desde cero, esto no sirve.

<h3>El primer cliente cuesta</h3>

La auditoría gratis convierte bien, pero primero tenés que conseguir a quién auditar. El nicho estrecho es lo que hace que el boca a boca empiece a rodar.

Todo lo de arriba lo montás y lo vendés vos. No necesitás nada más.

<h4>Google define el "abuso de contenido a escala"</h4>

Google Search Central, Spam Policies — fuente oficial. Google define el "abuso de contenido a escala" y aclara que aplica igual sea IA, humano o mezcla (la IA no está prohibida per se): lo que penaliza es el resultado (muchas páginas sin valor para manipular el ranking), no el método.

<h4>E-E-A-T: Google añadió la E de Experiencia en 2022</h4>

Google Search Central, dic-2022 — fuente oficial. E-E-A-T sigue vigente. Matiz honesto obligatorio: E-E-A-T NO es un factor de ranking directo, es el marco de los revisores humanos de calidad. No es un botón.

<h4>Las keywords a "distancia de golpeo"</h4>

Consenso del oficio SEO (Ahrefs, SE Ranking). Las keywords a "distancia de golpeo" son las de posición 11-30 con muchas impresiones y CTR bajo.

<h4>Google Search Console se conecta a Claude Code</h4>

DATO — Proyecto abierto de la comunidad mcp-gsc (se instala con uvx mcp-search-console; auth por OAuth o cuenta de servicio). Frontera honesta: es un proyecto de un tercero, no oficial de Google ni de Anthropic; el camino sin nada de eso es el export CSV.

<h4>El SEO para pyme se mueve en unos pocos miles al mes</h4>

DATO/TRINCHERA — Encuestas del oficio (Ahrefs, n=439; SE Ranking). La agencia media ~3.200$; la mayoría cobra &gt;1.000$, más en EE. UU./Canadá. La cuota de arranque del 50-100% es la regla CUANDO se cobra, pero la mayoría no la cobra.

Tags: #PosicionamientoWeb #SEOconIA #E-E-A-T #SearchConsole #ContentMarketing #KeywordsDistance #PilarCluster #SEOpportunities #MarketingDigital #FábricaDeSEO