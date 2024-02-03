<?php
/**
 * Plugin Name:       Blockylicious
 * Description:       Custom Gutenberg blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            aj-ua
 * Author URI:        https://aj-ua.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blockylicious
 *
 * @package           create-block
 */

 namespace AJUA;

if ( ! defined( 'ABSPATH' ) ) {
	die('Silence is golden.');
}

final class Blockylicious {
    static function init() {    
        add_action('enqueue_block_assets', function(){
            $style_url = plugins_url( 'build/style-index.css', __FILE__ );
            wp_enqueue_style( 'blockylicious-style', $style_url, [] );
        });

        add_action( 'init', function(){
            add_filter( 'block_categories_all', function($categories){
                array_unshift($categories, [
                    'slug' => 'blockylicious',
                    'title' => __('Blockylicious', 'blockylicious')
                ]);
                return $categories;
            });

            register_block_type( __DIR__ . '/build/blocks/curvy' );
            register_block_type( __DIR__ . '/build/blocks/clickyGroup' );
            register_block_type( __DIR__ . '/build/blocks/clickyButton' );
            register_block_type( __DIR__ . '/build/blocks/piccyGallery' );
            register_block_type( __DIR__ . '/build/blocks/piccyImage' );

            register_block_pattern_category( 'blockylicious', [
                'label' => __('Blockylicious', 'blockylicious')
            ] );

            register_block_pattern( 'blockylicious/call-to-action', [
                'categories' => ['call-to-action', 'blockylicious'],
                'title' => __('Blockylicious call to action', 'blockylicious'),
                'description' => __('A heading, paragraph, and clicky button block', 'blockylicious'),
                'content' => '<!-- wp:heading {"textAlign":"center"} -->
                <h2 class="wp-block-heading has-text-align-center">Lorem Ipsum</h2>
                <!-- /wp:heading -->
                
                <!-- wp:paragraph {"align":"center"} -->
                <p class="has-text-align-center">Some paragraph text here as a subtitle</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:blockylicious/clicky-group {"justifyContent":"center"} -->
                <!-- wp:blockylicious/clicky-button {"labelText":"Call to action","style":{"color":{"background":"#000000","text":"#FFFFFF"},"spacing":{"padding":{"top":"10px","bottom":"10px","left":"20px","right":"20px"}}}} -->
                <div>clicky button save</div>
                <!-- /wp:blockylicious/clicky-button -->
                <!-- /wp:blockylicious/clicky-group -->'
            ] );

            $script_url = plugins_url( 'build/index.js', __FILE__ );
            wp_enqueue_script( 'blockylicious-script', $script_url, ['wp-blocks', 'wp-element', 'wp-editor'] );

            $style_url = plugins_url( 'build/style-index.css', __FILE__ );
            wp_enqueue_style( 'blockylicious-style', $style_url, [] );
        });
    }

    static function convert_custom_properties($value){
        $prefix     = 'var:';
        $prefix_len = strlen($prefix);
        $token_in   = '|';
        $token_out  = '--';
        if (str_starts_with($value, $prefix)) {
            $unwrapped_name = str_replace(
                $token_in,
                $token_out,
                substr($value, $prefix_len)
            );
            $value = "var(--wp--$unwrapped_name)";
        }
    
        return $value;
    }
}

Blockylicious::init();
