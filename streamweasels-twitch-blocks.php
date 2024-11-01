<?php
/**
 * Plugin Name:       StreamWeasels Twitch Blocks
 * Plugin URI:        https://www.streamweasels.com
 * Description:       StreamWeasels Twitch blocks.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            StreamWeasels
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       streamweasels-blocks
 *
 * @package           streamweasels
 */

function swtb_blocks_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'swtb_blocks_init' );

function swtb_block_categories( $categories ) {
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'streamweasels',
                'title' => __( 'StreamWeasels Twitch Blocks', 'streamweasels-blocks' ),
            ],
        ]
    );
}
add_filter( 'block_categories_all', 'swtb_block_categories');