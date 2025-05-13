
/**
 * Speed E-Log Animations JS
 * Animations inspirées de framer-motion, mais en vanilla JS
 */

document.addEventListener('DOMContentLoaded', function() {
    // Testimonials carousel
    const carousel = document.querySelector('.testimonials-carousel');
    const container = document.querySelector('.testimonials-container');
    
    if (carousel && container) {
        let isPaused = false;
        let scrollX = 0;
        let lastTime = performance.now();
        let touchStart = null;
        let touchEnd = null;
        const SCROLL_SPEED = 25; // pixels per second
        const isMobile = window.innerWidth < 768;
        
        function animate(currentTime) {
            if (!isPaused) {
                const deltaTime = currentTime - lastTime;
                scrollX -= (SCROLL_SPEED * deltaTime) / 1000;
                
                // Reset position when reaching the end of first set
                const containerWidth = container.scrollWidth / 2;
                if (scrollX <= -containerWidth) {
                    scrollX = 0;
                }
                
                container.style.transform = `translateX(${scrollX}px)`;
            }
            lastTime = currentTime;
            requestAnimationFrame(animate);
        }
        
        // Clone testimonials for infinite loop
        const cards = document.querySelectorAll('.testimonial-card');
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            container.appendChild(clone);
        });
        
        // Touch events for mobile
        carousel.addEventListener('touchstart', function(e) {
            isPaused = true;
            touchStart = e.targetTouches[0].clientX;
        });
        
        carousel.addEventListener('touchmove', function(e) {
            touchEnd = e.targetTouches[0].clientX;
        });
        
        carousel.addEventListener('touchend', function() {
            if (!touchStart || !touchEnd) {
                isPaused = false;
                return;
            }
            
            const distance = touchStart - touchEnd;
            const isLeftSwipe = distance > 50;
            const isRightSwipe = distance < -50;
            
            if (isLeftSwipe) {
                // Swipe left: scroll forward
                scrollX -= isMobile ? 280 : 400;
            } else if (isRightSwipe) {
                // Swipe right: scroll backward
                scrollX += isMobile ? 280 : 400;
            }
            
            touchStart = null;
            touchEnd = null;
            
            // Resume auto-scrolling after a short delay
            setTimeout(function() {
                isPaused = false;
            }, 1500);
        });
        
        // Pause on hover
        carousel.addEventListener('mouseenter', function() {
            isPaused = true;
        });
        
        carousel.addEventListener('mouseleave', function() {
            isPaused = false;
        });
        
        // Start animation
        requestAnimationFrame(animate);
    }
    
    // Lazy loading images
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if (lazyImages.length) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.setAttribute('data-loaded', 'true');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        lazyImages.forEach(img => {
            img.setAttribute('data-loaded', 'false');
            imageObserver.observe(img);
        });
    }
    
    // Animation fade-in pour les éléments au scroll
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    
    if (fadeElements.length) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(el => {
            el.classList.add('opacity-0');
            fadeObserver.observe(el);
        });
    }
});
