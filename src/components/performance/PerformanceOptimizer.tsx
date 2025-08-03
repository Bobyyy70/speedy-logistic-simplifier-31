import { useEffect } from 'react';
import { CriticalResourcePreloader } from './CriticalResourcePreloader';
import { AnimationOptimizer } from './AnimationOptimizer';
import { TouchTargetOptimizer } from './TouchTargetOptimizer';
import { setupIntelligentPreloading } from './BundleOptimizer';

// Hook pour optimiser le LCP (Largest Contentful Paint)
const useLCPOptimization = () => {
  useEffect(() => {
    // Optimiser le rendering initial
    const optimizeRendering = () => {
      // Éviter les recalculs de style pendant le chargement initial
      document.documentElement.style.setProperty('--optimize-rendering', '1');
      
      // Forcer le navigateur à commencer le rendu plus tôt
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Déclencher un repaint si nécessaire
          document.body.offsetHeight;
        });
      }
    };

    // Optimiser les web fonts
    const optimizeFonts = () => {
      // Précharger les polices critiques si pas déjà fait
      const fontPreloadLink = document.querySelector('link[href*="fonts.googleapis.com"]');
      if (fontPreloadLink) {
        fontPreloadLink.setAttribute('rel', 'preload');
        fontPreloadLink.setAttribute('as', 'style');
      }
      
      // Utiliser font-display: swap pour les polices personnalisées
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
      `;
      document.head.appendChild(style);
    };

    // Optimiser les images au-dessus du pli
    const optimizeAboveFoldImages = () => {
      const aboveFoldImages = document.querySelectorAll('img[data-above-fold="true"]');
      aboveFoldImages.forEach((img) => {
        (img as HTMLImageElement).loading = 'eager';
        (img as HTMLImageElement).fetchPriority = 'high';
      });
    };

    optimizeRendering();
    optimizeFonts();
    optimizeAboveFoldImages();
  }, []);
};

// Hook pour optimiser le CLS (Cumulative Layout Shift)
const useCLSOptimization = () => {
  useEffect(() => {
    // Stabiliser les dimensions des éléments dynamiques
    const stabilizeLayout = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Réserver l'espace pour les images */
        img[data-lazy="true"] {
          min-height: 200px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        /* Éviter les changements de layout pour les boutons */
        button {
          min-height: 44px;
        }
        
        /* Stabiliser les formulaires */
        form {
          min-height: 100px;
        }
      `;
      document.head.appendChild(style);
    };

    stabilizeLayout();
  }, []);
};

// Hook pour optimiser le FID (First Input Delay)
const useFIDOptimization = () => {
  useEffect(() => {
    // Différer les scripts non-critiques
    const deferNonCriticalScripts = () => {
      setTimeout(() => {
        // Charger les analytics après le chargement initial
        if ('gtag' in window) {
          console.log('Analytics déjà chargé');
        }
        
        // Initialiser les intégrations tierces après délai
        setTimeout(() => {
          setupIntelligentPreloading();
        }, 2000);
      }, 1000);
    };

    // Optimiser les event listeners
    const optimizeEventListeners = () => {
      // Utiliser la délégation d'événements pour réduire le nombre de listeners
      document.addEventListener('click', (e) => {
        const target = e.target as Element;
        if (target.matches('[data-touch-optimized]')) {
          // Traitement optimisé pour les éléments tactiles
          e.preventDefault();
          setTimeout(() => {
            // Déléguer le clic après un micro-délai pour éviter le blocking
            target.dispatchEvent(new Event('optimized-click', { bubbles: true }));
          }, 0);
        }
      }, { passive: false });
    };

    deferNonCriticalScripts();
    optimizeEventListeners();
  }, []);
};

// Hook pour les métriques de performance
const usePerformanceMetrics = () => {
  useEffect(() => {
    // Observer les Core Web Vitals
    const observeWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // Observer LCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Observer FID
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        }).observe({ entryTypes: ['first-input'] });

        // Observer CLS
        new PerformanceObserver((entryList) => {
          let clsValue = 0;
          const entries = entryList.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          console.log('CLS:', clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Observer seulement en développement
    if (process.env.NODE_ENV === 'development') {
      observeWebVitals();
    }
  }, []);
};

export const PerformanceOptimizer: React.FC = () => {
  // Appliquer toutes les optimisations
  useLCPOptimization();
  useCLSOptimization();
  useFIDOptimization();
  usePerformanceMetrics();

  return (
    <>
      {/* Préchargement des ressources critiques */}
      <CriticalResourcePreloader />
      
      {/* Optimisation des animations */}
      <AnimationOptimizer>
        <div id="performance-optimized-content" />
      </AnimationOptimizer>
      
      {/* Optimisation des cibles tactiles */}
      <TouchTargetOptimizer />
    </>
  );
};

// Hook pour détecter la performance du dispositif
export const useDevicePerformance = () => {
  const getDevicePerformance = () => {
    // @ts-ignore - Navigator.hardwareConcurrency n'est pas standard
    const cores = navigator.hardwareConcurrency || 4;
    // @ts-ignore - Navigator.deviceMemory n'est pas standard
    const memory = navigator.deviceMemory || 4;
    // @ts-ignore - Navigator.connection
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    let performanceLevel = 'medium';
    
    // Dispositif haute performance
    if (cores >= 8 && memory >= 8) {
      performanceLevel = 'high';
    }
    // Dispositif basse performance
    else if (cores <= 2 || memory <= 2) {
      performanceLevel = 'low';
    }
    
    // Ajuster selon la connexion
    if (connection) {
      const slowConnections = ['slow-2g', '2g', '3g'];
      if (slowConnections.includes(connection.effectiveType)) {
        performanceLevel = 'low';
      }
    }
    
    return {
      level: performanceLevel,
      cores,
      memory: memory || 4,
      connection: connection?.effectiveType || 'unknown'
    };
  };

  return getDevicePerformance();
};

export default PerformanceOptimizer;