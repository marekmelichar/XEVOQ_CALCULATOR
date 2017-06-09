<?php

add_action('wp_enqueue_scripts', 'default_calculator_scripts');
function default_calculator_scripts()
{
  // if( ! is_single( 75 ) ) {
	// 	return;
	// }

  wp_register_script( 'app-js', plugins_url( '../app/scripts/main.js', __FILE__ ) );
  wp_enqueue_script( 'app-js', '', '', false, true );

  wp_register_style( 'app-style', plugins_url( '../app/style/style.css', __FILE__ ), array(), '20120208', 'all' );
  wp_enqueue_style( 'app-style' );

}
