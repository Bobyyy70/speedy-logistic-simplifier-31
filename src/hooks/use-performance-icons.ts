import { useEffect, useState } from 'react';
import { useIconPreloader } from '@/components/ui/OptimizedIcon';

/**
 * Hook for managing icon loading performance
 */
export const usePerformanceIcons = () => {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  // Detect device capabilities
  useEffect(() => {
    const detectDeviceCapabilities = () => {
      // Check for performance indicators
      const navigator = window.navigator as any;
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      
      const isSlowNetwork = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' ||
        connection.saveData
      );

      const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      const isLowEndCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

      setIsLowEndDevice(isSlowNetwork || isLowMemory || isLowEndCPU);
    };

    detectDeviceCapabilities();

    // Listen for connection changes
    const navigator = window.navigator as any;
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      connection.addEventListener('change', detectDeviceCapabilities);
      return () => connection.removeEventListener('change', detectDeviceCapabilities);
    }
  }, []);

  return { isLowEndDevice };
};

/**
 * Hook for preloading icons based on page context
 */
export const usePageIconPreloader = (page: string) => {
  // Define icon sets per page for efficient preloading
  const pageIconSets: Record<string, string[]> = {
    home: [
      'ArrowRight', 'Package', 'Truck', 'Clock', 'FileText', 
      'Users', 'ShieldCheck', 'ChevronRight', 'CheckCircle'
    ],
    contact: [
      'Mail', 'Phone', 'MapPin', 'Calendar', 'MessageCircle',
      'User', 'Building', 'Globe', 'Send', 'ArrowLeft'
    ],
    services: [
      'Package', 'Truck', 'CheckCircle2', 'ArrowRight',
      'Warehouse', 'ClipboardList', 'Shield'
    ],
    pricing: [
      'PackageCheck', 'Building', 'Undo2', 'Recycle', 
      'FileText', 'HandCoins', 'Truck', 'Check'
    ],
    about: [
      'Target', 'Star', 'MapPin', 'History', 'Truck',
      'Quote', 'Award', 'ChevronRight', 'HandHeart'
    ]
  };

  // Get icons for current page
  const pageIcons = pageIconSets[page] || [];

  // Preload page-specific icons
  useIconPreloader(pageIcons);

  return { pageIcons };
};

/**
 * Hook for critical icon management
 */
export const useCriticalIcons = () => {
  const [criticalIconsLoaded, setCriticalIconsLoaded] = useState(false);

  useEffect(() => {
    const loadCriticalIcons = async () => {
      try {
        const { preloadCriticalIcons } = await import('@/components/ui/OptimizedIcon');
        await preloadCriticalIcons();
        setCriticalIconsLoaded(true);
      } catch (error) {
        console.warn('Failed to preload critical icons:', error);
      }
    };

    // Load critical icons with slight delay to not block initial render
    const timeoutId = setTimeout(loadCriticalIcons, 50);
    return () => clearTimeout(timeoutId);
  }, []);

  return { criticalIconsLoaded };
};