import { useRef, useEffect, useCallback } from 'react';

interface AnimationOptions {
  fps?: number;
  pauseOnInvisible?: boolean;
}

export function useOptimizedAnimation(
  callback: (timestamp: number) => void,
  options: AnimationOptions = {}
) {
  const { fps = 60, pauseOnInvisible = true } = options;
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const intervalRef = useRef<number>(1000 / fps);
  const isVisibleRef = useRef<boolean>(true);
  const observerRef = useRef<IntersectionObserver>();
  const elementRef = useRef<HTMLElement>();

  const animate = useCallback((timestamp: number) => {
    if (pauseOnInvisible && !isVisibleRef.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    if (timestamp - lastTimeRef.current >= intervalRef.current) {
      callback(timestamp);
      lastTimeRef.current = timestamp;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [callback, pauseOnInvisible]);

  const start = useCallback(() => {
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  const stop = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
  }, []);

  const setElement = useCallback((element: HTMLElement | null) => {
    if (!element || !pauseOnInvisible) return;

    elementRef.current = element;
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(element);
  }, [pauseOnInvisible]);

  useEffect(() => {
    return () => {
      stop();
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [stop]);

  return { start, stop, setElement };
}