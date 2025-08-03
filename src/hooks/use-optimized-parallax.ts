import { useCallback, useEffect, useRef } from 'react';
import { useEnhancedWebWorker } from './use-enhanced-web-worker';
import { usePerformanceMonitor } from './use-performance-monitor';

interface ParallaxElement {
  element: HTMLElement;
  intensity: number;
  depth?: number;
}

interface UseOptimizedParallaxOptions {
  elements: ParallaxElement[];
  enabled?: boolean;
  throttleFPS?: number;
}

export const useOptimizedParallax = ({
  elements,
  enabled = true,
  throttleFPS = 30
}: UseOptimizedParallaxOptions) => {
  const lastFrameTime = useRef(0);
  const frameInterval = useRef(1000 / throttleFPS);
  const isProcessing = useRef(false);
  
  const { calculateParallax, isReady } = useEnhancedWebWorker();
  const { metrics } = usePerformanceMonitor();

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!enabled || isProcessing.current || metrics.isLowEndDevice) return;

    const now = performance.now();
    if (now - lastFrameTime.current < frameInterval.current) return;
    
    lastFrameTime.current = now;
    isProcessing.current = true;

    // Prepare data for worker
    const parallaxData = {
      clientX: event.clientX,
      clientY: event.clientY,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      elements: elements.map((item, index) => ({
        id: index,
        depth: item.depth || 1,
        intensity: item.intensity
      }))
    };

    // Use worker if available, otherwise fallback to main thread
    if (isReady && !metrics.isLowEndDevice) {
      calculateParallax(parallaxData, 'high')
        .then((results: any[]) => {
          // Apply transforms
          results.forEach((result, index) => {
            if (elements[index]) {
              elements[index].element.style.transform = result.transform;
              if (result.opacity !== undefined) {
                elements[index].element.style.opacity = result.opacity.toString();
              }
            }
          });
        })
        .catch(() => {
          // Fallback to simplified calculation
          fallbackParallax(parallaxData);
        })
        .finally(() => {
          isProcessing.current = false;
        });
    } else {
      // Direct main thread fallback
      fallbackParallax(parallaxData);
      isProcessing.current = false;
    }
  }, [enabled, elements, calculateParallax, isReady, metrics.isLowEndDevice]);

  const fallbackParallax = useCallback((data: any) => {
    const { clientX, clientY, innerWidth, innerHeight } = data;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    
    const normalizedX = (clientX - centerX) / centerX;
    const normalizedY = (clientY - centerY) / centerY;

    elements.forEach((item, index) => {
      const intensity = item.intensity * (item.depth || 1);
      const moveX = normalizedX * intensity;
      const moveY = normalizedY * intensity;
      
      item.element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  }, [elements]);

  const attachParallax = useCallback(() => {
    if (!enabled || metrics.isLowEndDevice) return;

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, enabled, metrics.isLowEndDevice]);

  const updateFPS = useCallback((newFPS: number) => {
    frameInterval.current = 1000 / newFPS;
  }, []);

  // Auto-adjust FPS based on performance
  useEffect(() => {
    if (metrics.fps < 45) {
      updateFPS(20); // Reduce to 20fps if performance is poor
    } else if (metrics.fps < 55) {
      updateFPS(30); // Standard 30fps
    } else {
      updateFPS(60); // Full 60fps for high-performance devices
    }
  }, [metrics.fps, updateFPS]);

  return {
    attachParallax,
    updateFPS,
    isProcessing: isProcessing.current,
    isOptimized: isReady && !metrics.isLowEndDevice,
    performanceMetrics: metrics
  };
};