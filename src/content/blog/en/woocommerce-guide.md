---
title: "WooCommerce Guide"
description: "Learn the essential WooCommerce setup and how to manage your product catalog: create, edit, unpublish, and delete products from the WordPress panel."
pubDate: 2025-12-05
heroImage: "/assets/blog/covers/woocommerce-guide.svg"
---

<p><strong>Objective:</strong>&nbsp;in this tutorial you will learn to review the basic WooCommerce configuration and manage the product catalog (create, edit, unpublish, and delete products) from the WordPress panel.</p>

<ul>
<li><p>Review the essential WooCommerce settings so your store location, currency, shipping, and payments are correctly configured.</p></li>
<li><p>Learn to create, edit, unpublish, and delete products so your catalog always reflects your real inventory.</p></li>
<li><p>Organize your catalog with clear categories and tags to improve navigation and help customers find products.</p></li>
</ul>

<ul>
<li><a href="#prerequisites">1. Prerequisites</a></li>
<li><a href="#accessing-woocommerce">2. Accessing WooCommerce in the WordPress panel</a>
<ul>
<li><a href="#locating-the-woocommerce-menu">2.1 Locating the WooCommerce menu</a></li>
<li><a href="#accessing-woocommerce-settings">2.2 Accessing WooCommerce settings</a></li>
</ul>
</li>
<li><a href="#basic-configuration">3. Basic WooCommerce configuration</a>
<ul>
<li><a href="#general-tab">3.1 "General" tab</a></li>
<li><a href="#products-tab">3.2 "Products" tab</a></li>
<li><a href="#shipping-tab">3.3 "Shipping" tab</a></li>
<li><a href="#payments-tab">3.4 "Payments" tab</a></li>
<li><a href="#save-changes">3.5 Save changes</a></li>
</ul>
</li>
<li><a href="#viewing-the-catalog">4. Viewing and filtering the product catalog</a>
<ul>
<li><a href="#product-listing">4.1 Product listing</a></li>
<li><a href="#filters-and-search">4.2 Filters and search</a></li>
</ul>
</li>
<li><a href="#creating-a-product">5. Creating a new product</a>
<ul>
<li><a href="#accessing-add-new">5.1 Accessing "Add New"</a></li>
<li><a href="#basic-information">5.2 Filling in the basic information</a></li>
<li><a href="#publishing-the-product">5.3 Publishing the product</a></li>
</ul>
</li>
<li><a href="#editing-products">6. Editing existing products</a>
<ul>
<li><a href="#opening-a-product">6.1 Opening a product to edit</a></li>
<li><a href="#updating-the-product">6.2 Updating the product</a></li>
</ul>
</li>
<li><a href="#unpublishing-or-deleting">7. Unpublishing or deleting products</a>
<ul>
<li><a href="#moving-to-draft">7.1 Moving a product to draft</a></li>
<li><a href="#moving-to-trash">7.2 Moving a product to the trash</a></li>
<li><a href="#considerations-before-deleting">7.3 Considerations before deleting</a></li>
</ul>
</li>
<li><a href="#catalog-organization-tips">8. Catalog organization tips</a>
<ul>
<li><a href="#product-categories">8.1 Product categories</a></li>
<li><a href="#product-tags">8.2 Product tags</a></li>
<li><a href="#periodic-review">8.3 Periodic review of stock and prices</a></li>
</ul>
</li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>

<figure class="aligncenter"><img width="1024" height="576" src="/assets/blog/guia-woocommerce-1.webp" alt="WooCommerce dashboard overview in the WordPress panel"></figure>

<h2 id="prerequisites">1. Prerequisites</h2>

<ul>
<li>Have a WordPress site with&nbsp;<strong>WooCommerce</strong>&nbsp;installed and active.</li>

<li>Have a username and password with administrator or store manager permissions.</li>
</ul>

<h2 id="accessing-woocommerce">2. Accessing WooCommerce in the WordPress panel</h2>

<h3 id="locating-the-woocommerce-menu">2.1 Locating the WooCommerce menu</h3>

<p>Once inside the WordPress panel, in the left sidebar you will see an option called&nbsp;<strong>WooCommerce</strong>. From there you can access:</p>

<ul>
<li><strong>Orders</strong></li>

<li><strong>Settings</strong></li>

<li><strong>Status</strong></li>

<li>Other sections added by extensions.</li>
</ul>

<h3 id="accessing-woocommerce-settings">2.2 Accessing WooCommerce settings</h3>

