---
title: "Descuento automático por monto de carrito (WooCommerce)"
description: "<?php /** * Descuento automático por monto de carrito (WooCommerce) * Tramos: * - $150.000 => 2% OFF * - $250.000 => 4% OFF * - $500.000 => 6% OFF * -"
pubDate: 2026-02-23
---



                


<pre><code>&lt;?php
/**
 * Descuento automático por monto de carrito (WooCommerce)
 * Tramos:
 *  - $150.000  =&gt; 2% OFF
 *  - $250.000  =&gt; 4% OFF
 *  - $500.000  =&gt; 6% OFF
 *  - $1.000.000 =&gt; 7% OFF
 *
 * Muestra en Carrito y Checkout:
 *  - Subtotal (antes) (ya lo muestra Woo)
 *  - Descuento aplicado (con leyenda)
 *  - Subtotal con descuento (antes de envío/impuestos)
 *
 * Pegar en functions.php (preferible en un child theme).
 */

/** 1) Configuración de tramos */
function lc_monto_descuento_tramos() {
return array(
1000000 =&gt; 0.07,
500000  =&gt; 0.06,
250000  =&gt; 0.04,
150000  =&gt; 0.02,
);
}

/** 2) Calcula el descuento según subtotal */
function lc_monto_descuento_data() {
if ( ! function_exists('WC') || ! WC()-&gt;cart ) {
return array( 'rate' =&gt; 0, 'amount' =&gt; 0, 'subtotal' =&gt; 0 );
}

// Subtotal de productos (sin envío). Por defecto: sin impuestos.
$subtotal = (float) WC()-&gt;cart-&gt;get_subtotal();

$rate = 0.0;
foreach ( lc_monto_descuento_tramos() as $min =&gt; $pct ) {
if ( $subtotal &gt;= (float) $min ) {
$rate = (float) $pct;
break;
}
}

$amount = $rate &gt; 0 ? round( $subtotal * $rate, wc_get_price_decimals() ) : 0;

return array(
'rate'     =&gt; $rate,
'amount'   =&gt; $amount,   // positivo (lo convertimos a negativo al aplicar fee)
'subtotal' =&gt; $subtotal,
);
}

/** 3) Aplica el descuento como "fee" negativo (para que afecte totales) */
add_action( 'woocommerce_cart_calculate_fees', function( $cart ) {
if ( is_admin() &amp;&amp; ! defined( 'DOING_AJAX' ) ) return;
if ( ! $cart || $cart-&gt;is_empty() ) return;

$data = lc_monto_descuento_data();
if ( $data['amount'] &lt;= 0 ) return;

$label = sprintf(
'Descuento por monto (%s%% OFF)',
rtrim( rtrim( number_format( $data['rate'] * 100, 2, '.', '' ), '0' ), '.' )
);

// Fee negativo = descuento
$cart-&gt;add_fee( $label, -1 * $data['amount'], false );

// Guardamos para mostrar “subtotal con descuento” de forma consistente
if ( WC()-&gt;session ) {
WC()-&gt;session-&gt;set( 'lc_monto_desc_rate', $data['rate'] );
WC()-&gt;session-&gt;set( 'lc_monto_desc_amount', $data['amount'] );
}
}, 20, 1 );

/**
 * 4) Oculta la línea del fee en el listado estándar (así no se duplica),
 *    porque la vamos a mostrar debajo del subtotal con “antes / después”.
 */
add_filter( 'woocommerce_cart_totals_get_fees', function( $fees ) {
if ( empty( $fees ) ) return $fees;

$filtered = array();
foreach ( $fees as $fee ) {
// Oculta SOLO los fees que sean nuestro descuento por monto
if ( isset( $fee-&gt;name ) &amp;&amp; strpos( $fee-&gt;name, 'Descuento por monto' ) === 0 ) {
continue;
}
$filtered[] = $fee;
}
return $filtered;
}, 20, 1 );

/** 5) Render de filas debajo del subtotal (Carrito y Checkout) */
function lc_render_filas_descuento_bajo_subtotal() {
if ( ! function_exists('WC') || ! WC()-&gt;cart ) return;

$data = lc_monto_descuento_data();
if ( $data['amount'] &lt;= 0 ) return;

$rate_pct = rtrim( rtrim( number_format( $data['rate'] * 100, 2, '.', '' ), '0' ), '.' );
$discount = $data['amount'];
$after    = max( 0, $data['subtotal'] - $discount );

?&gt;
&lt;tr class="lc-monto-desc-row"&gt;
&lt;th&gt;&lt;?php echo esc_html( 'Descuento por monto (' . $rate_pct . '% OFF)' ); ?&gt;&lt;/th&gt;
&lt;td data-title="&lt;?php echo esc_attr( 'Descuento por monto' ); ?&gt;"&gt;
&lt;?php echo wp_kses_post( '-' . wc_price( $discount ) ); ?&gt;
&lt;/td&gt;
&lt;/tr&gt;
&lt;tr class="lc-monto-desc-row lc-monto-subtotal-after"&gt;
&lt;th&gt;&lt;?php echo esc_html( 'Subtotal con descuento' ); ?&gt;&lt;/th&gt;
&lt;td data-title="&lt;?php echo esc_attr( 'Subtotal con descuento' ); ?&gt;"&gt;
&lt;?php echo wp_kses_post( wc_price( $after ) ); ?&gt;
&lt;/td&gt;
&lt;/tr&gt;
&lt;?php
}

// Carrito (totales)
add_action( 'woocommerce_cart_totals_after_subtotal', 'lc_render_filas_descuento_bajo_subtotal', 20 );

// Checkout (review order)
add_action( 'woocommerce_review_order_after_subtotal', 'lc_render_filas_descuento_bajo_subtotal', 20 );</code></pre>
                                    
                        <div class="page-links">
                                                
                    
                    

