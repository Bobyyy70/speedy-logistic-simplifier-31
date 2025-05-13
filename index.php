
<?php
/**
 * The main template file
 */

get_header();
?>

<main class="flex-1">
    <?php if (is_front_page()): ?>
        <?php get_template_part('template-parts/sections/hero'); ?>
        <?php get_template_part('template-parts/sections/logistics-feature'); ?>
        <?php get_template_part('template-parts/sections/challenges'); ?>
        <?php get_template_part('template-parts/sections/how-it-works'); ?>
        <?php get_template_part('template-parts/sections/why-us'); ?>
        <?php get_template_part('template-parts/sections/testimonials'); ?>
        <?php get_template_part('template-parts/home/testimonials-carousel'); ?>
        <?php get_template_part('template-parts/home/contact-cta'); ?>
    <?php else: ?>
        <div class="container mx-auto px-4 py-12">
            <?php
            if (have_posts()) :
                while (have_posts()) :
                    the_post();
                    ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <header class="entry-header">
                            <?php the_title('<h1 class="entry-title text-3xl md:text-4xl font-bold mb-6">', '</h1>'); ?>
                        </header>

                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>
                    </article>
                    <?php
                endwhile;

                the_posts_navigation();
            else :
                get_template_part('template-parts/content/content', 'none');
            endif;
            ?>
        </div>
    <?php endif; ?>
</main>

<?php
get_footer();
