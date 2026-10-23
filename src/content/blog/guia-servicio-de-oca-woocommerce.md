---
title: "Guía servicio de OCA WooCommerce"
description: "Para WooCommerce (y para el plugin de Wanderlust OCA), el servicio que ofrece OCA es:"
pubDate: 2025-12-09
heroImage: "/assets/blog/covers/guia-servicio-de-oca-woocommerce.svg"
---

<p>Integrar OCA en tu tienda WooCommerce es el paso necesario para calcular tarifas reales, mostrar sucursales de retiro y generar etiquetas de envío sin salir de WordPress. En esta guía repaso qué servicio de OCA necesitás, cómo abrir la cuenta y qué datos cargar en el plugin <strong>Wanderlust OCA</strong>.</p>

<ul>
<li><p>OCA e-Pak / Express Pak es el servicio de ecommerce que usás con el plugin Wanderlust OCA en WooCommerce.</p></li>
<li><p>El alta de cuenta se hace con el formulario oficial de OCA Express Pak o con los ejecutivos recomendados.</p></li>
<li><p>En el plugin cargás usuario, password, número de cuenta, CUIT y las operativas que te asignó OCA.</p></li>
</ul>

<ul>
<li><a href="#servicio-de-oca-para-woocommerce">1) ¿Qué servicio de OCA se usa para tiendas WooCommerce?</a></li>
<li><a href="#formulario-alta-oca">2) ¿Cuál es el formulario de alta de OCA para usar el plugin?</a>
<ul>
<li><a href="#opcion-a-formulario-oficial">Opción A – formulario oficial de OCA Express Pak (recomendado)</a></li>
<li><a href="#opcion-b-ejecutivos">Opción B – contactar a los ejecutivos que recomienda el propio plugin</a></li>
</ul>
</li>
<li><a href="#carga-datos-plugin">3) Una vez que tengas el alta, ¿Qué tenés que cargar en el plugin?</a></li>
<li><a href="#errores-comunes">4) Errores comunes al configurar OCA en WooCommerce</a></li>
<li><a href="#checklist-cliente">5) Checklist para tu cliente: paso a paso del alta en OCA</a></li>
<li><a href="#conclusion">Conclusión</a></li>
</ul>

<h3 id="servicio-de-oca-para-woocommerce">1) ¿Qué servicio de oca se usa para tiendas WooCommerce?</h3>

<p>Para WooCommerce (y para el plugin de <strong>Wanderlust OCA</strong>), el servicio que ofrece OCA es:</p>

<blockquote class="is-layout-flow">
<p>🟣 <strong>OCA e-Pak / OCA Express Pak (servicio para ecommerce)</strong></p>
</blockquote>

<p>Es la plataforma de OCA pensada específicamente para tiendas online: permite gestionar envíos de ecommerce y es la que expone la <strong>API OCA e-Pak</strong> que usa el plugin de Wanderlust para calcular tarifas, sucursales, etc. <a href="https://www.oca.com.ar/Productos?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">OCA+1</a></p>

<hr>

<h3 id="formulario-alta-oca">2) ¿Cuál es el formulario de alta de oca para usar el plugin?</h3>

<p>Para poder vincular tu WordPress + WooCommerce con el plugin de Wanderlust, necesitás:</p>

<ul>
<li><strong>Cuenta de cliente OCA e-Pak / Express Pak</strong>, con:
<ul>
<li>Usuario (email con el que entrás a OCA e-Pak)</li>

<li>Password</li>

<li>N° de cuenta OCA</li>

<li>CUIT y contratos / operativas cargadas (domicilio, sucursal, etc.) <a href="https://shop.wanderlust-webdesign.com/wp-content/uploads/2024/03/Wanderlust-OCA-premium.pdf?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">shop.wanderlust-webdesign.com</a></li>
</ul>
</li>
</ul>

<p>El alta se hace así:</p>

<h4 id="opcion-a-formulario-oficial">🔹 Opción a – formulario oficial de oca express pak (recomendado)</h4>

<ol>
<li>Ir al formulario <strong>“OCA EXPRESS PAK – Solicitud de Apertura de Cuenta”</strong>.</li>

