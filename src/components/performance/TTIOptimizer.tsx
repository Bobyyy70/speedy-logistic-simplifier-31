import { useEffect } from 'react';

/**
 * Component that helps optimize Time to Interactive by deferring non-critical tasks
 */
export const TTIOptimizer = () => {
  useEffect(() => {
    // Schedule non-critical tasks for after TTI
    const scheduleAfterTTI = (callback: () => void, delay = 0) => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          setTimeout(callback, delay);
        }, { timeout: 5000 });
      } else {
        setTimeout(callback, Math.max(3000, delay));
      }
    };

    // Defer heavy polyfills and non-critical features
    scheduleAfterTTI(() => {
      // Preload non-critical chunks
      if (import.meta.env.PROD) {
        const nonCriticalChunks = [
          '/assets/framer-motion',
          '/assets/world-map-animations',
          '/assets/performance-monitoring'
        ];

        nonCriticalChunks.forEach(chunk => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = chunk;
          document.head.appendChild(link);
        });
      }
    }, 1000);

    // Optimize font loading strategy
    scheduleAfterTTI(() => {
      const fonts = document.querySelectorAll('link[rel="preload"][as="font"]');
      fonts.forEach(font => {
        if (font instanceof HTMLLinkElement) {
          font.rel = 'stylesheet';
        }
      });
    }, 500);

    // Initialize performance monitoring after TTI
    scheduleAfterTTI(() => {
      import('@/hooks/use-performance-monitor').then(({ usePerformanceMonitor }) => {
        // Performance monitoring setup can happen after TTI
      });
    }, 2000);

  }, []);

  return null;
};