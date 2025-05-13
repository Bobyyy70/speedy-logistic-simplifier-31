
<?php
/**
 * The header for our theme
 */
?>
<!doctype html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="theme-color" content="#0074E4">
    <meta name="format-detection" content="telephone=yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class('flex flex-col min-h-screen site-background'); ?>>
<?php wp_body_open(); ?>

<header class="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm <?php echo (isset($_COOKIE['is_scrolled']) && $_COOKIE['is_scrolled'] === 'true') ? 'shadow-sm bg-white/10 dark:bg-slate-900/10' : ''; ?>" id="main-header">
    <div class="container flex h-20 items-center justify-between py-0 my-[8px]">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center h-full py-0">
            <?php if (has_custom_logo()): ?>
                <?php the_custom_logo(); ?>
            <?php else: ?>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-text.png" alt="<?php bloginfo('name'); ?>" class="w-auto h-full">
            <?php endif; ?>
        </a>

        <div class="hidden md:block">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary-menu',
                'menu_class'     => 'relative sm:static left-auto transform-none mb-0 sm:pt-0',
                'container'      => 'nav',
                'container_class' => 'navbar-main',
                'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
                'walker'         => new WP_Bootstrap_Navwalker(),
            ));
            ?>
        </div>

        <div class="mobile-menu-container">
            <button id="mobile-menu-button" class="h-10 w-10 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 md:hidden" aria-label="Menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            
            <div id="mobile-menu" class="mobile-menu-panel hidden fixed right-0 top-0 bottom-0 w-[80%] sm:w-[350px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50">
                <div class="p-6">
                    <div class="flex justify-between items-center">
                        <h3 class="text-left">Menu</h3>
                        <button id="close-mobile-menu" class="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div class="flex justify-center my-4">
                        <?php if (has_custom_logo()): ?>
                            <?php the_custom_logo(); ?>
                        <?php else: ?>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-text.png" alt="<?php bloginfo('name'); ?>">
                        <?php endif; ?>
                    </div>
                    <nav class="flex flex-col gap-4 mt-8">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'mobile-menu',
                            'menu_class'     => 'mobile-menu-items',
                            'container'      => '',
                            'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
                            'walker'         => new WP_Bootstrap_Navwalker(),
                        ));
                        ?>
                        <div class="mt-4">
                            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="block">
                                <button class="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-4 py-2 rounded-full">
                                    Obtenir un devis
                                </button>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <div class="hidden md:block">
            <a href="<?php echo esc_url(home_url('/contact')); ?>">
                <!-- CTA button can be added here -->
            </a>
        </div>
    </div>
    
    <?php if (wp_is_mobile()): ?>
    <div class="bottom-navigation">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'mobile-menu',
            'menu_class'     => 'tube-navbar z-50',
            'container'      => 'div',
            'container_class' => 'fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6',
            'depth'          => 1,
            'items_wrap'     => '<div class="flex items-center gap-3 bg-white/60 dark:bg-slate-900/60 border border-white/40 dark:border-slate-700/40 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg">%3$s</div>',
            'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
            'walker'         => new WP_Bootstrap_Navwalker(),
        ));
        ?>
    </div>
    <?php endif; ?>
</header>
