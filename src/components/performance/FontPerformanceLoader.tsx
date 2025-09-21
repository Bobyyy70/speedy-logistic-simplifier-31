import React, { useEffect } from 'react';
import { useFontOptimization } from '@/lib/font-optimization';

interface FontPerformanceLoaderProps {
  children: React.ReactNode;
  strategy?: 'critical' | 'deferred' | 'auto';
}

/**
 * Component to optimize font loading based on performance strategy
 */
export const FontPerformanceLoader: React.FC<FontPerformanceLoaderProps> = ({ 
  children, 
  strategy = 'auto' 
}) => {
  const { preloadCriticalFonts, loadFontsOnIdle } = useFontOptimization();

  useEffect(() => {
    switch (strategy) {
      case 'critical':
        // Load fonts immediately for critical content
        preloadCriticalFonts();
        break;
      
      case 'deferred':
        // Load fonts when browser is idle
        loadFontsOnIdle();
        break;
      
      case 'auto':
      default:
        // Smart loading based on content position
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                preloadCriticalFonts();
                observer.disconnect();
              }
            });
          },
          { rootMargin: '100px' }
        );

        const element = document.querySelector('.font-performance-loader');
        if (element) {
          observer.observe(element);
        }

        return () => observer.disconnect();
    }
  }, [strategy, preloadCriticalFonts, loadFontsOnIdle]);

  return (
    <div className="font-performance-loader">
      {children}
    </div>
  );
};