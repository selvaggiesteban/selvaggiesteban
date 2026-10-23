---
title: "OCA Service for WooCommerce: Complete Guide"
description: "For WooCommerce (and for the Wanderlust OCA plugin), the service that OCA offers is:"
pubDate: 2025-12-09
heroImage: "/assets/blog/covers/oca-service-for-woocommerce-complete-guide.svg"
---

<p>Integrating OCA into your WooCommerce store is the necessary step to calculate real shipping rates, show pickup branches and generate shipping labels without leaving WordPress. In this guide I go through which OCA service you need, how to open the account and what data to enter in the <strong>Wanderlust OCA</strong> plugin.</p>

<ul>
<li><p>OCA e-Pak / Express Pak is the ecommerce service you use with the Wanderlust OCA plugin in WooCommerce.</p></li>
<li><p>The account sign-up is done through OCA Express Pak's official form or through the recommended executives.</p></li>
<li><p>In the plugin you enter your username, password, account number, CUIT and the operations assigned to you by OCA.</p></li>
</ul>

<ul>
<li><a href="#what-oca-service-for-woocommerce">1) What OCA service is used for WooCommerce stores?</a></li>
<li><a href="#oca-signup-form">2) What is the OCA sign-up form to use the plugin?</a>
<ul>
<li><a href="#option-a-official-form">Option A – Official OCA Express Pak form (recommended)</a></li>
<li><a href="#option-b-executives">Option B – Contact the executives recommended by the plugin itself</a></li>
</ul>
</li>
<li><a href="#plugin-setup-data">3) Once you have the account, what do you need to enter in the plugin?</a></li>
<li><a href="#common-mistakes">4) Common mistakes when setting up OCA in WooCommerce</a></li>
<li><a href="#client-checklist">5) Checklist for your client: OCA sign-up step by step</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>

<h3 id="what-oca-service-for-woocommerce">1) What OCA service is used for WooCommerce stores?</h3>

<p>For WooCommerce (and for the <strong>Wanderlust OCA</strong> plugin), the service that OCA offers is:</p>

<blockquote class="is-layout-flow">
<p>🟣 <strong>OCA e-Pak / OCA Express Pak (service for ecommerce)</strong></p>
</blockquote>

<p>It is OCA's platform designed specifically for online stores: it allows you to manage ecommerce shipments and is the one that exposes the <strong>OCA e-Pak API</strong> that the Wanderlust plugin uses to calculate rates, branches, etc. <a href="https://www.oca.com.ar/Productos?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">OCA+1</a></p>

<hr>

<h3 id="oca-signup-form">2) What is the OCA sign-up form to use the plugin?</h3>

<p>To link your WordPress + WooCommerce with the Wanderlust plugin, you need:</p>

<ul>
<li><strong>OCA e-Pak / Express Pak client account</strong>, with:
<ul>
<li>Username (email you use to log into OCA e-Pak)</li>

<li>Password</li>

<li>OCA account number</li>

<li>CUIT and loaded contracts/operations (address, branch, etc.) <a href="https://shop.wanderlust-webdesign.com/wp-content/uploads/2024/03/Wanderlust-OCA-premium.pdf?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">shop.wanderlust-webdesign.com</a></li>
</ul>
</li>
</ul>

<p>The sign-up process works like this:</p>

<h4 id="option-a-official-form">🔹 Option A – Official OCA Express Pak form (recommended)</h4>

<ol>
<li>Go to the <strong>"OCA EXPRESS PAK – Account Opening Request"</strong> form.</li>

<li>There you fill in your company details, geographic area, website, and select <strong>"E-commerce Services / OCA Expresspak"</strong>. <a href="https://www1.oca.com.ar/ocaexpresspak/UsuarioWeB/apcuenta.asp?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">www1.oca.com.ar+1</a></li>
</ol>

<p>With that, OCA contacts you and creates your ecommerce client account.</p>

<blockquote class="is-layout-flow">
<p>If you want to find it quickly: search on Google<br><strong><code>"OCA EXPRESS PAK - Solicitud de Apertura de Cuenta"</code></strong><br>It's exactly that form.</p>
</blockquote>

<h4 id="option-b-executives">🔹 Option B – Contact the executives recommended by the plugin itself</h4>

<p>On the official page for the <strong>"Wanderlust OCA for WooCommerce"</strong> plugin, they indicate that to open the account with OCA you can write to:</p>

<ul>
<li><strong>Lorena Marienberg – <a href="mailto:lmarienberg@oca.com.ar" target="_blank" rel="nofollow noopener">lmarienberg@oca.com.ar</a></strong></li>

<li><strong>Martín Ibarrola – <a href="mailto:mibarrola@oca.com.ar" target="_blank" rel="nofollow noopener">mibarrola@oca.com.ar</a></strong></li>
</ul>

<p>They handle assisting you with opening the account to use the e-Pak API. <a href="https://es-ar.wordpress.org/plugins/wanderlust-oca-e-pak-shipping-rates/?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">WordPress.org Español (Argentina)</a></p>

<hr>

<h3 id="plugin-setup-data">3) Once you have the account, what do you need to enter in the plugin?</h3>

<p>With your OCA account already active and the data they send you, in WooCommerce:</p>

