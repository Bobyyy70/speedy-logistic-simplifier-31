import { useCallback, useEffect, useRef, useState } from 'react';
import { useAdaptiveLoading } from './use-performance-monitor';

interface WorkerTask {
  id: string;
  type: string;
  data: any;
  priority: 'low' | 'medium' | 'high';
  timeout?: number;
}

interface WorkerResponse {
  id: string;
  type: string;
  result: any;
  error?: string;
  executionTime: number;
}

interface UseEnhancedWebWorkerOptions {
  maxConcurrentTasks?: number;
  taskTimeout?: number;
  workerPath?: string;
  fallbackEnabled?: boolean;
}

export const useEnhancedWebWorker = ({
  maxConcurrentTasks = 3,
  taskTimeout = 10000,
  workerPath = '/src/workers/performance-worker.ts',
  fallbackEnabled = true
}: UseEnhancedWebWorkerOptions = {}) => {
  const workerRef = useRef<Worker | null>(null);
  const taskQueueRef = useRef<Map<string, WorkerTask>>(new Map());
  const activeTasks = useRef<Map<string, NodeJS.Timeout>>(new Map());
  const callbacksRef = useRef<Map<string, {
    resolve: (result: any) => void;
    reject: (error: Error) => void;
  }>>(new Map());
  
  const [isWorkerReady, setIsWorkerReady] = useState(false);
  const [workerStats, setWorkerStats] = useState({
    tasksCompleted: 0,
    tasksErrored: 0,
    averageExecutionTime: 0,
    isOverloaded: false
  });

  const { isLowEnd, metrics } = useAdaptiveLoading();

  // Initialize worker
  useEffect(() => {
    if (typeof Worker === 'undefined' || isLowEnd) {
      console.log('Web Workers not supported or low-end device detected');
      return;
    }

    try {
      // Create worker from blob to avoid path issues
      const workerBlob = new Blob([
        `importScripts('${window.location.origin}${workerPath}');`
      ], { type: 'application/javascript' });
      
      const workerUrl = URL.createObjectURL(workerBlob);
      workerRef.current = new Worker(workerUrl);

      workerRef.current.onmessage = handleWorkerMessage;
      workerRef.current.onerror = handleWorkerError;
      
      setIsWorkerReady(true);

      return () => {
        if (workerRef.current) {
          workerRef.current.terminate();
          URL.revokeObjectURL(workerUrl);
        }
      };
    } catch (error) {
      console.error('Failed to initialize worker:', error);
      if (fallbackEnabled) {
        console.log('Falling back to main thread processing');
      }
    }
  }, [workerPath, isLowEnd, fallbackEnabled]);

  const handleWorkerMessage = useCallback((event: MessageEvent<WorkerResponse>) => {
    const { id, type, result, error, executionTime } = event.data;
    
    // Clear timeout
    const timeout = activeTasks.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      activeTasks.current.delete(id);
    }

    // Update stats
    setWorkerStats(prev => ({
      ...prev,
      tasksCompleted: prev.tasksCompleted + 1,
      averageExecutionTime: (prev.averageExecutionTime + executionTime) / 2,
      isOverloaded: activeTasks.current.size > maxConcurrentTasks
    }));

    // Resolve callback
    const callbacks = callbacksRef.current.get(id);
    if (callbacks) {
      if (error) {
        callbacks.reject(new Error(error));
      } else {
        callbacks.resolve(result);
      }
      callbacksRef.current.delete(id);
    }

    // Process next task in queue
    processNextTask();
  }, [maxConcurrentTasks]);

  const handleWorkerError = useCallback((error: ErrorEvent) => {
    console.error('Worker error:', error);
    setWorkerStats(prev => ({
      ...prev,
      tasksErrored: prev.tasksErrored + 1
    }));
  }, []);

  const processNextTask = useCallback(() => {
    if (activeTasks.current.size >= maxConcurrentTasks) {
      return;
    }

    // Get highest priority task from queue
    const tasks = Array.from(taskQueueRef.current.values());
    if (tasks.length === 0) return;

    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const nextTask = tasks.sort((a, b) => 
      priorityOrder[b.priority] - priorityOrder[a.priority]
    )[0];

    if (nextTask && workerRef.current && isWorkerReady) {
      // Remove from queue
      taskQueueRef.current.delete(nextTask.id);
      
      // Add to active tasks with timeout
      const timeout = setTimeout(() => {
        const callbacks = callbacksRef.current.get(nextTask.id);
        if (callbacks) {
          callbacks.reject(new Error(`Task ${nextTask.id} timed out`));
          callbacksRef.current.delete(nextTask.id);
        }
        activeTasks.current.delete(nextTask.id);
        processNextTask();
      }, nextTask.timeout || taskTimeout);
      
      activeTasks.current.set(nextTask.id, timeout);
      
      // Send to worker
      workerRef.current.postMessage({
        type: nextTask.type,
        data: nextTask.data,
        requestId: nextTask.id,
        priority: nextTask.priority
      });
    }
  }, [maxConcurrentTasks, taskTimeout, isWorkerReady]);

  const executeTask = useCallback(<T = any>(
    type: string,
    data: any,
    priority: 'low' | 'medium' | 'high' = 'medium',
    timeout?: number
  ): Promise<T> => {
    return new Promise((resolve, reject) => {
      const taskId = `${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Check if we should use fallback
      if (!isWorkerReady || isLowEnd || !workerRef.current) {
        if (fallbackEnabled) {
          // Execute on main thread as fallback
        try {
          const result = executeOnMainThread(type, data) as T;
          resolve(result);
        } catch (error) {
          reject(error as Error);
        }
        } else {
          reject(new Error('Worker not available and fallback disabled'));
        }
        return;
      }

      const task: WorkerTask = {
        id: taskId,
        type,
        data,
        priority,
        timeout
      };

      // Store callbacks
      callbacksRef.current.set(taskId, { resolve, reject });

      // Add to queue
      taskQueueRef.current.set(taskId, task);

      // Process immediately if possible
      processNextTask();
    });
  }, [isWorkerReady, isLowEnd, fallbackEnabled, processNextTask]);

  // Fallback functions for main thread execution
  const executeOnMainThread = useCallback((type: string, data: any) => {
    switch (type) {
      case 'CALCULATE_PARALLAX':
        return calculateParallaxMainThread(data);
      case 'CALCULATE_PRICE':
        return calculatePriceMainThread(data);
      case 'CALCULATE_VOLUMETRIC':
        return calculateVolumetricMainThread(data);
      default:
        throw new Error(`Unknown task type: ${type}`);
    }
  }, []);

  // Main thread fallback implementations
  const calculateParallaxMainThread = (data: any) => {
    const { clientX = 0, clientY = 0, innerWidth = 1920, innerHeight = 1080, intensity = 15 } = data;
    const moveX = (clientX / innerWidth - 0.5) * intensity;
    const moveY = (clientY / innerHeight - 0.5) * intensity;
    return { transform: `translate3d(${moveX}px, ${moveY}px, 0)` };
  };

  const calculatePriceMainThread = (data: any) => {
    const { weight } = data;
    const basePrice = weight <= 2 ? 6.50 : 8.90;
    return { price: basePrice, breakdown: { finalPrice: basePrice } };
  };

  const calculateVolumetricMainThread = (data: any) => {
    const { length, width, height } = data;
    return (length * width * height) / 5000;
  };

  // Convenience methods for common tasks
  const calculateParallax = useCallback((data: any, priority: 'low' | 'medium' | 'high' = 'high') => {
    return executeTask('CALCULATE_PARALLAX', data, priority, 100); // Fast timeout for parallax
  }, [executeTask]);

  const calculatePrice = useCallback((data: any, priority: 'low' | 'medium' | 'high' = 'medium') => {
    return executeTask('CALCULATE_PRICE', data, priority);
  }, [executeTask]);

  const calculateVolumetric = useCallback((data: any, priority: 'low' | 'medium' | 'high' = 'low') => {
    return executeTask('CALCULATE_VOLUMETRIC', data, priority);
  }, [executeTask]);

  const clearQueue = useCallback(() => {
    taskQueueRef.current.clear();
    
    // Clear all timeouts
    activeTasks.current.forEach(timeout => clearTimeout(timeout));
    activeTasks.current.clear();
    
    // Reject all pending callbacks
    callbacksRef.current.forEach(({ reject }) => {
      reject(new Error('Queue cleared'));
    });
    callbacksRef.current.clear();
  }, []);

  return {
    // Task execution
    executeTask,
    calculateParallax,
    calculatePrice,
    calculateVolumetric,
    
    // Queue management
    clearQueue,
    queueSize: taskQueueRef.current.size,
    activeTasks: activeTasks.current.size,
    
    // Status
    isReady: isWorkerReady,
    isLowEndDevice: isLowEnd,
    stats: workerStats,
    
    // Performance metrics
    performanceMetrics: metrics,
  };
};