<ol>
<li>Click on&nbsp;<strong>WooCommerce</strong>&nbsp;in the sidebar menu.</li>

<li>Select the&nbsp;<strong>Settings</strong>&nbsp;option.</li>
</ol>

<figure class="aligncenter"><img width="1024" height="576" src="/assets/blog/guia-woocommerce-2.webp" alt="WooCommerce settings screen in the WordPress admin"></figure>

<h2 id="basic-configuration">3. Basic WooCommerce configuration</h2>

<h3 id="general-tab">3.1 "General" tab</h3>

<p>In the&nbsp;<strong>General</strong>&nbsp;tab you can define the main parameters of your store:</p>

<ul>
<li><strong>Store location:</strong>&nbsp;country and region where your business operates.</li>

<li><strong>Selling locations:</strong>&nbsp;which countries you sell to.</li>

<li><strong>Shipping locations:</strong>&nbsp;which countries you ship products to.</li>

<li><strong>Store currency:</strong>&nbsp;select the currency in which you will display prices.</li>
</ul>

<h3 id="products-tab">3.2 "Products" tab</h3>

<p>In the&nbsp;<strong>Products</strong>&nbsp;tab you configure general catalog aspects:</p>

<ul>
<li>Page that serves as the shop.</li>

<li>Weight units (kg, g) and dimensions (cm, m).</li>
</ul>

<figure class="aligncenter"><img width="1024" height="576" src="/assets/blog/guia-woocommerce-3.webp" alt="Products tab configuration in WooCommerce settings"></figure>

<h3 id="shipping-tab">3.3 "Shipping" tab</h3>

<p>Here you define&nbsp;<strong>shipping zones</strong>&nbsp;and&nbsp;<strong>methods</strong>&nbsp;(flat rate, free shipping, local pickup, etc.). For complex setups it is usually better to use a specific tutorial, but at a minimum you should review that:</p>

<ul>
<li>Shipping zones include the countries/regions you actually ship to.</li>

<li>The rates have the correct costs.</li>
</ul>

<h3 id="payments-tab">3.4 "Payments" tab</h3>

<p>In the&nbsp;<strong>Payments</strong>&nbsp;tab you can enable or disable payment methods, such as bank transfer, cash on delivery, PayPal, or card gateways.</p>

<h3 id="save-changes">3.5 Save changes</h3>

<p>In any of the tabs, when you finish editing, scroll to the bottom of the page and click&nbsp;<strong>Save changes</strong>.</p>

<h2 id="viewing-the-catalog">4. Viewing and filtering the product catalog</h2>

<h3 id="product-listing">4.1 Product listing</h3>

<ol>
<li>In the sidebar menu, hover over&nbsp;<strong>Products</strong>.</li>

<li>Click on&nbsp;<strong>All Products</strong>.</li>
</ol>

<figure><img width="1024" height="576" src="/assets/blog/guia-woocommerce-4.webp" alt="All Products listing in the WooCommerce admin"></figure>

<p>You will see a table with all products, showing the name, SKU, stock, price, and status (published, draft, etc.).</p>

<h3 id="filters-and-search">4.2 Filters and search</h3>

<p>At the top of the table you can:</p>

<ul>
<li>Use the&nbsp;<strong>search</strong>&nbsp;box to locate a product by name.</li>

<li>Filter by product category.</li>

<li>Filter by status (published, draft, trash).</li>
</ul>

<h2 id="creating-a-product">5. Creating a new product</h2>

<h3 id="accessing-add-new">5.1 Accessing "Add New"</h3>

<ol>
<li>In the sidebar menu, go to&nbsp;<strong>Products</strong>.</li>

<li>Click on&nbsp;<strong>Add New</strong>.</li>
</ol>

<figure class="aligncenter"><img width="1024" height="576" src="/assets/blog/guia-woocommerce-5.webp" alt="Add New product screen in WooCommerce"></figure>

<h3 id="basic-information">5.2 Filling in the basic information</h3>

<ul>
<li><strong>Product name:</strong>&nbsp;title visible to the customer.</li>

<li><strong>Long description:</strong>&nbsp;text with features and benefits.</li>

<li><strong>Product data:</strong>&nbsp;type (simple, variable), regular price, sale price.</li>

<li><strong>Inventory:</strong>&nbsp;SKU, stock, and stock status.</li>

<li><strong>Shipping:</strong>&nbsp;weight and dimensions (if costs are calculated by weight/dimensions).</li>