<li>Ahí completás datos de tu empresa, ámbito geográfico, web, y seleccionás <strong>“Servicios para E-commerce / Oca Expresspak”</strong>. <a href="https://www1.oca.com.ar/ocaexpresspak/UsuarioWeB/apcuenta.asp?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">www1.oca.com.ar+1</a></li>
</ol>

<p>Con eso OCA te contacta y te genera la cuenta de cliente para ecommerce.</p>

<blockquote class="is-layout-flow">
<p>Si querés ubicarlo rápido: buscá en Google<br><strong><code>"OCA EXPRESS PAK - Solicitud de Apertura de Cuenta"</code></strong><br>Es exactamente ese formulario.</p>
</blockquote>

<h4 id="opcion-b-ejecutivos">🔹 Opción b – contactar a los ejecutivos que recomienda el propio plugin</h4>

<p>En la ficha oficial del plugin <strong>“Wanderlust OCA para WooCommerce”</strong> indican que, para abrir la cuenta con OCA, podés escribir a:</p>

<ul>
<li><strong>Lorena Marienberg – <a href="mailto:lmarienberg@oca.com.ar" target="_blank" rel="nofollow noopener">lmarienberg@oca.com.ar</a></strong></li>

<li><strong>Martín Ibarrola – <a href="mailto:mibarrola@oca.com.ar" target="_blank" rel="nofollow noopener">mibarrola@oca.com.ar</a></strong></li>
</ul>

<p>Ellos se encargan de asistirte con la apertura de cuenta para usar la API e-Pak. <a href="https://es-ar.wordpress.org/plugins/wanderlust-oca-e-pak-shipping-rates/?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">WordPress.org Español (Argentina)</a></p>

<hr>

<h3 id="carga-datos-plugin">3) Una vez que tengas el alta, ¿Qué tenés que cargar en el plugin?</h3>

<p>Con tu cuenta de OCA ya activa y los datos que te envían, en WooCommerce:</p>

<ol>
<li>Instalás y activás <strong>“Wanderlust OCA para WooCommerce”</strong> (o la versión Premium). <a href="https://es-ar.wordpress.org/plugins/wanderlust-oca-e-pak-shipping-rates/?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">WordPress.org Español (Argentina)+1</a></li>

<li>En <strong>WooCommerce → Ajustes → Envío → Zonas de envío</strong>, agregás el método <strong>“OCA / Oca Express Pack”</strong>. <a href="https://es-ar.wordpress.org/plugins/wanderlust-oca-e-pak-shipping-rates/?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">WordPress.org Español (Argentina)</a></li>

<li>En la configuración del método cargás (según el manual de Wanderlust OCA Premium): <a href="https://shop.wanderlust-webdesign.com/wp-content/uploads/2024/03/Wanderlust-OCA-premium.pdf?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">shop.wanderlust-webdesign.com</a>
<ul>
<li>Datos del titular de la cuenta OCA: nombre, apellido, email, dirección, CP, localidad, provincia.</li>

<li><strong>Usuario en OCA</strong> (email de e-Pak).</li>

<li><strong>Password de OCA</strong> (clave de e-Pak).</li>

<li><strong>N° de cuenta OCA</strong> (lo sacás dentro de tu cuenta, en “Condiciones de seguro”).</li>

<li><strong>CUIT</strong> con el formato 00-00000000-0.</li>

<li>Operativas / servicios (envío a domicilio, a sucursal, etc.) que te asignó OCA.</li>
</ul>
</li>

<li>Asegurate de poner <strong>peso y dimensiones</strong> en todos los productos para que calcule tarifas. <a href="https://shop.wanderlust-webdesign.com/wp-content/uploads/2024/03/Wanderlust-OCA-premium.pdf?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">shop.wanderlust-webdesign.com+1</a></li>
</ol>

<hr>

<h3 id="errores-comunes">4) Errores comunes al configurar OCA en WooCommerce</h3>

<p>En la práctica, la mayoría de los problemas con la integración de OCA no vienen del plugin sino de datos mal cargados o expectativas incorrectas sobre el servicio. Estos son los fallos que más se repiten:</p>

