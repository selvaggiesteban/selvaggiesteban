---
title: "Guía WooCommerce desde Excel"
description: "Objetivo: esta guía explica cómo exportar los productos de WooCommerce a un archivo CSV, editarlos de forma masiva en Excel o Google Sheets e importarlos"
pubDate: 2025-12-05
---





<p><strong>Objetivo:</strong>&nbsp;esta guía explica cómo exportar los productos de WooCommerce a un archivo CSV, editarlos de forma masiva en Excel o Google Sheets e importarlos de nuevo para actualizar el catálogo.</p>



<h2>1. Flujo general de trabajo</h2>



<ol>
<li>Exportar los productos de WooCommerce a un archivo CSV.</li>



<li>Abrir y editar el CSV en Excel o Google Sheets.</li>



<li>Guardar el archivo editado nuevamente como CSV.</li>



<li>Importar el CSV actualizado en WooCommerce.</li>



<li>Revisar que los cambios se hayan aplicado correctamente.</li>
</ol>



<p>{{IMG: panel de wordpress menú opción todos los productos}}</p>



<h2>2. Exportar productos desde WooCommerce</h2>



<h3>2.1 Acceder al listado de productos</h3>



<ol>
<li>En el panel de WordPress, ve a&nbsp;<strong>Productos &gt; Todos los productos</strong>.</li>



<li>Comprueba que se muestra el listado completo de productos.</li>
</ol>



<h3>2.2 Usar la herramienta de exportación</h3>



<ol>
<li>En la parte superior de la página, haz clic en el botón&nbsp;<strong>Exportar</strong>.</li>



<li>En la pantalla de exportación, elige si quieres exportar todos los productos o solo un tipo concreto.</li>



<li>Deja seleccionadas todas las columnas si quieres poder editar cualquier dato posteriormente.</li>



<li>Haz clic en&nbsp;<strong>Generar CSV</strong>.</li>
</ol>



<p>{{IMG: captura exportar productos woocommerce}}</p>



<p>El navegador descargará un archivo con extensión&nbsp;<code>.csv</code>&nbsp;que contiene el catálogo actual.</p>



<h2>3. Editar el CSV en Microsoft Excel</h2>



<h3>3.1 Abrir el archivo CSV</h3>



<ol>
<li>Abre&nbsp;<strong>Microsoft Excel</strong>.</li>



<li>Ve a&nbsp;<strong>Archivo &gt; Abrir</strong>&nbsp;y selecciona el archivo CSV descargado.</li>



<li>Comprueba que cada dato aparece en su propia columna.</li>
</ol>



<p>{{IMG: captura csv abierto en excel}}</p>



<h3>3.2 Columnas más importantes</h3>



<ul>
<li><strong>ID</strong>: identificador interno del producto.</li>



<li><strong>name</strong>: nombre del producto.</li>



<li><strong>regular_price</strong>: precio normal.</li>



<li><strong>sale_price</strong>: precio rebajado (si aplica).</li>



<li><strong>sku</strong>: código de producto.</li>



<li><strong>stock_quantity</strong>: cantidad de stock.</li>



<li><strong>categories</strong>: categorías asignadas.</li>



<li><strong>images</strong>: imágenes asociadas.</li>
</ul>



<h3>3.3 Modificar datos del catálogo</h3>



<p>En Excel puedes:</p>



<ul>
<li>Actualizar precios en la columna&nbsp;<code>regular_price</code>.</li>



<li>Revisar o cambiar precios en oferta en&nbsp;<code>sale_price</code>.</li>



<li>Ajustar existencias en&nbsp;<code>stock_quantity</code>.</li>



<li>Corregir nombres en la columna&nbsp;<code>name</code>.</li>



<li>Añadir filas nuevas para crear productos adicionales.</li>
</ul>



<p><strong>Importante:</strong>&nbsp;no cambies el nombre de las columnas ni borres columnas si no sabes exactamente qué estás haciendo.</p>



<h3>3.4 Guardar el archivo como CSV</h3>



<ol>
<li>Cuando termines de editar, ve a&nbsp;<strong>Archivo &gt; Guardar como</strong>.</li>



<li>Elige una carpeta donde guardar el archivo.</li>



<li>Selecciona el tipo de archivo&nbsp;<strong>CSV (delimitado por comas)</strong>.</li>



<li>Acepta las advertencias de Excel sobre compatibilidad.</li>
</ol>



<p>{{IMG: captura guardar como csv en excel}}</p>



