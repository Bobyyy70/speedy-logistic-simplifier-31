
<?php
/**
 * Template part for displaying the contact info and map
 */
?>

<div class="rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-lg h-full">
    <!-- Contact Details -->
    <div class="p-6 md:p-8">
        <h3 class="text-xl font-semibold mb-6">Informations de Contact</h3>
        
        <div class="space-y-6">
            <div class="flex items-start">
                <div class="flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div class="ml-4">
                    <h4 class="text-base font-medium">Email</h4>
                    <a href="mailto:contact@speedelog.fr" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                        contact@speedelog.fr
                    </a>
                </div>
            </div>
            
            <div class="flex items-start">
                <div class="flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div class="ml-4">
                    <h4 class="text-base font-medium">Téléphone</h4>
                    <a href="tel:+33384914050" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +33 3 84 91 40 50
                    </a>
                </div>
            </div>
            
            <div class="flex items-start">
                <div class="flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div class="ml-4">
                    <h4 class="text-base font-medium">Adresse</h4>
                    <address class="text-sm text-muted-foreground not-italic">
                        Speed E-Log<br>
                        10 Rue de l'Entrepôt<br>
                        70170 Port-sur-Saône, France
                    </address>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Map -->
    <div class="h-72">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21483.407368863944!2d6.034268266009677!3d47.68749725420379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47924a130d51be79%3A0x409ce34b30e21c0!2s70170%20Port-sur-Sa%C3%B4ne!5e0!3m2!1sfr!2sfr!4v1715423517229!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</div>
