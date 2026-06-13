---
title: "Guía precios mayoristas"
description: "La idea quedaría así:"
pubDate: 2025-12-11
heroImage: "/assets/blog/covers/guia-precios-mayoristas.svg"
---





<p>La idea quedaría así:</p>



<blockquote class="is-layout-flow">
<p>Toda la tienda visible para cualquiera (invitados + clientes WooCommerce normales)<br><strong>EXCEPTO</strong> la categoría <code>Mayorista</code>, que solo la ve el rol especial que creás con Ultimate Member.</p>
</blockquote>



<p>Te explico cómo montarlo paso a paso.</p>



<h2>1. Crear un rol “mayorista” en ultimate member</h2>



<ol>
<li>En tu admin:<br><strong>Ultimate Member → User Roles → Add New (Añadir rol)</strong>.</li>



<li>Poné un nombre tipo:
<ul>
<li><em>Role Title</em>: <code>Mayorista</code></li>



<li><em>Role ID</em>: <code>mayorista</code> (o algo similar).</li>
</ul>
</li>



<li>Marcá las capacidades básicas (puede heredar de “Subscriber” o “Customer”, según tu configuración).</li>



<li>Guardá.</li>
</ol>



<p>Con esto ya tenés un rol que vas a usar solo para la gente que se registre a través del formulario de Ultimate Member.</p>



<blockquote class="is-layout-flow">
<p>Más adelante, si querés, podés usar la extensión UM–WooCommerce para cambiar o asignar roles automáticamente cuando compran algo, pero para tu caso no es obligatorio. <a href="https://docs.ultimatemember.com/article/1590-how-to-use-user-roles?utm_source=chatgpt.com" target="_blank" rel="noreferrer noopener">docs.ultimatemember.com+1</a></p>
</blockquote>



<h2>2. Hacer que tu formulario de ultimate member asigne ese rol</h2>



<ol>
<li>Ve a <strong>Ultimate Member → Forms</strong>.</li>



<li>Editá el formulario de registro que usás para tu “lista mayorista”.</li>



<li>En las opciones del formulario, buscá algo tipo <strong>“Assign role to form” / “Rol por defecto”</strong> y elegí el rol <code>Mayorista</code> que creaste.</li>



<li>Guardá el formulario.</li>
</ol>



<p>Resultado:</p>



<ul>
<li>Usuarios que se registran vía <strong>WooCommerce checkout</strong> → seguirán con rol <code>customer</code> normal.</li>



<li>Usuarios que se registran vía <strong>formulario de UM</strong> → reciben el rol <code>mayorista</code> (los “especiales” que verán la categoría Mayorista).</li>
</ul>



<h2>3. Activar la restricción de contenido para productos y categorías</h2>



<p>Ultimate Member permite aplicar restricción por <strong>post type</strong> y por <strong>taxonomía (categorías, tags, etc.)</strong>.<a href="https://docs.ultimatemember.com/article/1623-post-term-restriction-content-settings" target="_blank" rel="noreferrer noopener">docs.ultimatemember.com+1</a></p>



<ol>
<li>Ir a <strong>Ultimate Member → Settings → Access → Content Restriction</strong>.</li>



<li>En la sección <strong>“Enable the Content Restriction settings for post types”</strong>, marcá el post type <code>product</code>. <a href="https://docs.ultimatemember.com/article/1623-post-term-restriction-content-settings" target="_blank" rel="noreferrer noopener">docs.ultimatemember.com</a></li>



<li>Más abajo, en <strong>“Enable the Content Restriction settings for taxonomies”</strong>, marcá la taxonomía <code>product_cat</code> (categorías de producto). <a href="https://docs.ultimatemember.com/article/1623-post-term-restriction-content-settings" target="_blank" rel="noreferrer noopener">docs.ultimatemember.com</a></li>



<li>Guardá cambios.</li>
</ol>



<p>Esto hace que en:</p>



<ul>
<li>cada <strong>producto</strong>, y</li>



<li>cada <strong>categoría de producto</strong></li>
</ul>



<p>aparezca un cuadro “Ultimate Member: Content Restriction” para definir quién lo puede ver. <a href="https://docs.ultimatemember.com/article/1623-post-term-restriction-content-settings" target="_blank" rel="noreferrer noopener">docs.ultimatemember.com+1</a></p>