<li><strong>Product categories:</strong>&nbsp;select one or several.</li>

<li><strong>Product tags:</strong>&nbsp;complementary keywords.</li>

<li><strong>Product image</strong>&nbsp;and, if needed, an&nbsp;<strong>image gallery</strong>.</li>
</ul>

<figure class="aligncenter"><img width="1024" height="576" src="/assets/blog/guia-woocommerce-6.webp" alt="Product data panel with price and inventory fields"></figure>

<figure><img width="1024" height="576" src="/assets/blog/guia-woocommerce-7.webp" alt="Product categories and tags metabox in WooCommerce"></figure>

<h3 id="publishing-the-product">5.3 Publishing the product</h3>

<ol>
<li>Review that the price and stock are correct.</li>

<li>In the publish box (usually on the right), click&nbsp;<strong>Publish</strong>.</li>
</ol>

<h2 id="editing-products">6. Editing existing products</h2>

<h3 id="opening-a-product">6.1 Opening a product to edit</h3>

<ol>
<li>Go to&nbsp;<strong>Products &gt; All Products</strong>.</li>

<li>Hover over the product you want to modify.</li>

<li>Click&nbsp;<strong>Edit</strong>.</li>
</ol>

<p>You can change the name, descriptions, prices, stock, image, and categories just as when creating.</p>

<h3 id="updating-the-product">6.2 Updating the product</h3>

<p>When you finish modifying the information, press the&nbsp;<strong>Update</strong>&nbsp;button to save the changes.</p>

<h2 id="unpublishing-or-deleting">7. Unpublishing or deleting products</h2>

<h3 id="moving-to-draft">7.1 Moving a product to draft</h3>

<ol>
<li>Edit the product.</li>

<li>In the publish box, change the&nbsp;<strong>Status</strong>&nbsp;to&nbsp;<strong>Draft</strong>.</li>

<li>Click&nbsp;<strong>Update</strong>.</li>
</ol>

<p>The product will no longer appear in the store, but will remain available in the panel for future edits.</p>

<h3 id="moving-to-trash">7.2 Moving a product to the trash</h3>

<ol>
<li>From the product listing, hover over the product.</li>

<li>Click&nbsp;<strong>Trash</strong>.</li>
</ol>

<p>The product will be moved to the trash and you can recover or permanently delete it later.</p>

<h3 id="considerations-before-deleting">7.3 Considerations before deleting</h3>

<ul>
<li>Check if the product has been sold recently.</li>

<li>Consider keeping it as a draft if you want to preserve the history.</li>
</ul>

<h2 id="catalog-organization-tips">8. Catalog organization tips</h2>

<h3 id="product-categories">8.1 Product categories</h3>

<p>To organize your store:</p>

<ul>
<li>Use clear categories (for example, "Footwear", "Clothing", "Accessories").</li>

<li>Avoid duplicating categories with nearly identical names.</li>
</ul>

<figure class="aligncenter"><img width="1024" height="576" src="/assets/blog/guia-woocommerce-8.webp" alt="Product categories management screen in WooCommerce"></figure>

<h3 id="product-tags">8.2 Product tags</h3>

<p>Tags serve as additional keywords. You can use them for materials, colors, seasons, etc.</p>

<figure class="aligncenter"><img width="1024" height="576" src="/assets/blog/guia-woocommerce-9.webp" alt="Product tags list in the WooCommerce admin"></figure>

<h3 id="periodic-review">8.3 Periodic review of stock and prices</h3>

<ul>
<li>Review the catalog at least once a month.</li>

<li>Update prices and stock after campaigns or rate changes.</li>
</ul>

<p>If you manage a large catalog, doing this by hand becomes slow and error-prone. In that case, our guide on <a href="/en/blog/woocommerce-product-management-via-excel" target="_blank">managing WooCommerce products via Excel</a> shows how to export, bulk edit, and import products in minutes.</p>

<h2 id="conclusion">Conclusion</h2>

<p>This WooCommerce guide covered the full day-to-day workflow of a store administrator: reviewing the basic configuration, browsing the catalog, creating products, editing them, and unpublishing or deleting them when necessary. A well-configured store and an organized catalog are the foundation for selling online without friction, and the habits reviewed here — clear categories, consistent tags, and periodic reviews — keep everything under control as you grow.</p>

<p>Mastering these basics early saves countless hours later. If you need help setting up or optimizing your store, <a href="/en/contact" target="_blank">contact us</a> and we will help you get the most out of WooCommerce.</p>