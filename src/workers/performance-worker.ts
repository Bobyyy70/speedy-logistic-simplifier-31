// Enhanced Web Worker for heavy computations and parallel processing

interface WorkerMessage {
  type: 'CALCULATE_PARALLAX' | 'OPTIMIZE_IMAGES' | 'PROCESS_ANIMATIONS' | 'BATCH_CALCULATIONS';
  data: any;
  requestId: string;
  priority?: 'low' | 'medium' | 'high';
}

interface WorkerResponse {
  type: string;
  result: any;
  requestId: string;
  executionTime: number;
}

class PerformanceWorker {
  private taskQueue: Map<string, WorkerMessage> = new Map();
  private isProcessing = false;
  private performanceMetrics = {
    tasksProcessed: 0,
    averageExecutionTime: 0,
    totalExecutionTime: 0,
  };

  constructor() {
    self.onmessage = this.handleMessage.bind(this);
  }

  private handleMessage(event: MessageEvent<WorkerMessage>) {
    const { type, data, requestId, priority = 'medium' } = event.data;
    
    // Add to queue with priority
    this.taskQueue.set(requestId, event.data);
    
    if (!this.isProcessing) {
      this.processQueue();
    }
  }

  private async processQueue() {
    this.isProcessing = true;
    
    // Sort tasks by priority
    const sortedTasks = Array.from(this.taskQueue.values()).sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority || 'medium'] - priorityOrder[a.priority || 'medium'];
    });

    for (const task of sortedTasks) {
      await this.processTask(task);
      this.taskQueue.delete(task.requestId);
    }
    
    this.isProcessing = false;
  }

  private async processTask(task: WorkerMessage) {
    const startTime = performance.now();
    let result: any;

    try {
      switch (task.type) {
        case 'CALCULATE_PARALLAX':
          result = this.calculateParallax(task.data);
          break;
        case 'OPTIMIZE_IMAGES':
          result = this.optimizeImageData(task.data);
          break;
        case 'PROCESS_ANIMATIONS':
          result = this.processAnimations(task.data);
          break;
        case 'BATCH_CALCULATIONS':
          result = await this.batchCalculations(task.data);
          break;
        default:
          throw new Error(`Unknown task type: ${task.type}`);
      }

      const executionTime = performance.now() - startTime;
      this.updateMetrics(executionTime);

      const response: WorkerResponse = {
        type: `${task.type}_RESULT`,
        result,
        requestId: task.requestId,
        executionTime,
      };

      self.postMessage(response);

    } catch (error) {
      self.postMessage({
        type: 'ERROR',
        result: { error: error.message },
        requestId: task.requestId,
        executionTime: performance.now() - startTime,
      });
    }
  }

  private calculateParallax(data: any) {
    const {
      clientX = 0,
      clientY = 0,
      innerWidth = 1920,
      innerHeight = 1080,
      intensity = 15,
      elements = []
    } = data;

    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    
    const normalizedX = (clientX - centerX) / centerX;
    const normalizedY = (clientY - centerY) / centerY;

    return elements.map((element: any, index: number) => {
      const layerIntensity = intensity * (element.depth || 1) * (1 + index * 0.1);
      const moveX = normalizedX * layerIntensity;
      const moveY = normalizedY * layerIntensity;
      
      return {
        id: element.id,
        transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
        opacity: element.fadeWithMovement ? Math.max(0.7, 1 - Math.abs(normalizedX) * 0.3) : 1,
      };
    });
  }

  private optimizeImageData(data: any) {
    const { imageData, quality = 0.8, format = 'webp' } = data;
    
    // Simulate image optimization calculations
    // In a real implementation, this would handle image compression algorithms
    const optimizedSize = Math.round(imageData.originalSize * quality);
    const compressionRatio = ((imageData.originalSize - optimizedSize) / imageData.originalSize * 100);
    
    return {
      originalSize: imageData.originalSize,
      optimizedSize,
      compressionRatio,
      format,
      quality,
      estimatedLoadTime: optimizedSize / 1024 / 100, // Rough estimation in seconds
    };
  }

  private processAnimations(data: any) {
    const { animations, fps = 60, duration = 1000 } = data;
    const frameCount = Math.round((duration / 1000) * fps);
    const frameInterval = duration / frameCount;
    
    const processedAnimations = animations.map((animation: any) => {
      const frames = [];
      
      for (let i = 0; i <= frameCount; i++) {
        const progress = i / frameCount;
        const easedProgress = this.easeInOutCubic(progress);
        
        const frame = {
          time: i * frameInterval,
          values: this.interpolateValues(animation.from, animation.to, easedProgress),
          transform: this.generateTransform(animation, easedProgress),
        };
        
        frames.push(frame);
      }
      
      return {
        id: animation.id,
        frames,
        totalDuration: duration,
        frameCount,
      };
    });

    return processedAnimations;
  }

  private async batchCalculations(data: any) {
    const { calculations, batchSize = 10 } = data;
    const results = [];
    
    // Process in batches to avoid blocking
    for (let i = 0; i < calculations.length; i += batchSize) {
      const batch = calculations.slice(i, i + batchSize);
      const batchResults = batch.map((calc: any) => this.processCalculation(calc));
      results.push(...batchResults);
      
      // Yield control occasionally
      if (i % (batchSize * 2) === 0) {
        await new Promise(resolve => setTimeout(resolve, 0));
      }
    }
    
    return results;
  }

  private processCalculation(calculation: any): any {
    switch (calculation.type) {
      case 'price':
        return this.calculatePrice(calculation.data);
      case 'volumetric':
        return this.calculateVolumetricWeight(calculation.data);
      case 'shipping':
        return this.calculateShipping(calculation.data);
      default:
        return null;
    }
  }

  private calculatePrice(data: any) {
    const { weight, zipCode, service } = data;
    
    const basePrices = [
      { min: 0, max: 2, price: 6.50 },
      { min: 2, max: 5, price: 8.90 },
      { min: 5, max: 10, price: 12.50 },
      { min: 10, max: 20, price: 18.90 },
      { min: 20, max: 50, price: 35.00 },
      { min: 50, max: Infinity, price: 89.00 }
    ];
    
    const tier = basePrices.find(t => weight >= t.min && weight < t.max);
    if (!tier) return null;
    
    let finalPrice = tier.price;
    
    // Apply zipcode multiplier
    if (zipCode) {
      const zip = parseInt(zipCode);
      if (zip >= 75000 && zip <= 75020) finalPrice *= 1.0;
      else if (zip >= 69000 && zip <= 69009) finalPrice *= 1.1;
      else if (zip >= 13000 && zip <= 13016) finalPrice *= 1.15;
      else if (zip >= 97000) finalPrice *= 1.5;
      else finalPrice *= 1.05;
    }
    
    // Apply service multiplier
    const serviceMultipliers = {
      express: 1.8,
      priority: 1.4,
      economy: 0.9,
      standard: 1.0
    };
    finalPrice *= serviceMultipliers[service as keyof typeof serviceMultipliers] || 1.0;
    
    return Math.round(finalPrice * 100) / 100;
  }

  private calculateVolumetricWeight(data: any) {
    const { length, width, height } = data;
    return (length * width * height) / 5000;
  }

  private calculateShipping(data: any) {
    const { weight, distance, service } = data;
    const baseRate = 2.5;
    const distanceMultiplier = Math.log(distance + 1) * 0.1;
    return Math.round((baseRate + distanceMultiplier) * weight * 100) / 100;
  }

  // Utility functions
  private easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  private interpolateValues(from: any, to: any, progress: number) {
    if (typeof from === 'number' && typeof to === 'number') {
      return from + (to - from) * progress;
    }
    
    if (Array.isArray(from) && Array.isArray(to)) {
      return from.map((val, index) => 
        val + (to[index] - val) * progress
      );
    }
    
    return progress > 0.5 ? to : from;
  }

  private generateTransform(animation: any, progress: number) {
    const transforms = [];
    
    if (animation.translateX) {
      const x = this.interpolateValues(0, animation.translateX, progress);
      transforms.push(`translateX(${x}px)`);
    }
    
    if (animation.translateY) {
      const y = this.interpolateValues(0, animation.translateY, progress);
      transforms.push(`translateY(${y}px)`);
    }
    
    if (animation.scale) {
      const scale = this.interpolateValues(1, animation.scale, progress);
      transforms.push(`scale(${scale})`);
    }
    
    if (animation.rotate) {
      const rotate = this.interpolateValues(0, animation.rotate, progress);
      transforms.push(`rotate(${rotate}deg)`);
    }
    
    return transforms.join(' ');
  }

  private updateMetrics(executionTime: number) {
    this.performanceMetrics.tasksProcessed++;
    this.performanceMetrics.totalExecutionTime += executionTime;
    this.performanceMetrics.averageExecutionTime = 
      this.performanceMetrics.totalExecutionTime / this.performanceMetrics.tasksProcessed;
    
    // Report metrics periodically
    if (this.performanceMetrics.tasksProcessed % 100 === 0) {
      self.postMessage({
        type: 'PERFORMANCE_METRICS',
        result: { ...this.performanceMetrics },
        requestId: 'metrics',
        executionTime: 0,
      });
    }
  }
}

// Initialize worker
new PerformanceWorker();

export {};