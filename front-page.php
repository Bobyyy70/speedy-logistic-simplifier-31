
<?php
/**
 * Template for the front page
 */

get_header();
?>

<main class="flex-1">
    <?php get_template_part('template-parts/sections/hero'); ?>
    <?php get_template_part('template-parts/sections/logistics-feature'); ?>
    <?php get_template_part('template-parts/sections/challenges'); ?>
    <?php get_template_part('template-parts/sections/how-it-works'); ?>
    <?php get_template_part('template-parts/sections/why-us'); ?>
    <?php get_template_part('template-parts/sections/testimonials'); ?>
    <?php get_template_part('template-parts/home/testimonials-carousel'); ?>
    <?php get_template_part('template-parts/home/contact-cta'); ?>
</main>

<?php
get_footer();
