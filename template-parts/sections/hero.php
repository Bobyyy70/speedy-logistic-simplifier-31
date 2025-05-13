
<?php
/**
 * Template part for displaying the hero section
 */
?>

<section class="relative site-background py-12 md:py-24 lg:py-32 overflow-hidden xl:py-0 rounded-none mx-0">
    <!-- World Map Background - To be implemented with JS -->
    <div class="absolute inset-0 opacity-25 overflow-hidden" id="world-map-bg">
        <!-- JS will inject map here -->
    </div>
    
    <div class="container mx-auto relative z-10 px-0">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] gap-6 lg:gap-12 items-center">
            <!-- Content Column -->
            <div class="flex flex-col justify-center space-y-6 text-center lg:text-left px-[25px]">
                <div class="mb-2">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-home.png" alt="<?php bloginfo('name'); ?>" class="w-36 lg:self-start mx-auto lg:mx-0">
                </div>
                <h1 class="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl">
                    La logistique E-commerce, <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500 mx-0">sans les tracas</span>.
                </h1>
                <p class="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                    Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. Speed E-Log simplifie vos expéditions.
                </p>
                <div class="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start px-[4px]">
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-7 py-2.5 rounded-full inline-flex items-center justify-center">
                        Obtenir un devis personnalisé 
                        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="<?php echo esc_url(home_url('/services')); ?>" class="border text-foreground px-7 py-2.5 rounded-full inline-flex items-center justify-center bg-transparent">
                        Découvrir nos services
                    </a>
                </div>
                
                <!-- Social Proof -->
                <div class="mt-6 flex items-center justify-center lg:justify-start space-x-3">
                    <div class="flex -space-x-2">
                        <div class="inline-block h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                            <img alt="Logo HEFA Group" class="p-1 object-cover h-full w-full" src="<?php echo get_template_directory_uri(); ?>/assets/images/client-hefa.png">
                        </div>
                        <div class="inline-block h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                            <img alt="Logo THOMAS" class="p-1 object-cover h-full w-full" src="<?php echo get_template_directory_uri(); ?>/assets/images/client-thomas.png">
                        </div>
                        <div class="inline-block h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                            <img alt="Logo Heatzy" class="p-1 object-cover h-full w-full" src="<?php echo get_template_directory_uri(); ?>/assets/images/client-heatzy.png">
                        </div>
                    </div>
                    <p class="text-sm text-muted-foreground">
                        Déjà <span class="font-medium text-foreground">20+ PME</span> nous font confiance
                    </p>
                </div>
            </div>
            
            <!-- Visual Column -->
            <div class="lg:order-last relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur opacity-20"></div>
                <div class="relative bg-gradient-to-r from-blue-100 via-blue-50 to-blue-200 dark:from-slate-900 dark:via-slate-950 dark:to-blue-900 shadow-xl p-6 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 rounded">
                    <h3 class="font-semibold text-lg mb-2">Speed E-Log vous accompagne dans la gestion complète de votre e-commerce.</h3>
                    <p class="text-muted-foreground">Notre expertise 3PL garantit une optimisation maximale de votre chaîne logistique.</p>
                </div>
            </div>
        </div>
    </div>
</section>