<ul>
<li><strong>Credenciales de OCA e-Pak confundidas con las del sitio corporativo de OCA.</strong> El usuario y la contraseña que pedís en el plugin son los de la plataforma e-Pak / Express Pak, no los que uses para rastrear un envío puntual como consumidor.</li>
<li><strong>El número de cuenta no es el CUIT ni el número de cliente genérico.</strong> Como indica el propio manual, se obtiene dentro de tu cuenta e-Pak, en la sección “Condiciones de seguro”.</li>
<li><strong>Productos sin peso ni dimensiones.</strong> El cálculo de tarifas de la API es por volumen y peso real; un producto sin dimensiones puede devolver tarifas vacías o errores al generar la etiqueta.</li>
<li><strong>Operativas no asignadas.</strong> Si contrataste solo envío a sucursal, el método de envío a domicilio no va a cotizar. Verificá con tu ejecutivo de OCA qué operativas tenés activas antes de publicar las opciones de envío en el checkout.</li>
<li><strong>Zona de envío mal delimitada.</strong> El método OCA debe estar dentro de una zona de envío que cubra los destinos que vendés; si la zona solo incluye CABA y vendés a todo el país, el checkout no va a ofrecer OCA en el resto de las provincias.</li>
</ul>

<p>Antes de lanzar la tienda, siempre recomendamos hacer un pedido de prueba real (incluso con un producto a valor simbólico) para verificar que la cotización, la generación de la etiqueta y el seguimiento funcionan de punta a punta con tu cuenta.</p>

<h3 id="checklist-cliente">5) Checklist para tu cliente: paso a paso del alta en OCA</h3>

<p>Si estás implementando la tienda para un cliente y querés que ellos se encarguen del trámite del alta en OCA (o simplemente querés ordenar el proceso), este checklist sirve como guía de enviarse por correo o WhatsApp:</p>

<ol>
<li><strong>Reunir los datos de la empresa:</strong> Razón social, CUIT, domicilio fiscal, localidad, provincia y un email de contacto que se usará como usuario de e-Pak.</li>

<li><strong>Completar el formulario oficial</strong> “OCA EXPRESS PAK – Solicitud de Apertura de Cuenta”, tildando la opción de <strong>Servicios para E-commerce / Oca Expresspak</strong>, o escribir a los ejecutivos recomendados por el plugin.</li>

<li><strong>Recibir de OCA la cuenta activa:</strong> usuario e-Pak, contraseña, número de cuenta y las operativas habilitadas (domicilio, sucursal, retiro en agencia, entre otras).</li>

<li><strong>Compartir esos datos con el equipo técnico</strong> que configura el plugin, junto con el CUIT formateado como 00-00000000-0.</li>

<li><strong>Verificar productos:</strong> que todos los artículos que se envían tengan peso y dimensiones cargadas en WooCommerce.</li>

<li><strong>Hacer un pedido de prueba</strong> desde el checkout con la tarifa calculada por OCA y confirmar que la etiqueta se genera correctamente.</li>
</ol>

<p>Con este checklist, el proceso de alta deja de ser una caja negra: el cliente sabe exactamente qué datos tiene que aportar y vos tenés todo lo necesario para configurar el plugin sin idas y vueltas.</p>

<h3 id="conclusion">Conclusión</h3>

<p>Integrar el <strong>servicio de OCA en WooCommerce</strong> es un proceso directo si seguís los pasos correctos: usar el servicio e-Pak / Express Pak, abrir la cuenta con el formulario oficial o a través de los ejecutivos recomendados, y cargar en el plugin <strong>Wanderlust OCA</strong> el usuario, la contraseña, el número de cuenta, el CUIT y las operativas asignadas. Los errores más comunes se evitan con datos precisos y un pedido de prueba antes de lanzar la tienda.</p>

<p>Si necesitás que tu tienda WooCommerce funcione con envíos OCA de punta a punta —o si estás armando tu comercio electrónico desde cero—, <a href="/es/contact" target="_blank">Contáctanos</a> y lo implementamos con vos. También te puede interesar nuestra <a href="/es/blog/guia-oca-vs-correo-argentino" target="_blank">guía comparando OCA y Correo Argentino</a> para elegir el mejor operador según tu tipo de envío.</p>

<p></p>
