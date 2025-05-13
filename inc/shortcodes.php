
<?php
/**
 * Custom shortcodes for the theme
 */

/**
 * Button Shortcode
 * Usage: [button url="https://example.com" text="Click Me" variant="primary|outline|ghost"]
 */
function speedelog_button_shortcode($atts) {
    $atts = shortcode_atts(array(
        'url' => '#',
        'text' => 'Button',
        'variant' => 'primary', // primary, outline, ghost
    ), $atts);
    
    $class = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';
    
    switch ($atts['variant']) {
        case 'outline':
            $class .= ' border text-foreground bg-transparent hover:border-zinc-600 hover:bg-white/10';
            break;
        case 'ghost':
            $class .= ' border-transparent bg-transparent hover:bg-muted';
            break;
        case 'primary':
        default:
            $class .= ' bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white';
            break;
    }
    
    return '<a href="' . esc_url($atts['url']) . '" class="' . esc_attr($class) . '">' . esc_html($atts['text']) . '</a>';
}
add_shortcode('button', 'speedelog_button_shortcode');

/**
 * Alert Shortcode
 * Usage: [alert type="info|warning|error|success" title="Optional Title"]Your alert content[/alert]
 */
function speedelog_alert_shortcode($atts, $content = null) {
    $atts = shortcode_atts(array(
        'type' => 'info', // info, warning, error, success
        'title' => '',
    ), $atts);
    
    $classes = array(
        'info' => 'bg-blue-50 border-blue-500 text-blue-700',
        'warning' => 'bg-yellow-50 border-yellow-500 text-yellow-700',
        'error' => 'bg-red-50 border-red-500 text-red-700',
        'success' => 'bg-green-50 border-green-500 text-green-700',
    );
    
    $class = isset($classes[$atts['type']]) ? $classes[$atts['type']] : $classes['info'];
    
    $output = '<div class="' . esc_attr($class) . ' p-4 rounded-md border-l-4">';
    
    if (!empty($atts['title'])) {
        $output .= '<h4 class="text-lg font-medium mb-2">' . esc_html($atts['title']) . '</h4>';
    }
    
    $output .= '<div class="text-sm">' . wp_kses_post($content) . '</div>';
    $output .= '</div>';
    
    return $output;
}
add_shortcode('alert', 'speedelog_alert_shortcode');

/**
 * Icon Shortcode
 * Usage: [icon name="home" size="24" class="additional-class"]
 */
function speedelog_icon_shortcode($atts) {
    $atts = shortcode_atts(array(
        'name' => '',
        'size' => '24',
        'class' => '',
    ), $atts);
    
    if (empty($atts['name'])) {
        return '';
    }
    
    if (class_exists('SpeedELog_SVG_Icons')) {
        return SpeedELog_SVG_Icons::get_svg($atts['name'], array(
            'size' => $atts['size'],
            'class' => $atts['class'],
        ));
    }
    
    return '';
}
add_shortcode('icon', 'speedelog_icon_shortcode');

/**
 * Features Grid Shortcode
 * Usage: [features_grid columns="3"]
 * [feature icon="package" title="Feature 1"]Description 1[/feature]
 * [feature icon="truck" title="Feature 2"]Description 2[/feature]
 * [/features_grid]
 */
function speedelog_features_grid_shortcode($atts, $content = null) {
    $atts = shortcode_atts(array(
        'columns' => '3',
    ), $atts);
    
    $columns_class = 'grid-cols-1 sm:grid-cols-2';
    if ($atts['columns'] == '3') {
        $columns_class .= ' lg:grid-cols-3';
    } else if ($atts['columns'] == '4') {
        $columns_class .= ' lg:grid-cols-4';
    }
    
    $output = '<div class="grid ' . esc_attr($columns_class) . ' gap-4 md:gap-6">';
    $output .= do_shortcode($content);
    $output .= '</div>';
    
    return $output;
}
add_shortcode('features_grid', 'speedelog_features_grid_shortcode');

/**
 * Feature Shortcode (to be used inside features_grid)
 * Usage: [feature icon="package" title="Feature Title"]Feature description[/feature]
 */
function speedelog_feature_shortcode($atts, $content = null) {
    $atts = shortcode_atts(array(
        'icon' => '',
        'title' => '',
    ), $atts);
    
    $output = '<div class="h-full glass-effect border-gray-200 dark:border-gray-800 rounded-md">';
    
    $output .= '<div class="p-4 md:p-6">';
    
    if (!empty($atts['icon']) && class_exists('SpeedELog_SVG_Icons')) {
        $output .= '<div class="mb-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">';
        $output .= SpeedELog_SVG_Icons::get_svg($atts['icon'], array(
            'size' => '24',
            'class' => 'text-blue-600 dark:text-blue-400',
        ));
        $output .= '</div>';
    }
    
    if (!empty($atts['title'])) {
        $output .= '<h3 class="text-lg md:text-xl font-semibold mb-2">' . esc_html($atts['title']) . '</h3>';
    }
    
    $output .= '<div class="text-sm md:text-base text-gray-600 dark:text-gray-300">' . wp_kses_post($content) . '</div>';
    
    $output .= '</div>';
    $output .= '</div>';
    
    return $output;
}
add_shortcode('feature', 'speedelog_feature_shortcode');
