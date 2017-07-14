<?php

add_action('wp_enqueue_scripts', 'default_calculator_scripts');
function default_calculator_scripts()
{
  // if( ! is_single( 75 ) ) {
	// 	return;
	// }

  wp_register_script( 'xevoq-calc-js', plugins_url( '../app/scripts/main.js', __FILE__ ) );
  wp_enqueue_script( 'xevoq-calc-js', '', '', false, true );

  wp_register_style( 'xevoq-calc-lib', plugins_url( '../app/style/xevoq_calc_lib.css', __FILE__ ), array(), '20120208', 'all' );
  wp_enqueue_style( 'xevoq-calc-lib' );

  // wp_enqueue_script( 'xevoq-slick-style-1', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css', '', '', true );
  // wp_enqueue_script( 'xevoq-slick-style-2', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css', '', '', true );

  // wp_register_style( 'xevoq-calc-slick', plugins_url( '../app/style/slick.css', __FILE__ ), array(), '20120208', 'all' );
  // wp_enqueue_style( 'xevoq-calc-slick' );

  wp_register_style( 'xevoq-calc-style', plugins_url( '../app/style/xevoq_calc_style.css', __FILE__ ), array(), '20120208', 'all' );
  wp_enqueue_style( 'xevoq-calc-style' );

}
