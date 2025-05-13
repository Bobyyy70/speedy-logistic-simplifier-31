
<?php
/**
 * Template Name: Contact Page
 * Description: Template for the contact page
 */

get_header();
?>

<main class="flex-1 site-background">
    <div class="max-w-7xl mx-auto px-4 py-12 min-h-screen">
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
                Contactez <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">Speed E-Log</span>
            </h1>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discutons de vos besoins logistiques et trouvons ensemble la meilleure solution pour votre e-commerce.
            </p>
        </div>
        
        <div class="grid gap-8 lg:grid-cols-12">
            <!-- Contact Form - Left column -->
            <div class="lg:col-span-7">
                <?php get_template_part('template-parts/contact/header'); ?>
                <?php get_template_part('template-parts/contact/form'); ?>
            </div>
            
            <!-- Contact Info & Map - Right column -->
            <div class="lg:col-span-5">
                <?php get_template_part('template-parts/contact/info'); ?>
            </div>
        </div>
        
        <?php get_template_part('template-parts/contact/faq-link'); ?>
    </div>
</main>

<?php
get_footer();
