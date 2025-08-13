import { useEffect, useRef, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fps: number;
  memory: number;
  isPerformant: boolean;
  networkSpeed: 'slow' | 'medium' | 'fast';
  isLowEndDevice: boolean;
}

interface PerformanceMonitorOptions {
  fpsThreshold?: number;
  memoryThreshold?: number;
  reportInterval?: number;
  startOnIdle?: boolean;
  idleTimeout?: number;
}

export const usePerformanceMonitor = ({
  fpsThreshold = 50,
  memoryThreshold = 100, // MB
  reportInterval = 5000, // 5 seconds
  startOnIdle = false,
  idleTimeout = 1200,
}: PerformanceMonitorOptions = {}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: 0,
    isPerformant: true,
    networkSpeed: 'fast',
    isLowEndDevice: false,
  });

  const frameTimeRef = useRef<number[]>([]);
  const lastTimeRef = useRef(performance.now());
  const rafIdRef = useRef<number>();

  // FPS measurement
  const measureFPS = useCallback(() => {
    const now = performance.now();
    const delta = now - lastTimeRef.current;
    
    frameTimeRef.current.push(delta);
    
    // Keep only last 60 frame measurements
    if (frameTimeRef.current.length > 60) {
      frameTimeRef.current.shift();
    }
    
    lastTimeRef.current = now;
    rafIdRef.current = requestAnimationFrame(measureFPS);
  }, []);

  // Memory measurement
  const measureMemory = useCallback(async () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
    }
    
    // Fallback: estimate memory usage
    if ('measureUserAgentSpecificMemory' in performance) {
      try {
        const estimate = await (performance as any).measureUserAgentSpecificMemory();
        return Math.round(estimate.bytes / 1024 / 1024);
      } catch {
        return 0;
      }
    }
    
    return 0;
  }, []);

  // Network speed detection
  const detectNetworkSpeed = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        const effectiveType = connection.effectiveType;
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          return 'slow';
        }
        if (effectiveType === '3g') {
          return 'medium';
        }
        return 'fast';
      }
    }
    return 'fast';
  }, []);

  // Device capability detection
  const detectDeviceCapability = useCallback(() => {
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const deviceMemory = (navigator as any).deviceMemory || 4;
    
    // Consider low-end if less than 4 cores or less than 4GB RAM
    return hardwareConcurrency < 4 || deviceMemory < 4;
  }, []);

  // Calculate performance metrics
  const calculateMetrics = useCallback(async () => {
    // Calculate FPS
    let fps = 60;
    if (frameTimeRef.current.length > 10) {
      const avgFrameTime = frameTimeRef.current.reduce((a, b) => a + b, 0) / frameTimeRef.current.length;
      fps = Math.round(1000 / avgFrameTime);
    }

    // Get memory usage
    const memory = await measureMemory();

    // Determine if performance is good
    const isPerformant = fps >= fpsThreshold && memory <= memoryThreshold;

    setMetrics({
      fps: Math.min(fps, 60), // Cap at 60 FPS
      memory,
      isPerformant,
      networkSpeed: detectNetworkSpeed(),
      isLowEndDevice: detectDeviceCapability(),
    });
  }, [fpsThreshold, memoryThreshold, measureMemory, detectNetworkSpeed, detectDeviceCapability]);

  // Start monitoring (optionally deferred until idle)
  useEffect(() => {
    let interval: any;
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      rafIdRef.current = requestAnimationFrame(measureFPS);
      interval = setInterval(calculateMetrics, reportInterval);
      calculateMetrics();
    };

    if (startOnIdle) {
      const w = window as any;
      if (typeof w.requestIdleCallback === 'function') {
        const idleId = w.requestIdleCallback(start, { timeout: idleTimeout });
        return () => {
          if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
          if (interval) clearInterval(interval);
          if (typeof w.cancelIdleCallback === 'function') {
            try { w.cancelIdleCallback(idleId); } catch {}
          }
        };
      } else {
        const t = setTimeout(start, idleTimeout);
        return () => {
          if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
          if (interval) clearInterval(interval);
          clearTimeout(t);
        };
      }
    } else {
      start();
      return () => {
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        if (interval) clearInterval(interval);
      };
    }
  }, [measureFPS, calculateMetrics, reportInterval, startOnIdle, idleTimeout]);

  // Performance-based configuration suggestions
  const getOptimizedConfig = useCallback(() => {
    const { fps, isLowEndDevice, networkSpeed } = metrics;
    
    return {
      // Animation settings
      shouldUseAnimations: fps >= 45 && !isLowEndDevice,
      animationDuration: fps < 30 ? 0.1 : fps < 45 ? 0.2 : 0.3,
      maxConcurrentAnimations: isLowEndDevice ? 2 : fps < 30 ? 3 : 5,
      
      // Image loading strategy
      imageQuality: networkSpeed === 'slow' ? 60 : networkSpeed === 'medium' ? 75 : 85,
      shouldPreloadImages: networkSpeed === 'fast' && !isLowEndDevice,
      lazyLoadingThreshold: networkSpeed === 'slow' ? '200px' : '100px',
      
      // JavaScript execution
      shouldUseWebWorkers: !isLowEndDevice,
      chunkLoadingStrategy: networkSpeed === 'slow' ? 'minimal' : 'aggressive',
      
      // Rendering optimizations
      useGPUAcceleration: fps >= 30,
      renderingPriority: isLowEndDevice ? 'performance' : 'quality',
    };
  }, [metrics]);

  return {
    metrics,
    getOptimizedConfig,
    isMonitoring: Boolean(rafIdRef.current),
  };
};

// Hook for adaptive loading based on performance
export const useAdaptiveLoading = () => {
  const { metrics, getOptimizedConfig } = usePerformanceMonitor();
  
  const shouldLoadComponent = useCallback((priority: 'low' | 'medium' | 'high' = 'medium') => {
    const config = getOptimizedConfig();
    
    if (priority === 'high') return true;
    if (priority === 'low' && metrics.isLowEndDevice) return false;
    
    return metrics.isPerformant;
  }, [metrics, getOptimizedConfig]);

  const getLoadingStrategy = useCallback(() => {
    const config = getOptimizedConfig();
    
    return {
      imageStrategy: config.shouldPreloadImages ? 'eager' : 'lazy',
      animationStrategy: config.shouldUseAnimations ? 'full' : 'reduced',
      chunkStrategy: config.chunkLoadingStrategy,
    };
  }, [getOptimizedConfig]);

  return {
    shouldLoadComponent,
    getLoadingStrategy,
    metrics,
    isLowEnd: metrics.isLowEndDevice,
    isSlowNetwork: metrics.networkSpeed === 'slow',
  };
};
