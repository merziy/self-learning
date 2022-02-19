<?php

/**
 * Plugin Name: Basic WordPress Plugin 
 * Plugin URI: http://sampledomain.com
 * Description: A basic WordPress plugin 
 * Version: 0.1
 * Author: Alexander Mathis
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

function wpb_follow_us($content)
{
  // Only start when a single post is displayed {
  if (is_single()) {
    // Message that displays after posts
    $content .= '<p class="basic-wordpress-plugin">If you liked 
       this article, please follow us on 
       <a href="http://exampledomain.com" target="_blank" 
       rel="nofollow">Twitter</a>.</p>';
  }
  return $content;
}

// Hook function onto WordPress the_content filter
add_filter('the_content', 'wpb_follow_us');
