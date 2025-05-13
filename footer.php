
<?php
/**
 * The template for displaying the footer
 */
?>

<footer class="py-0 my-0 bg-transparent backdrop-blur-sm">
    <div class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <!-- Logo et description -->
            <div class="flex flex-col gap-4">
                <div class="flex justify-start px-0">
                    <?php if (has_custom_logo()): ?>
                        <?php the_custom_logo(); ?>
                    <?php else: ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-text.png" alt="<?php bloginfo('name'); ?>">
                    <?php endif; ?>
                </div>
                <p class="text-sm text-muted-foreground mt-4">
                    Votre partenaire logistique pour simplifier vos opérations e-commerce et accélérer votre croissance.
                </p>
            </div>

            <!-- Liens principaux -->
            <div class="flex flex-col gap-4">
                <h3 class="font-semibold">Liens rapides</h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer-menu',
                    'menu_class'     => 'grid grid-cols-2 gap-2',
                    'container'      => 'div',
                    'depth'          => 1,
                    'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
                    'walker'         => new WP_Bootstrap_Navwalker(),
                    'add_li_class'   => 'text-sm text-muted-foreground hover:text-primary transition-colors',
                ));
                ?>
            </div>

            <!-- Liens légaux et copyright -->
            <div class="flex flex-col gap-4">
                <h3 class="font-semibold">Informations légales</h3>
                <div class="flex flex-col gap-2">
                    <a href="<?php echo esc_url(home_url('/mentions-legales')); ?>" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Mentions légales
                    </a>
                    <a href="<?php echo esc_url(home_url('/politique-confidentialite')); ?>" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Politique de confidentialité
                    </a>
                    <a href="<?php echo esc_url(home_url('/cgv')); ?>" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Conditions générales de vente
                    </a>
                </div>
            </div>
        </div>

        <!-- Copyright - sans bordure supérieure -->
        <div class="pt-4 text-center">
            <p class="text-sm text-muted-foreground">
                © <?php echo date('Y'); ?> Speed E-Log. Tous droits réservés. Réalisé avec passion à Port-sur-Saône.
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