<h2>4. Editar el CSV en Google Sheets</h2>



<h3>4.1 Importar el archivo a Google Sheets</h3>



<ol>
<li>Abre&nbsp;<strong>Google Drive</strong>&nbsp;y crea una hoja de cálculo nueva en Google Sheets.</li>



<li>Ve a&nbsp;<strong>Archivo &gt; Importar</strong>&nbsp;y sube el archivo CSV.</li>



<li>Elige si quieres reemplazar la hoja actual o crear una nueva pestaña.</li>
</ol>



<p>{{IMG: captura importar csv en google sheets}}</p>



<h3>4.2 Editar datos en Google Sheets</h3>



<p>La lógica es la misma que en Excel: modifica precios, stock, nombres y otros campos, respetando siempre los encabezados de columna.</p>



<h3>4.3 Descargar el CSV actualizado</h3>



<ol>
<li>Cuando hayas terminado, ve a&nbsp;<strong>Archivo &gt; Descargar</strong>.</li>



<li>Elige la opción&nbsp;<strong>Valores separados por comas (.csv)</strong>.</li>



<li>Se descargará un nuevo archivo CSV con tus cambios.</li>
</ol>



<p>{{IMG: captura descargar csv desde google sheets}}</p>



<h2>5. Importar el CSV actualizado en WooCommerce</h2>



<h3>5.1 Acceder a la herramienta de importación</h3>



<ol>
<li>En el panel de WordPress, ve a&nbsp;<strong>Productos &gt; Todos los productos</strong>.</li>



<li>En la parte superior de la página, haz clic en&nbsp;<strong>Importar</strong>.</li>
</ol>



<p>{{IMG: captura importar productos woocommerce}}</p>



<h3>5.2 Seleccionar el archivo y opciones de actualización</h3>



<ol>
<li>Haz clic en&nbsp;<strong>Elegir archivo</strong>&nbsp;y selecciona el CSV editado.</li>



<li>Marca la casilla&nbsp;<strong>Actualizar productos existentes</strong>&nbsp;si quieres que los productos ya creados se actualicen.</li>



<li>Haz clic en&nbsp;<strong>Continuar</strong>.</li>
</ol>



<h3>5.3 Revisar el mapeo de columnas</h3>



<p>WooCommerce mostrará una pantalla donde se asigna cada columna del CSV a un campo del producto. Revisa que:</p>



<ul>
<li><code>name</code>&nbsp;esté asociado a&nbsp;<strong>Nombre del producto</strong>.</li>



<li><code>regular_price</code>&nbsp;a&nbsp;<strong>Precio normal</strong>.</li>



<li><code>sale_price</code>&nbsp;a&nbsp;<strong>Precio rebajado</strong>.</li>



<li><code>sku</code>&nbsp;a&nbsp;<strong>SKU</strong>.</li>



<li><code>stock_quantity</code>&nbsp;a&nbsp;<strong>Cantidad de stock</strong>.</li>



<li><code>categories</code>&nbsp;a&nbsp;<strong>Categorías</strong>.</li>



<li><code>images</code>&nbsp;a&nbsp;<strong>Imágenes del producto</strong>.</li>
</ul>



<h3>5.4 Ejecutar el importador</h3>



<ol>
<li>Cuando estés conforme con el mapeo, haz clic en&nbsp;<strong>Ejecutar el importador</strong>.</li>



<li>Espera a que finalice el proceso. WooCommerce mostrará cuántos productos se han creado o actualizado.</li>
</ol>



<h2>6. Verificar los cambios en el catálogo</h2>



<ol>
<li>Vuelve a&nbsp;<strong>Productos &gt; Todos los productos</strong>.</li>



<li>Comprueba algunos productos al azar para verificar precios, stock y categorías.</li>



<li>Abre la tienda en la parte pública de la web para validar que todo se ve correctamente.</li>
</ol>



<p>{{IMG: panel de wordpress menú opción todos los productos}}</p>



<h2>7. Recomendaciones y buenas prácticas</h2>



<ul>
<li>Antes de hacer cambios masivos, descarga un CSV original y guárdalo como copia de seguridad.</li>



<li>Evita eliminar columnas; si no necesitas una columna, simplemente no la edites.</li>



<li>Aplica filtros en Excel o Google Sheets para revisar series de productos (por categoría, por rango de precios, etc.).</li>



<li>Realiza cambios masivos en horarios de baja actividad para minimizar riesgos.</li>
</ul>
                                    
                        <div class="page-links">
                                                
                    
                    
