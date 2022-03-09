<?php

/**
 * Plugin Name: Image Hover Effect
 * Plugin URI: N/A
 * Description: Simple shortcode that shows caption when the user hovers over an image
 * Version: 0.1
 * Author: Alexander Mathis
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * 
 * @package: image-hover
 * @license GPL2+
 */

/**
 * @param array @atts
 * @param string $content
 * 
 * @return string
 */
function plugin_image_hover($atts, $content = '')
{
  $atts = shortcode_atts(array(
    'image' => '',
    'alt' => ''
  ), $atts, 'hover-effect');

  ob_start();
?>
  <div class="plugin-image-hover">
    <img src="<?php echo esc_url($atts['image']); ?>" alt="alt text">
    <div class="plugin-image-hover-text">
      <?php echo do_shortcode($content); ?>
    </div>
  </div>
<?php
  return ob_get_clean();
}

add_shortcode('hover-effect', 'plugin_image_hover');

/**
 * Add CSS
 * 
 * Includes Stylesheet
 * 
 * @return void
 */
function plugin_image_hover_css()
{
  wp_enqueue_style('plugin-image-hover', plugins_url('plugin-image-hover.css', __FILE__), array(), '.1');
}

add_action('wp_enqueue_scripts', 'plugin_image_hover_css');
