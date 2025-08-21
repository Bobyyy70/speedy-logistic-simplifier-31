
import { useEffect } from 'react';

// Optimise les éléments critiques pour le LCP sans affecter l'UX
export const LCPOptimizer = () => {
  useEffect(() => {
    // Précharge les ressources critiques LCP
    const criticalResources = [
      '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png', // Logo header
      // Ajouter d'autres images critiques identifiées
    ];

    criticalResources.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });

    // Précharge les fonts critiques
    const criticalFonts = [
      // Ajouter les fonts si utilisées
    ];

    criticalFonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.href = fontUrl;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Optimise le rendu initial en supprimant les animations bloquantes
    document.documentElement.style.setProperty('--lcp-optimization', 'enabled');
  }, []);

  return null;
};
