import { useEffect } from 'react';

/**
 * Optimizes main-thread work by scheduling heavy operations during idle time
 */
export const MainThreadOptimizer = () => {
  useEffect(() => {
    // Schedule non-critical tasks using different strategies
    const scheduleWork = (task: () => void, priority: 'high' | 'normal' | 'low' = 'normal') => {
      const delays = { high: 100, normal: 1000, low: 3000 };
      const delay = delays[priority];

      if ('scheduler' in window && 'postTask' in (window as any).scheduler) {
        // Use modern Scheduler API when available
        (window as any).scheduler.postTask(task, { 
          priority: priority === 'high' ? 'user-blocking' : 'background',
          delay 
        });
      } else if ('requestIdleCallback' in window) {
        // Fallback to requestIdleCallback
        (window as any).requestIdleCallback(() => {
          setTimeout(task, delay);
        }, { timeout: delay + 2000 });
      } else {
        // Final fallback to setTimeout
        setTimeout(task, delay * 2);
      }
    };

    // Precompile critical CSS selectors to reduce style calculation time
    scheduleWork(() => {
      const criticalSelectors = [
        '.container',
        '.grid',
        '.flex',
        '.text-fluid-3xl',
        '.text-fluid-4xl',
        '.bg-white',
        '.rounded-2xl',
        '.shadow-xl'
      ];
      
      // Force browser to parse and cache these selectors
      criticalSelectors.forEach(selector => {
        try {
          document.querySelector(selector);
        } catch (e) {
          // Selector parsing error - skip
        }
      });
    }, 'high');

    // Preload critical fonts to avoid layout shifts
    scheduleWork(() => {
      const criticalFonts = [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont'
      ];
      
      // Create temporary elements to trigger font loading
      criticalFonts.forEach(font => {
        const div = document.createElement('div');
        div.style.fontFamily = font;
        div.style.visibility = 'hidden';
        div.style.position = 'absolute';
        div.textContent = 'Font preload test';
        document.body.appendChild(div);
        
        // Clean up after font is loaded
        setTimeout(() => {
          if (div.parentNode) {
            div.parentNode.removeChild(div);
          }
        }, 100);
      });
    }, 'high');

    // Optimize image decoding by preparing decode operations
    scheduleWork(() => {
      const images = document.querySelectorAll('img[loading="eager"]');
      images.forEach((img) => {
        if (img instanceof HTMLImageElement && img.decode) {
          img.decode().catch(() => {
            // Image decode failed - ignore
          });
        }
      });
    }, 'normal');

    // Prefetch DNS for external resources
    scheduleWork(() => {
      const domains = [
        'https://js.hsforms.net',
        'https://js.hubspot.com',
        'https://static.hsappstatic.net'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    }, 'low');

    // Initialize performance observer for main thread monitoring
    scheduleWork(() => {
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const longTasks = entries.filter(entry => entry.duration > 50);
            
            if (longTasks.length > 0) {
              // Log long tasks for debugging (only in dev)
              if (import.meta.env.DEV) {
                console.warn(`Found ${longTasks.length} long tasks:`, longTasks);
              }
            }
          });
          
          observer.observe({ entryTypes: ['longtask'] });
          
          // Clean up observer after 30 seconds
          setTimeout(() => observer.disconnect(), 30000);
        } catch (e) {
          // PerformanceObserver not supported or failed
        }
      }
    }, 'low');

  }, []);

  return null;
};