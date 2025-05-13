
/**
 * Speed E-Log Navigation & Header JS
 * Pour gérer la navigation, le menu mobile et les effets de défilement
 */

document.addEventListener('DOMContentLoaded', function() {
    // Gestion de l'apparence du header au défilement
    const header = document.getElementById('main-header');
    let scrolled = false;
    
    function handleScroll() {
        if (window.scrollY > 10) {
            if (!scrolled) {
                header.classList.add('shadow-sm', 'bg-white/10', 'dark:bg-slate-900/10');
                document.cookie = "is_scrolled=true; path=/";
                scrolled = true;
            }
        } else {
            if (scrolled) {
                header.classList.remove('shadow-sm', 'bg-white/10', 'dark:bg-slate-900/10');
                document.cookie = "is_scrolled=false; path=/";
                scrolled = false;
            }
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Menu mobile
    const menuButton = document.getElementById('mobile-menu-button');
    const closeButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.add('active');
            }, 10);
        });
    }
    
    if (closeButton && mobileMenu) {
        closeButton.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    }
    
    // Fermer le menu mobile lors du clic sur un lien
    const mobileMenuItems = document.querySelectorAll('#mobile-menu .menu-item a');
    if (mobileMenuItems.length && mobileMenu) {
        mobileMenuItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            });
        });
    }
    
    // Effet de lampe pour la navbar tube (bottom navbar)
    const tubeNavItems = document.querySelectorAll('.tube-navbar .menu-item a');
    
    if (tubeNavItems.length) {
        // Trouver l'élément actif initialement (pour la page courante)
        let activeItem = document.querySelector('.tube-navbar .current-menu-item');
        
        // Si aucun élément n'est marqué comme actif, sélectionner le premier par défaut
        if (!activeItem && tubeNavItems.length > 0) {
            activeItem = tubeNavItems[0].parentNode;
            activeItem.classList.add('current-menu-item');
        }
        
        // Ajouter un listener sur chaque élément pour mettre à jour l'état actif
        tubeNavItems.forEach(item => {
            if (window.location.pathname === item.getAttribute('href')) {
                // Marquer l'élément correspondant à l'URL actuelle
                if (activeItem) activeItem.classList.remove('current-menu-item');
                item.parentNode.classList.add('current-menu-item');
                activeItem = item.parentNode;
            }
        });
    }
});
