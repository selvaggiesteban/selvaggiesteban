---
title: "Crear clave SSH de VPS en Hostinger"
description: "Cuando trabajo con un VPS en Hostinger, lo primero que hago es configurar acceso SSH seguro: clave, usuario sudo, permisos y firewall paso a paso."
pubDate: 2026-04-18
heroImage: "/assets/blog/covers/crear-clave-ssh-vps-en-hostinger.svg"
---



                


<p>Cuando trabajo con un&nbsp;<strong>VPS en Hostinger</strong>, una de las primeras cosas que hago es configurar un acceso seguro por SSH. No me gusta depender de contraseñas para entrar al servidor ni dejar todo atado al usuario root, porque eso aumenta el riesgo y complica la administración diaria. Por eso, siempre prefiero crear una&nbsp;<strong>clave SSH</strong>, asociarla a un usuario con permisos sudo y dejar una base sólida desde el inicio.</p>
<ul>
<li><p>Seguridad real: reemplazá las contraseñas por autenticación criptográfica y dejá atrás el acceso root directo.</p></li>
<li><p>Un flujo paso a paso probado: actualizar, generar la clave, copiarla, ajustar permisos, probar y activar firewall.</p></li>
<li><p>Bases profesionales: usuario dedicado con sudo, permisos correctos y servidor listo para despliegues.</p></li>
</ul>
<p>En esta guía explico exactamente cómo hago yo este proceso paso a paso: desde actualizar el servidor hasta generar la clave, copiar la clave pública al VPS, ajustar permisos, probar la conexión y reforzar la seguridad con firewall. Si estás empezando con un&nbsp;<strong>VPS en Hostinger</strong>, este flujo te va a ayudar a dejar tu servidor mucho mejor preparado para trabajar.</p>
<ul>
<li><a href="#por-que-clave-ssh">Por qué creo una clave SSH en mi VPS en Hostinger</a></li>
<li><a href="#antes-de-generar">Lo primero que hago antes de generar la clave SSH</a></li>
<li><a href="#usuario-nuevo">Después creo un usuario nuevo y dejo de usar root</a></li>
<li><a href="#generar-clave">Cómo genero mi clave SSH para el VPS en Hostinger</a></li>
<li><a href="#copiar-clave-publica">Cómo copio la clave pública al servidor</a></li>
<li><a href="#permisos">Los permisos que siempre configuro después</a></li>
<li><a href="#probar-conexion">Cómo pruebo la conexión SSH al VPS</a></li>
<li><a href="#firewall">Después activo el firewall</a></li>
<li><a href="#reinicio-final">El reinicio final</a></li>
<li><a href="#conclusion-ssh">Conclusión</a></li>
</ul>
<h2 id="por-que-clave-ssh">Por qué creo una clave ssh en mi VPS en hostinger</h2>



<p>Configurar una clave SSH me permite entrar a mi servidor de forma mucho más segura que usando una contraseña común. Además, me resulta más cómodo, porque una vez que todo queda bien configurado puedo conectarme desde mi equipo sin repetir el ingreso manual de credenciales.</p>



<p>También me ayuda a mantener una estructura profesional de trabajo. En lugar de administrar todo desde root, creo un usuario nuevo para el uso diario, le asigno permisos sudo y utilizo la autenticación por clave pública. Así reduzco riesgos y mantengo una mejor organización en el servidor.</p>



<h2 id="antes-de-generar">Lo primero que hago antes de generar la clave ssh</h2>



<p>Antes de crear la clave, entro al panel de mi VPS en Hostinger, localizo la IP pública del servidor y abro la terminal integrada del navegador. Con eso listo, lo primero que hago es actualizar el sistema para partir de una instalación limpia y al día.</p>



<pre><code>sudo apt update &amp;&amp; sudo apt upgrade -y</code></pre>



<p>Este paso es importante porque instala actualizaciones de seguridad y paquetes recientes. A mí me gusta hacerlo siempre al principio para evitar trabajar sobre una base desactualizada.</p>



<h2 id="usuario-nuevo">Después creo un usuario nuevo y dejo de usar root como cuenta principal</h2>



<p>Una vez actualizado el servidor, creo un usuario nuevo. No recomiendo quedarme trabajando todo el tiempo con root, porque cualquier error puede tener consecuencias más serias. Por eso, prefiero un usuario separado con privilegios administrativos.</p>



<pre><code>sudo adduser nombredeusuario
sudo usermod -aG sudo nombredeusuario
id nombredeusuario
su - nombredeusuario</code></pre>



<p>Con esto dejo preparado el usuario que voy a usar para administrar el VPS en el día a día. A partir de ahí, continúo toda la configuración SSH sobre esa cuenta.</p>



<h2 id="generar-clave">Cómo genero mi clave ssh para el VPS en hostinger</h2>



<p>La generación de la clave SSH la hago desde mi propio ordenador, no desde el VPS. Si estoy en Windows uso PowerShell, y si estoy en Mac o Linux uso Terminal. El comando que ejecuto es este:</p>