<ol>
<li>Install and activate <strong>"Wanderlust OCA for WooCommerce"</strong> (or the Premium version). <a href="https://es-ar.wordpress.org/plugins/wanderlust-oca-e-pak-shipping-rates/?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">WordPress.org Español (Argentina)+1</a></li>

<li>In <strong>WooCommerce → Settings → Shipping → Shipping Zones</strong>, add the <strong>"OCA / Oca Express Pack"</strong> method. <a href="https://es-ar.wordpress.org/plugins/wanderlust-oca-e-pak-shipping-rates/?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">WordPress.org Español (Argentina)</a></li>

<li>In the method configuration, enter (according to the Wanderlust OCA Premium manual): <a href="https://shop.wanderlust-webdesign.com/wp-content/uploads/2024/03/Wanderlust-OCA-premium.pdf?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">shop.wanderlust-webdesign.com</a>
<ul>
<li>Account holder details: name, last name, email, address, postal code, city, province.</li>

<li><strong>OCA username</strong> (e-Pak email).</li>

<li><strong>OCA password</strong> (e-Pak password).</li>

<li><strong>OCA account number</strong> (found inside your account, under "Insurance conditions").</li>

<li><strong>CUIT</strong> in the format 00-00000000-0.</li>

<li>Operations/services (home delivery, branch pickup, etc.) assigned to you by OCA.</li>
</ul>
</li>

<li>Make sure to set <strong>weight and dimensions</strong> on all products so it calculates rates. <a href="https://shop.wanderlust-webdesign.com/wp-content/uploads/2024/03/Wanderlust-OCA-premium.pdf?utm_source=chatgpt.com" target="_blank" rel="nofollow noreferrer noopener">shop.wanderlust-webdesign.com+1</a></li>
</ol>

<hr>

<h3 id="common-mistakes">4) Common mistakes when setting up OCA in WooCommerce</h3>

<p>In practice, most problems with the OCA integration do not come from the plugin itself but from incorrect data or wrong expectations about the service. These are the most frequently repeated failures:</p>

<ul>
<li><strong>OCA e-Pak credentials confused with OCA's corporate website login.</strong> The username and password you enter in the plugin belong to the e-Pak / Express Pak platform, not the ones you use to track a single shipment as a consumer.</li>
<li><strong>The account number is not the CUIT or a generic client number.</strong> As the official manual indicates, it is obtained inside your e-Pak account, under the "Insurance conditions" section.</li>
<li><strong>Products without weight or dimensions.</strong> The API's rate calculation is based on real volume and weight; a product without dimensions may return empty rates or errors when generating the label.</li>
<li><strong>Operations not assigned.</strong> If you only contracted branch pickup, the home delivery method will not return quotes. Check with your OCA executive which operations are active before publishing the shipping options at checkout.</li>
<li><strong>Badly delimited shipping zone.</strong> The OCA method must sit inside a shipping zone that covers the destinations you sell to; if the zone only includes Greater Buenos Aires and you sell nationwide, checkout will not offer OCA for the rest of the provinces.</li>
</ul>

<p>Before launching the store, we always recommend running one real test order (even with a symbolic-value product) to verify that quoting, label generation and tracking work end to end with your account.</p>

<h3 id="client-checklist">5) Checklist for your client: OCA sign-up step by step</h3>

<p>If you are implementing the store for a client and want them to handle the OCA sign-up themselves (or simply want to organize the process), this checklist works as a guide to send by email or chat:</p>

<ol>
<li><strong>Gather the company data:</strong> Legal name, CUIT, tax address, city, province and a contact email that will be used as the e-Pak username.</li>

<li><strong>Fill in the official form</strong> "OCA EXPRESS PAK – Account Opening Request", checking the <strong>E-commerce Services / OCA Expresspak</strong> option, or write to the executives recommended by the plugin.</li>

<li><strong>Receive the active account from OCA:</strong> e-Pak username, password, account number and the enabled operations (home delivery, branch pickup, agency drop-off, among others).</li>

<li><strong>Share that data with the technical team</strong> configuring the plugin, together with the CUIT formatted as 00-00000000-0.</li>

<li><strong>Verify products:</strong> every shippable item must have weight and dimensions set in WooCommerce.</li>

<li><strong>Run a test order</strong> from checkout with the OCA-calculated rate and confirm the label is generated correctly.</li>
</ol>

<p>With this checklist, the sign-up process stops being a black box: the client knows exactly what data to provide and you have everything you need to configure the plugin without back-and-forth.</p>

<h3 id="conclusion">Conclusion</h3>

<p>Integrating the <strong>OCA service into WooCommerce</strong> is a straightforward process if you follow the right steps: use the e-Pak / Express Pak service, open the account through the official form or the recommended executives, and enter the username, password, account number, CUIT and assigned operations into the <strong>Wanderlust OCA</strong> plugin. The most common mistakes are avoided with accurate data and a test order before launching the store.</p>

<p>If you need your WooCommerce store to work with OCA shipping end to end —or if you are building your online store from scratch—, <a href="/en/contact" target="_blank">contact us</a> and we will implement it with you. You may also like our <a href="/en/blog/oca-vs-correo-argentino-complete-guide" target="_blank">guide comparing OCA and Correo Argentino</a> to choose the best carrier for your type of shipment.</p>

<p></p>