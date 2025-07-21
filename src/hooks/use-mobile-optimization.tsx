
import { useState, useEffect } from 'react';

export interface MobileOptimizationConfig {
  isMobile: boolean;
  touchTargetSize: string;
  spacing: string;
  fontSize: string;
  buttonPadding: string;
  inputPadding: string;
  textSizes: {
    small: string;
    base: string;
    large: string;
    heading: string;
  };
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
    touchTargetSize: isMobile ? 'min-h-[48px] min-w-[48px]' : 'min-h-[40px] min-w-[40px]',
    spacing: isMobile ? 'space-y-4' : 'space-y-3',
    fontSize: isMobile ? 'text-base' : 'text-sm',
    buttonPadding: isMobile ? 'px-6 py-3' : 'px-4 py-2',
    inputPadding: isMobile ? 'px-4 py-3' : 'px-3 py-2',
    textSizes: {
      small: isMobile ? 'text-sm' : 'text-xs',
      base: isMobile ? 'text-base' : 'text-sm',
      large: isMobile ? 'text-lg' : 'text-base',
      heading: isMobile ? 'text-xl' : 'text-lg',
    },
  };
}
