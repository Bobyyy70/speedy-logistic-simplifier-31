import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface PerformanceAlert {
  type: 'warning' | 'error';
  metric: string;
  value: number;
  threshold: number;
  message: string;
}

export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);

  useEffect(() => {
    // Observer pour LCP (Largest Contentful Paint)
    const observeLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        
        if (lastEntry.startTime > 2500) {
          setAlerts(prev => [...prev, {
            type: 'warning',
            metric: 'LCP',
            value: lastEntry.startTime,
            threshold: 2500,
            message: 'LCP dépasse le seuil recommandé de 2,5s'
          }]);
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      return observer;
    };

    // Observer pour FID (First Input Delay)
    const observeFID = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          
          if (entry.processingStart - entry.startTime > 100) {
            setAlerts(prev => [...prev, {
              type: 'error',
              metric: 'FID',
              value: entry.processingStart - entry.startTime,
              threshold: 100,
              message: 'FID dépasse le seuil critique de 100ms'
            }]);
          }
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      return observer;
    };

    // Observer pour CLS (Cumulative Layout Shift)
    const observeCLS = () => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
            
            if (clsValue > 0.1) {
              setAlerts(prev => [...prev, {
                type: 'warning',
                metric: 'CLS',
                value: clsValue,
                threshold: 0.1,
                message: 'CLS dépasse le seuil recommandé de 0,1'
              }]);
            }
          }
        });
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      return observer;
    };

    // Mesurer FCP et TTFB via Navigation Timing API
    const measureNavigationTiming = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navigationEntries.length > 0) {
          const nav = navigationEntries[0];
          
          // TTFB (Time to First Byte)
          const ttfb = nav.responseStart - nav.requestStart;
          setMetrics(prev => ({ ...prev, ttfb }));
          
          // FCP via Paint Timing API
          const paintEntries = performance.getEntriesByType('paint');
          const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        }
      }
    };

    const observers: PerformanceObserver[] = [];
    
    // Initialiser les observers
    try {
      observers.push(observeLCP());
      observers.push(observeFID());
      observers.push(observeCLS());
      measureNavigationTiming();
    } catch (error) {
      console.warn('Performance monitoring non supporté:', error);
    }

    // Nettoyage
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const getPerformanceScore = (): number => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 25;
    if (metrics.cls && metrics.cls > 0.1) score -= 15;
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  };

  const clearAlerts = () => setAlerts([]);

  return {
    metrics,
    alerts,
    performanceScore: getPerformanceScore(),
    clearAlerts,
  };
};