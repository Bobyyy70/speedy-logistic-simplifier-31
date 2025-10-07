import { useEffect } from 'react';

const criticalResources = [
  '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png', // Header logo - critical for early paint
  // Add other above-fold images here
];

export const CriticalResourcePreloader = () => {
  useEffect(() => {
    // Preload critical resources
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'image';
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const preconnectDomains = [
      'https://js.hsforms.net',
      'https://js.hubspot.com',
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Prefetch critical chunks - only preload built modules in production.
    if (import.meta.env.PROD) {
      const criticalChunks = [
        // Replace these with real build output paths as needed
        '/assets/world-map.dotted.js',
        '/assets/perf-monitor.js'
      ];

      criticalChunks.forEach(chunk => {
        const link = document.createElement('link');
        link.rel = 'modulepreload';
        link.href = chunk;
        document.head.appendChild(link);
      });
    } else {
      // In dev, avoid preloading source TS paths which lead to 404 during dev builds
    }
  }, []);

  return null;
};