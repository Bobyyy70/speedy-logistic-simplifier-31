
<?php
/**
 * Speed E-Log Theme functions and definitions
 */

// Désactiver l'éditeur Gutenberg pour utiliser un builder séparé si nécessaire
// add_filter('use_block_editor_for_post', '__return_false');

if (!function_exists('speedelog_setup')) {
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     */
    function speedelog_setup() {
        // Add default posts and comments RSS feed links to head
        add_theme_support('automatic-feed-links');

        // Let WordPress manage the document title
        add_theme_support('title-tag');

        // Enable support for Post Thumbnails on posts and pages
        add_theme_support('post-thumbnails');

        // Support for responsive embeds
        add_theme_support('responsive-embeds');

        // Support for HTML5 markup
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        ));

        // Register navigation menus
        register_nav_menus(array(
            'primary-menu' => esc_html__('Menu Principal', 'speedelog'),
            'mobile-menu' => esc_html__('Menu Mobile', 'speedelog'),
            'footer-menu' => esc_html__('Menu Pied de Page', 'speedelog'),
        ));
    }
}
add_action('after_setup_theme', 'speedelog_setup');

/**
 * Enqueue scripts and styles.
 */
function speedelog_scripts() {
    // Enqueue Tailwind CSS
    wp_enqueue_style('speedelog-tailwind', get_template_directory_uri() . '/assets/css/tailwind.css', array(), '1.0.0');
    
    // Custom styles that override Tailwind
    wp_enqueue_style('speedelog-custom-styles', get_template_directory_uri() . '/assets/css/custom.css', array('speedelog-tailwind'), '1.0.0');
    
    // Theme main JavaScript file with header functionality
    wp_enqueue_script('speedelog-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), '1.0.0', true);
    
    // Core moving animations (from framer-motion)
    wp_enqueue_script('speedelog-animations', get_template_directory_uri() . '/assets/js/animations.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'speedelog_scripts');

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Load custom WordPress nav walker.
 */
require get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';

/**
 * SVG Icons class.
 */
require get_template_directory() . '/inc/class-speedelog-svg-icons.php';

/**
 * Custom shortcodes.
 */
require get_template_directory() . '/inc/shortcodes.php';
