import { useCallback, useRef } from 'react';

interface ThrottledParallaxOptions {
  intensity?: number;
  fps?: number;
}

export const useThrottledParallax = ({
  intensity = 8, // Reduced intensity for better performance
  fps = 30 // Reduced FPS for better TBT
}: ThrottledParallaxOptions = {}) => {
  const lastTimeRef = useRef<number>(0);
  const intervalRef = useRef<number>(1000 / fps);
  
  const throttledParallax = useCallback((element: HTMLElement | null) => {
    if (!element) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      
      // Throttle to desired FPS
      if (now - lastTimeRef.current < intervalRef.current) {
        return;
      }
      
      lastTimeRef.current = now;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX / innerWidth - 0.5) * intensity;
      const moveY = (clientY / innerHeight - 0.5) * intensity;
      
      // Use transform3d for GPU acceleration with will-change
      element.style.willChange = 'transform';
      element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    return handleMouseMove;
  }, [intensity]);

  return throttledParallax;
};