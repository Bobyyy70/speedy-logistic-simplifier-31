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
      'https://unpkg.com' // For dotted-map and other CDN resources
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Prefetch critical chunks
    const criticalChunks = [
      '/src/components/ui/world-map/useDottedMap.ts',
      '/src/hooks/use-performance-monitor.ts'
    ];

    criticalChunks.forEach(chunk => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = chunk;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};