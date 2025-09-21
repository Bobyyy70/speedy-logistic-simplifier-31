import { useState, useEffect, useCallback } from 'react';

export interface EnhancedMobileConfig {
  isMobile: boolean;
  isSmallMobile: boolean;
  isTablet: boolean;
  touchSupported: boolean;
  screenWidth: number;
  screenHeight: number;
  orientation: 'portrait' | 'landscape';
  pixelRatio: number;
  
  // Responsive design utilities
  gridCols: {
    default: string;
    sm: string;
    md: string;
    lg: string;
  };
  
  // Touch-optimized sizing
  touchTarget: string;
  buttonSize: string;
  inputSize: string;
  spacing: string;
  
  // Typography scaling
  typography: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    heading: string;
  };
}

export function useEnhancedMobile(): EnhancedMobileConfig {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  const [screenHeight, setScreenHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 768
  );
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    typeof window !== 'undefined' && window.innerWidth < window.innerHeight ? 'portrait' : 'landscape'
  );

  const updateScreenInfo = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    setOrientation(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape');
  }, []);

  useEffect(() => {
    updateScreenInfo();
    
    const handleResize = () => {
      updateScreenInfo();
    };

    const handleOrientationChange = () => {
      // Delay to ensure dimensions are updated
      setTimeout(updateScreenInfo, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleOrientationChange, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [updateScreenInfo]);

  // Device detection
  const isMobile = screenWidth < 768;
  const isSmallMobile = screenWidth < 640;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const touchSupported = typeof window !== 'undefined' && 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const pixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  // Responsive grid configurations
  const gridCols = {
    default: 'grid-cols-1',
    sm: isSmallMobile ? 'sm:grid-cols-1' : 'sm:grid-cols-2',
    md: 'md:grid-cols-2',
    lg: 'lg:grid-cols-3',
  };

  // Touch-optimized sizing based on device
  const touchTarget = isSmallMobile ? 'min-h-[48px] min-w-[48px]' : 'min-h-[44px] min-w-[44px]';
  const buttonSize = isMobile ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm';
  const inputSize = isMobile ? 'px-4 py-3 text-base' : 'px-3 py-2 text-sm';
  const spacing = isMobile ? 'space-y-4' : 'space-y-3';

  // Responsive typography
  const typography = {
    xs: 'text-fluid-xs',
    sm: 'text-fluid-sm', 
    base: 'text-fluid-base',
    lg: 'text-fluid-lg',
    xl: 'text-fluid-xl',
    heading: isMobile ? 'text-fluid-2xl' : 'text-fluid-xl',
  };

  return {
    isMobile,
    isSmallMobile,
    isTablet,
    touchSupported,
    screenWidth,
    screenHeight,
    orientation,
    pixelRatio,
    gridCols,
    touchTarget,
    buttonSize,
    inputSize,
    spacing,
    typography,
  };
}

// Utility hook for responsive classes
export function useResponsiveClasses() {
  const mobile = useEnhancedMobile();
  
  return {
    container: 'mobile-container',
    section: 'mobile-section-padding',
    card: 'mobile-card',
    button: `mobile-touch-target ${mobile.buttonSize}`,
    input: `mobile-form-field ${mobile.inputSize}`,
    grid: mobile.gridCols,
    text: mobile.typography,
    spacing: mobile.spacing,
  };
}