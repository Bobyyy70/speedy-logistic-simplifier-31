
<?php
/**
 * Template part for displaying the contact form
 */
?>

<div class="contact-form-container mb-8">
    <form id="contactForm" class="space-y-6" method="post">
        <?php wp_nonce_field('contact_form_nonce', 'contact_nonce'); ?>
        
        <div class="grid grid-cols-1 gap-6">
            <div class="form-group">
                <label for="name" class="block text-sm font-medium mb-1">Nom / Société <span class="text-red-500">*</span></label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    class="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Votre nom ou nom d'entreprise"
                    required
                >
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-group">
                    <label for="email" class="block text-sm font-medium mb-1">Email <span class="text-red-500">*</span></label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        class="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        placeholder="votre@email.com"
                        required
                    >
                </div>
                
                <div class="form-group">
                    <label for="phone" class="block text-sm font-medium mb-1">Téléphone</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        class="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        placeholder="01 23 45 67 89"
                    >
                </div>
            </div>
            
            <div class="form-group">
                <label for="message" class="block text-sm font-medium mb-1">Message <span class="text-red-500">*</span></label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    class="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Décrivez vos besoins logistiques (volume estimé, type de produits, attentes...)"
                    required
                ></textarea>
            </div>
            
            <div class="flex items-center">
                <input 
                    type="checkbox" 
                    id="consent" 
                    name="consent" 
                    class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" 
                    required
                >
                <label for="consent" class="ml-2 block text-sm">
                    J'accepte que mes données soient traitées pour me recontacter <span class="text-red-500">*</span>
                </label>
            </div>
        </div>
        
        <div class="text-right">
            <button 
                type="submit" 
                class="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white rounded-md flex items-center"
            >
                Envoyer ma demande
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
        </div>
    </form>
</div>
