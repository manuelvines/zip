<?php
/**
 * Plugin Name:       Claro Sports VC
 * Description:       Prueba técnica.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Victor Caudillo
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       clarosportsvc
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_clarosportsvc_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_clarosportsvc_block_init' );




/***SET CLASS CSS*/
add_action( 'after_setup_theme', function() {
	
	add_theme_support( 'editor-styles' );
	add_editor_style( 'style-editor.css' );
	
	if(
		false !== stristr( $_SERVER[ 'REQUEST_URI' ], 'post-new.php' )      && 
		isset( $_GET[ 'post_type' ] ) && 'support' === $_GET[ 'post_type' ] || 
		false !== stristr( $_SERVER[ 'REQUEST_URI' ], 'post.php' )          && 
		'support' === get_post_type( $_GET[ 'post' ] )
	) {
		add_editor_style( 'style-editor-custom-title.css' );
	}
	
} );