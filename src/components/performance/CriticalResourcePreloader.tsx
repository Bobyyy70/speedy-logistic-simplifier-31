import { useEffect } from 'react';

// Images critiques pour la page d'accueil (above-the-fold)
const criticalImages = [
  '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png', // Logo Speed E-Log principal
  '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.webp', // Version WebP du logo principal
  '/lovable-uploads/5c1b4538-57b0-4f38-af9e-dda22195de74.png', // Logo Speed E-Log (variante)
  '/lovable-uploads/83cc9529-aa94-4f8a-851d-02ea52cc3c71.png', // Logo Speed E-Log (variante compacte)
  '/lovable-uploads/44a63774-38e6-47c0-bddf-56c2d10f5e6c.png', // Logo HEFA Group (SocialProof)
  '/lovable-uploads/95fcf84f-8ddc-4c7d-9f92-d3790f0586eb.png', // Logo THOMAS (SocialProof)
  '/lovable-uploads/f35f65b6-a18b-454c-bc6c-0deebc8ed6e6.png', // Logo Heatzy (SocialProof)
  '/lovable-uploads/19a648da-ac53-4b71-8daf-746987878455.png', // Logo pour cookie banner
];

// Images importantes mais non-critiques (lazy load avec priorité)
const importantImages = [
  '/lovable-uploads/9e3dc511-3aec-4dc9-840f-187ab8de7235.png', // Interface SupplyOS (LogisticsPerformanceSection)
  '/lovable-uploads/486a69e8-fb37-4b81-92e0-79dc5d772590.png', // Carte mondiale (LogisticsFeatureSection)
];

// Polices critiques
const criticalFonts = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Ressources critiques pour le LCP (Largest Contentful Paint)
const criticalStyles = [
  '/src/index.css'
];

export const CriticalResourcePreloader = () => {
  useEffect(() => {
    // Preload critical images avec priorité élevée
    criticalImages.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'image';
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });

    // Preload important images avec priorité normale (lazy load optimisé)
    setTimeout(() => {
      importantImages.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = resource;
        link.as = 'image';
        document.head.appendChild(link);
      });
    }, 1000); // Attendre 1 seconde avant de prefetch les images secondaires

    // Preload critical fonts
    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font;
      link.as = 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload critical CSS
    criticalStyles.forEach(style => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = style;
      link.as = 'style';
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const preconnectDomains = [
      'https://js.hsforms.net',
      'https://js.hubspot.com',
      'https://js-eu1.hs-scripts.com',
      'https://js-eu1.hsforms.net',
      'https://js-eu1.hs-analytics.net',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      if (domain.includes('gstatic') || domain.includes('fonts')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // DNS prefetch pour les domaines moins critiques
    const dnsPrefetchDomains = [
      'https://cdn.gpteng.co',
      'https://static.hsappstatic.net'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Prefetch des routes importantes
    const importantRoutes = [
      '/services',
      '/contact'
    ];

    // Attendre 2 secondes avant de prefetch les routes (pas urgent)
    setTimeout(() => {
      importantRoutes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    }, 2000);

  }, []);

  return null;
};