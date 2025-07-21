import { useState, useEffect } from 'react';

export interface MobileOptimizationConfig {
  isMobile: boolean;
  touchTargetSize: string;
  spacing: string;
  fontSize: string;
  buttonPadding: string;
}

export function useMobileOptimization(): MobileOptimizationConfig {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return {
    isMobile,
    touchTargetSize: isMobile ? 'min-h-[48px] min-w-[48px]' : 'min-h-[40px]',
    spacing: isMobile ? 'mobile-spacing-y' : '',
    fontSize: isMobile ? 'text-base' : 'text-sm',
    buttonPadding: isMobile ? 'px-6 py-4' : 'px-4 py-2',
  };
}