<h2>4. Restringir solo la categoría “mayorista”</h2>



<p>Ahora viene la parte clave:</p>



<ol>
<li>Ve a <strong>Productos → Categorías</strong>.</li>



<li>Editá la categoría <code>Mayorista</code>.</li>



<li>Debajo de la descripción de la categoría deberías ver el bloque:<br><strong>“Ultimate Member: Content Restriction”</strong>.</li>



<li>Activá <strong>“Restrict access to this term and its posts?”</strong> (o texto similar). <a href="https://docs.ultimatemember.com/article/1623-post-term-restriction-content-settings" target="_blank" rel="noreferrer noopener">docs.ultimatemember.com</a></li>



<li>En <strong>“Who can access this term and its posts?”</strong> elegí:
<ul>
<li><strong>Logged in users</strong> → y se te va a abrir la opción <strong>“Select which roles can access this term and its posts”</strong>.</li>



<li>Seleccioná <strong>solo</strong> el rol <code>mayorista</code>. <a href="https://docs.ultimatemember.com/article/1623-post-term-restriction-content-settings" target="_blank" rel="noreferrer noopener">docs.ultimatemember.com</a></li>
</ul>
</li>



<li>Muy recomendable: activar la opción<br><strong>“Display 404 page for users who do not have access to this term on the term’s archive page and terms’ posts single pages”</strong>.
<ul>
<li>Con esto, <strong>la categoría Mayorista y todos los productos que cuelgan de ella quedan ocultos de forma segura</strong>, no aparecen en listados ni se pueden ver si alguien intenta entrar directo por URL. <a href="https://docs.ultimatemember.com/article/1623-post-term-restriction-content-settings" target="_blank" rel="noreferrer noopener">docs.ultimatemember.com</a></li>
</ul>
</li>



<li>Guardá la categoría.</li>
</ol>



<h2>5. Qué va a ver cada tipo de usuario</h2>



<ul>
<li><strong>Visitante (no logueado)</strong>
<ul>
<li>Ve todas las categorías y productos <strong>menos</strong> <code>Mayorista</code>.</li>
</ul>
</li>



<li><strong>Cliente WooCommerce normal (rol <code>customer</code>, creado al comprar)</strong>
<ul>
<li>Igual que un visitante: ve todo menos <code>Mayorista</code>.</li>
</ul>
</li>



<li><strong>Usuario de la lista Ultimate Member (rol <code>mayorista</code>)</strong>
<ul>
<li>Ve <strong>todas las categorías</strong>, incluida <code>Mayorista</code>, y puede entrar a los productos de esa categoría.</li>
</ul>
</li>
</ul>



<p>Esto cumple exactamente con lo que querés:</p>



<blockquote class="is-layout-flow">
<p>categoría “Mayorista” solo visible para usuarios con rol de Ultimate Member, y oculta para público y clientes estándar.</p>
</blockquote>



<h2>6. Cosas útiles para testear que todo funcione</h2>



<ol>
<li><strong>Crear 3 usuarios de prueba</strong>:
<ul>
<li>Uno sin cuenta (usar modo incógnito).</li>



<li>Uno que se cree al comprar algo normal en WooCommerce (rol <code>customer</code>).</li>



<li>Uno que se registre por el formulario UM (rol <code>mayorista</code>).</li>
</ul>
</li>



<li>Verificar:
<ul>
<li>En modo incógnito → no aparece <code>Mayorista</code>.</li>



<li>Logueado como <code>customer</code> → tampoco aparece <code>Mayorista</code>.</li>



<li>Logueado como <code>mayorista</code> → sí aparece <code>Mayorista</code> + productos dentro.</li>
</ul>
</li>
</ol>



<p>Si querés, en un siguiente mensaje te puedo escribir un <strong>checklist corto</strong> en formato “manual técnico” tipo:</p>



<ul>
<li>Ruta exacta de cada pantalla del panel.</li>



<li>Frases que deberían aparecer (para que puedas comparar).</li>



<li>Cómo forzar un 404 vs mensaje de “acceso restringido” en esas páginas.</li>
</ul>
                                    
                        
                                                
                    
                    
