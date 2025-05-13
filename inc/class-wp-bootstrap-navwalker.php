
<?php
/**
 * WP Bootstrap Navwalker
 *
 * @package WP-Bootstrap-Navwalker
 * @version 4.3.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class WP_Bootstrap_Navwalker
 *
 * Extends Walker_Nav_Menu to add the necessary classes for Bootstrap navigation
 */
class WP_Bootstrap_Navwalker extends Walker_Nav_Menu {

    /**
     * Start Level.
     *
     * @param string   $output Passed by reference. Used to append additional content.
     * @param int      $depth  Depth of page. Used for padding.
     * @param stdClass $args   An object of wp_nav_menu() arguments.
     */
    public function start_lvl( &$output, $depth = 0, $args = array() ) {
        if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
            $t = '';
            $n = '';
        } else {
            $t = "\t";
            $n = "\n";
        }
        $indent = str_repeat( $t, $depth );
        // Default class.
        $classes = array( 'sub-menu' );
        $class_names = join( ' ', apply_filters( 'nav_menu_submenu_css_class', $classes, $args, $depth ) );
        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';
        $output .= "{$n}{$indent}<ul$class_names>{$n}";
    }

    /**
     * Start El.
     *
     * @param string   $output Passed by reference. Used to append additional content.
     * @param WP_Post  $item   Menu item data object.
     * @param int      $depth  Depth of menu item. Used for padding.
     * @param stdClass $args   An object of wp_nav_menu() arguments.
     * @param int      $id     Current item ID.
     */
    public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
            $t = '';
            $n = '';
        } else {
            $t = "\t";
            $n = "\n";
        }
        $indent = ( $depth ) ? str_repeat( $t, $depth ) : '';

        $classes = empty( $item->classes ) ? array() : (array) $item->classes;
        
        // Add class for current menu item
        if ($item->current || $item->current_item_ancestor || $item->current_item_parent) {
            $classes[] = 'current-menu-item';
        }

        // Mobile menu specific
        if (isset($args->container_class) && $args->container_class === 'navbar-main') {
            $classes[] = 'relative';
            $classes[] = 'cursor-pointer';
            $classes[] = 'text-sm';
            $classes[] = 'font-semibold';
            $classes[] = 'px-6';
            $classes[] = 'py-2';
            $classes[] = 'rounded-full';
            $classes[] = 'transition-colors';
            $classes[] = 'text-foreground/80';
            $classes[] = 'hover:text-primary';
        } 
        // Mobile menu item at bottom
        elseif (isset($args->container_class) && $args->container_class === 'fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6') {
            $classes[] = 'menu-item';
        }
        // Side menu in mobile panel
        else {
            $classes[] = 'text-base';
            $classes[] = 'font-medium';
            $classes[] = 'transition-colors';
            $classes[] = 'hover:text-blue-600';
            $classes[] = 'dark:hover:text-blue-400';
            $classes[] = 'px-1';
            $classes[] = 'py-2';
        }

        // Filter the arguments for the current item
        $args = apply_filters( 'nav_menu_item_args', $args, $item, $depth );

        // Form a string of classes in format: class="class_names"
        $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args, $depth ) );
        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

        // Set up the ID
        $id = apply_filters( 'nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args, $depth );
        $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

        $output .= $indent . '<li' . $id . $class_names . '>';

        // Initialize array for holding the attributes
        $atts = array();
        $atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
        $atts['target'] = ! empty( $item->target ) ? $item->target : '';
        if ( '_blank' === $item->target && empty( $item->xfn ) ) {
            $atts['rel'] = 'noopener noreferrer';
        } else {
            $atts['rel'] = $item->xfn;
        }
        $atts['href']         = ! empty( $item->url ) ? $item->url : '';
        $atts['aria-current'] = $item->current ? 'page' : '';

        // Filter the HTML attributes applied to a menu item's anchor element
        $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args, $depth );

        // Build HTML attributes string
        $attributes = '';
        foreach ( $atts as $attr => $value ) {
            if ( is_scalar( $value ) && '' !== $value && false !== $value ) {
                $value       = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }

        /** This filter is documented in wp-includes/post-template.php */
        $title = apply_filters( 'the_title', $item->title, $item->ID );

        /**
         * Filter a menu item's title.
         */
        $title = apply_filters( 'nav_menu_item_title', $title, $item, $args, $depth );
        
        // For mobile tube navbar at bottom
        $icon_html = '';
        if (isset($args->container_class) && $args->container_class === 'fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6') {
            // Map menu item titles to icons
            $icon_map = array(
                'Accueil' => '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
                'Services' => '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',
                'Technologie' => '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
                'À Propos' => '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
                'FAQ' => '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
                'Contact' => '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0 1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
            );
            
            // Default icon if title not in map
            $icon_html = isset($icon_map[$item->title]) ? $icon_map[$item->title] : '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>';
            
            $item_output = $args->before;
            $item_output .= '<a' . $attributes . '>';
            $item_output .= $args->link_before . $icon_html . $args->link_after;
            $item_output .= '</a>';
            $item_output .= $args->after;
        } else {
            $item_output = $args->before;
            $item_output .= '<a' . $attributes . '>';
            $item_output .= $args->link_before . $title . $args->link_after;
            $item_output .= '</a>';
            $item_output .= $args->after;
        }
        
        /**
         * Filter a menu item's starting output.
         */
        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }

    /**
     * Menu Fallback
     * 
     * If no menu is assigned, this function displays a default navigation
     *
     * @param array $args passed from the wp_nav_menu function
     */
    public static function fallback( $args ) {
        if ( current_user_can( 'edit_theme_options' ) ) {
            $container = $args['container'];
            $container_id = $args['container_id'];
            $container_class = $args['container_class'];
            $menu_class = $args['menu_class'];
            $menu_id = $args['menu_id'];

            if ( $container ) {
                echo '<' . esc_attr( $container );
                if ( $container_id ) {
                    echo ' id="' . esc_attr( $container_id ) . '"';
                }
                if ( $container_class ) {
                    echo ' class="' . esc_attr( $container_class ) . '"';
                }
                echo '>';
            }
            echo '<ul';
            if ( $menu_id ) {
                echo ' id="' . esc_attr( $menu_id ) . '"';
            }
            if ( $menu_class ) {
                echo ' class="' . esc_attr( $menu_class ) . '"';
            }
            echo '>';
            echo '<li class="menu-item"><a href="' . esc_url( admin_url( 'nav-menus.php' ) ) . '">Ajouter un menu</a></li>';
            echo '</ul>';
            if ( $container ) {
                echo '</' . esc_attr( $container ) . '>';
            }
        }
    }
}
