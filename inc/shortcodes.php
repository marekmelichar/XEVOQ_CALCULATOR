<?php

add_shortcode( 'calculator', 'xevoq_calculator_shortcode' );
function xevoq_calculator_shortcode( $atts ) {

  $atts = shortcode_atts( array(
    'calculator_id' => 'calculator'
  ), $atts );

  // create the html
  $html = '<div id="'. esc_attr($atts['calculator_id']) .'">';
  $html .= 'Calculator is loading......';
  $html .= '</div>';

  return $html;
}
