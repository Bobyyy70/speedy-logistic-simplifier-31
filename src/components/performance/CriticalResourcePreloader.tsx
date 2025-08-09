import { useEffect } from 'react';

const criticalResources = [
  '/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png' // Header logo - critical for early paint
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
      'https://js.hubspot.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};