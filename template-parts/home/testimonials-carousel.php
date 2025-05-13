
<?php
/**
 * Template part for displaying the testimonials carousel
 */
?>

<section class="py-12 md:py-[26px]">
    <div class="section-container py-0 my-0">
        <h2 class="section-title">Ils nous font confiance</h2>
        <p class="section-subtitle">
            Découvrez comment Speed E Log a aidé d'autres e-commerçants à simplifier leur logistique et accélérer leur croissance.
        </p>

        <div class="mt-12">
            <div class="testimonials-carousel overflow-hidden relative">
                <div class="testimonials-container flex gap-5 py-4">
                    <?php
                    $testimonials = array(
                        array(
                            'quote' => "J'ai confié mon stock ainsi que toute ma logistique chez Speedelog depuis le début et je ne suis absolument pas déçu. Mes clients reçoivent ce qu'ils ont commandé (ça change de mon ancien prestataire) Francesco est très à l'écoute et surtout réactif quand on a besoin de lui. Je recommande à 200%",
                            'name' => "Sébastien P.",
                            'rating' => 5
                        ),
                        array(
                            'quote' => "Je crois que je n'ai jamais eu un logisticien aussi fiable depuis le lancement de mon activité (en 2015), un taux d'erreurs quasiment nul, une super gestion des retours et un Sav existant contrairement a beaucoup d'autres ;)Merci beaucoup, grâce à speedElog je peux maintenant me consacrer pleinement à mon activité sans me soucier des contraintes logistiques. Allez y les yeux fermés",
                            'name' => "Julie B.",
                            'rating' => 5
                        ),
                        array(
                            'quote' => "Entreprise à taille humaine, avec de vrais valeurs et proches de ses clients, qui sait nous conseiller sur les meilleures solutions de transport ! je fais clairement des économies depuis que j'ai externalisé ma logistique chez eux",
                            'name' => "Mathis H.",
                            'rating' => 4
                        ),
                        array(
                            'quote' => "Je viens de lancer mon activité e-commerce et j'ai eu du mal à trouver un logisticien avec le peu d'expédition que nous avons.. mais speedElog nous a fait tout de suite confiance en intégrant notre stock chez eux. Cerise sur le gâteux ils nous donnent de vrais conseils pour nous développer",
                            'name' => "Mathieu M.",
                            'rating' => 5
                        ),
                        array(
                            'quote' => "Tarifs justes, professionnalisme, et hyper sympa ! Il y a encore des gens passionnés et impliqués, À su gérer récemment un gros pic d'activité sans baisser la qualité du service",
                            'name' => "Cédric M.",
                            'rating' => 5
                        ),
                        array(
                            'quote' => "En tant qu'e-commerçant actif sur Amazon, Cdiscount et d'autres plateformes, j'ai besoin d'un logisticien sur qui je peux vraiment compter. Ce que j'apprécie particulièrement chez lui, c'est sa réactivité exceptionnelle : que ce soit un dimanche soir ou un jour férié, il est toujours là pour répondre présent. Il sait s'adapter à toutes les situations, toujours avec professionnalisme et efficacité. Les tarifs sont compétitifs, mais surtout, le service est irréprochable. C'est rare de trouver un partenaire aussi fiable, et pour moi, c'est devenu un pilier de mon activité.",
                            'name' => "Fred P.",
                            'rating' => 5
                        )
                    );

                    foreach ($testimonials as $testimonial) : ?>
                        <div class="testimonial-card min-w-[280px] md:min-w-[400px] p-4 md:p-6 rounded-xl glass-effect">
                            <div class="star-rating mb-3 md:mb-4">
                                <?php for ($i = 1; $i <= 5; $i++) : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                         class="h-5 w-5 inline-block <?php echo ($i <= $testimonial['rating']) ? 'text-orange-400' : 'text-gray-300'; ?>" 
                                         viewBox="0 0 20 20" 
                                         fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                    </svg>
                                <?php endfor; ?>
                            </div>
                            <blockquote class="text-sm md:text-base italic mb-3 md:mb-4 flex-grow">
                                "<?php echo $testimonial['quote']; ?>"
                            </blockquote>
                            <div class="text-right">
                                <p class="font-semibold text-sm md:text-base"><?php echo $testimonial['name']; ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>
