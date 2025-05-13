
<?php
/**
 * The template for displaying all pages
 */

get_header();
?>

<main class="flex-1 site-background">
    <div class="max-w-7xl mx-auto px-4 py-12 min-h-screen">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="text-center mb-12">
                        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
                            <?php the_title(); ?>
                        </h1>
                        <?php if (has_excerpt()) : ?>
                            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                                <?php the_excerpt(); ?>
                            </p>
                        <?php endif; ?>
                    </header>

                    <div class="prose prose-lg max-w-none">
                        <?php the_content(); ?>
                    </div>
                </article>
                <?php
            endwhile;
        endif;
        ?>
    </div>
</main>

<?php
get_footer();
