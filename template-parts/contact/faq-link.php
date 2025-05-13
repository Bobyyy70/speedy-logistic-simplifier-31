
<?php
/**
 * Template part for displaying the FAQ link
 */
?>

<div class="mt-16 text-center">
    <h2 class="text-xl font-semibold mb-4">Vous avez d'autres questions ?</h2>
    <p class="mb-6">Consultez notre <a href="<?php echo esc_url(home_url('/faq')); ?>" class="text-primary hover:underline">FAQ</a> ou contactez-nous directement.</p>
    <a href="<?php echo esc_url(home_url('/services')); ?>" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        Découvrir nos services
    </a>
</div>
