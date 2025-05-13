
<?php
/**
 * The template for displaying 404 pages (not found)
 */

get_header();
?>

<main class="flex-1 site-background">
    <div class="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">
        <div class="text-center max-w-md">
            <h1 class="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 class="text-3xl font-semibold mb-6">Page non trouvée</h2>
            <p class="text-lg text-muted-foreground mb-8">
                La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-6 py-3 rounded-full">
                Retour à l'accueil
            </a>
        </div>
    </div>
</main>

<?php
get_footer();
