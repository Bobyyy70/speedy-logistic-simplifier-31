import { useState, useEffect, useCallback } from 'react';

interface PerformanceSettings {
  reduceAnimations: boolean;
  disableParallax: boolean;
  disableInteractivity: boolean;
  enableGPUAcceleration: boolean;
}

export function usePerformanceOptimization() {
  const [settings, setSettings] = useState<PerformanceSettings>({
    reduceAnimations: false,
    disableParallax: false,
    disableInteractivity: false,
    enableGPUAcceleration: true,
  });

  const [isLowPerformanceDevice, setIsLowPerformanceDevice] = useState(false);

  // Detect device performance
  useEffect(() => {
    const detectPerformance = () => {
      // Check for mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Check for low-end devices
      const isLowEnd = navigator.hardwareConcurrency <= 4 || 
                      (navigator as any).deviceMemory <= 4 ||
                      window.innerWidth < 768;

      const shouldReduceAnimations = isMobile || isLowEnd;
      
      setIsLowPerformanceDevice(shouldReduceAnimations);
      setSettings(prev => ({
        ...prev,
        reduceAnimations: shouldReduceAnimations,
        disableParallax: shouldReduceAnimations,
        disableInteractivity: shouldReduceAnimations,
      }));
    };

    detectPerformance();
  }, []);

  // Throttled requestAnimationFrame
  const throttledRaf = useCallback((callback: () => void) => {
    let ticking = false;
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          callback();
          ticking = false;
        });
        ticking = true;
      }
    };
  }, []);

  // Throttled event handler
  const throttle = useCallback((func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  return {
    settings,
    isLowPerformanceDevice,
    throttledRaf,
    throttle,
  };
}