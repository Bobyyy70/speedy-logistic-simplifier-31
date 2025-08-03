import { useCallback, useEffect, useRef } from 'react';

interface UseWebWorkerParallaxOptions {
  intensity?: number;
  fps?: number;
  enabled?: boolean;
}

export const useWebWorkerParallax = ({
  intensity = 15,
  fps = 30, // Reduced for better TBT
  enabled = true
}: UseWebWorkerParallaxOptions = {}) => {
  const workerRef = useRef<Worker>();
  const elementRef = useRef<HTMLElement>();
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!enabled || typeof Worker === 'undefined') return;

    // Create worker from blob to avoid separate file loading
    const workerBlob = new Blob([
      `
      let lastTime = 0;
      let fps = ${fps};
      let interval = 1000 / fps;

      self.onmessage = function(event) {
        const { type, data } = event.data;
        
        if (type === 'UPDATE') {
          const now = performance.now();
          
          if (now - lastTime < interval) return;
          
          lastTime = now;
          
          const {
            clientX = 0,
            clientY = 0,
            innerWidth = 1920,
            innerHeight = 1080,
            intensity = ${intensity}
          } = data || {};

          const moveX = (clientX / innerWidth - 0.5) * intensity;
          const moveY = (clientY / innerHeight - 0.5) * intensity;
          
          self.postMessage({
            type: 'PARALLAX_UPDATE',
            transform: \`translate3d(\${moveX}px, \${moveY}px, 0)\`,
            timestamp: now
          });
        }
      };
      `
    ], { type: 'application/javascript' });

    const workerUrl = URL.createObjectURL(workerBlob);
    workerRef.current = new Worker(workerUrl);

    workerRef.current.onmessage = (event) => {
      const { type, transform } = event.data;
      
      if (type === 'PARALLAX_UPDATE' && elementRef.current) {
        elementRef.current.style.transform = transform;
      }
    };

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
        URL.revokeObjectURL(workerUrl);
      }
    };
  }, [enabled, intensity, fps]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!workerRef.current || !enabled) return;

    workerRef.current.postMessage({
      type: 'UPDATE',
      data: {
        clientX: event.clientX,
        clientY: event.clientY,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        intensity
      }
    });
  }, [enabled, intensity]);

  const attachParallax = useCallback((element: HTMLElement | null) => {
    if (!element || !enabled) return;

    elementRef.current = element;

    // Add throttled mouse move listener
    let ticking = false;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleMouseMove(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('mousemove', throttledMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [enabled, handleMouseMove]);

  return { attachParallax };
};