<pre><code>ssh-keygen -t ed25519 -C "Mi clave SSH personal"</code></pre>



<p>Cuando lo ejecuto, el sistema me pide confirmar la ubicación del archivo y, si quiero, agregar una passphrase. Normalmente dejo la ruta por defecto, salvo que tenga una necesidad específica. Al finalizar, obtengo dos archivos:</p>



<ul>
<li><strong>La clave privada</strong>, que nunca comparto.</li>



<li><strong>La clave pública</strong>, que es la que copio al servidor.</li>
</ul>



<p>Este punto es clave: la privada se queda en mi equipo y la pública es la que autorizo dentro del VPS.</p>



<h2 id="copiar-clave-publica">Cómo copio la clave pública al servidor</h2>



<p>Después de generar la clave, abro el archivo público y copio su contenido completo. Luego vuelvo a la terminal del VPS en Hostinger, confirmo que estoy dentro del usuario nuevo y creo la carpeta&nbsp;<code>.ssh</code>&nbsp;si no existe.</p>



<pre><code>mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys</code></pre>



<p>Dentro de&nbsp;<code>authorized_keys</code>&nbsp;pego la clave pública completa, guardo el archivo y cierro el editor. De esta manera, el servidor reconoce que mi ordenador está autorizado para conectarse con esa identidad criptográfica.</p>



<h2 id="permisos">Los permisos que siempre configuro después</h2>



<p>Una vez que pego la clave pública, ajusto los permisos correctos. SSH suele ser estricto con esto, así que nunca me salto este paso.</p>



<pre><code>chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys</code></pre>



<p>Con estos permisos me aseguro de que solo mi usuario pueda acceder a la carpeta y al archivo de claves autorizadas.</p>



<h2 id="probar-conexion">Cómo pruebo la conexión ssh al VPS</h2>



<p>Con la clave ya cargada en el servidor, vuelvo a mi ordenador y hago la prueba de conexión:</p>



<pre><code>ssh nombredeusuario@IP_DE_TU_VPS</code></pre>



<p>La primera vez, normalmente aparece el mensaje para aceptar la huella digital del servidor. Confirmo escribiendo&nbsp;<code>yes</code>&nbsp;y continúo. Si todo está bien, ya entro al VPS usando mi clave SSH.</p>



<p>En algunos casos también reinicio el servicio SSH para asegurarme de que la configuración quede correctamente aplicada:</p>



<pre><code>sudo systemctl restart ssh</code></pre>



<h2 id="firewall">Después activo el firewall</h2>



<p>Una vez que verifico que el acceso por SSH funciona, activo un firewall básico con UFW para dejar abiertos solo los puertos necesarios.</p>



<pre><code>sudo ufw status
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status</code></pre>



<p>Primero habilito OpenSSH para no bloquear mi acceso remoto. Después dejo abiertos los puertos 80 y 443 para tráfico web. Con eso, el servidor queda bastante mejor protegido para empezar a trabajar.</p>



<h2 id="reinicio-final">El reinicio final</h2>



<p>Para cerrar el proceso, hago un reinicio del VPS:</p>



<pre><code>sudo reboot</code></pre>



<p>Así me aseguro de que las actualizaciones, el servicio SSH y las reglas del firewall queden plenamente aplicadas. A partir de ese punto, ya tengo un&nbsp;<strong>VPS en Hostinger</strong>&nbsp;mucho más ordenado, seguro y listo para continuar con instalaciones, despliegues o configuraciones adicionales.</p>



<p>Crear una clave SSH para un&nbsp;<strong>VPS en Hostinger</strong>&nbsp;es una de esas tareas que conviene hacer bien desde el principio. En mi caso, forma parte del procedimiento base cada vez que preparo un servidor nuevo. No solo porque mejora la seguridad, sino porque también me obliga a establecer un flujo de trabajo más profesional: usuario separado, acceso más robusto, permisos correctos y firewall activo.</p>



<p>Si estás configurando tu servidor por primera vez, este paso te va a ahorrar problemas y te va a permitir trabajar con una base mucho más sólida desde el primer día.</p>
<h2 id="conclusion-ssh">Conclusión</h2>
<p>Crear una clave SSH para tu VPS en Hostinger es una de las tareas más rentables que podés hacer al preparar un servidor nuevo: mejora la seguridad, elimina la dependencia de contraseñas y te obliga a trabajar con un flujo más profesional desde el primer día. Con el usuario dedicado, los permisos correctos y el firewall activo, tu base queda lista para cualquier despliegue.</p>
<p>Si necesitás ayuda para configurar o administrar tu servidor, en <a href="/es/services" target="_blank">nuestros servicios</a> acompañamos cada paso; también podés leer nuestra <a href="/es/blog/hostinger-premium-web-hosting" target="_blank">review de Hostinger Premium</a> o <a href="/es/contact" target="_blank">Contáctanos</a> y dejamos tu VPS blindado.</p>
                                    
                        
                                                
                    
                    

