import { useCallback, useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from './use-intersection-observer';

interface PerformanceMotionOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  reducedMotion?: boolean;
}

export const usePerformanceMotion = (options: PerformanceMotionOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true,
    delay = 0,
    reducedMotion = true
  } = options;

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Check for reduced motion preference
  const prefersReducedMotion = reducedMotion && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const { elementRef, shouldAnimate: intersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce
  });

  useEffect(() => {
    setIsVisible(intersecting);
    
    if (intersecting && !prefersReducedMotion) {
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          setShouldAnimate(true);
        }, delay);
      } else {
        setShouldAnimate(true);
      }
    } else if (prefersReducedMotion) {
      // Immediately show without animation for reduced motion
      setShouldAnimate(true);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [intersecting, delay, prefersReducedMotion]);

  const startAnimation = useCallback(() => {
    if (!prefersReducedMotion) {
      setShouldAnimate(true);
    }
  }, [prefersReducedMotion]);

  return {
    elementRef,
    shouldAnimate,
    isVisible,
    prefersReducedMotion,
    startAnimation
  };
};

// Performance monitoring for animations
export const useAnimationPerformance = () => {
  const frameCountRef = useRef(0);
  const startTimeRef = useRef(0);
  const [fps, setFps] = useState(60);

  const measureFPS = useCallback(() => {
    const measure = () => {
      frameCountRef.current++;
      const now = performance.now();
      
      if (now - startTimeRef.current >= 1000) {
        const currentFPS = Math.round((frameCountRef.current * 1000) / (now - startTimeRef.current));
        setFps(currentFPS);
        frameCountRef.current = 0;
        startTimeRef.current = now;
      }
      
      requestAnimationFrame(measure);
    };
    
    startTimeRef.current = performance.now();
    requestAnimationFrame(measure);
  }, []);

  useEffect(() => {
    measureFPS();
  }, [measureFPS]);

  return {
    fps,
    isPerformant: fps >= 55 // Consider 55+ FPS as performant
  };
};