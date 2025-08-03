// Web Worker for parallax calculations to reduce main thread blocking

interface ParallaxMessage {
  type: 'INIT' | 'UPDATE' | 'THROTTLE';
  data?: {
    clientX?: number;
    clientY?: number;
    innerWidth?: number;
    innerHeight?: number;
    intensity?: number;
    fps?: number;
  };
}

class ParallaxWorker {
  private lastTime = 0;
  private fps = 30; // Reduced from 60fps for better TBT
  private interval = 1000 / this.fps;

  constructor() {
    self.onmessage = this.handleMessage.bind(this);
  }

  private handleMessage(event: MessageEvent<ParallaxMessage>) {
    const { type, data } = event.data;

    switch (type) {
      case 'INIT':
        if (data?.fps) {
          this.fps = data.fps;
          this.interval = 1000 / this.fps;
        }
        break;

      case 'UPDATE':
        this.calculateParallax(data);
        break;

      case 'THROTTLE':
        if (data?.fps) {
          this.fps = data.fps;
          this.interval = 1000 / this.fps;
        }
        break;
    }
  }

  private calculateParallax(data: any) {
    const now = performance.now();
    
    // Throttle calculations
    if (now - this.lastTime < this.interval) {
      return;
    }

    this.lastTime = now;

    const {
      clientX = 0,
      clientY = 0,
      innerWidth = 1920,
      innerHeight = 1080,
      intensity = 15
    } = data || {};

    // Calculate parallax values
    const moveX = (clientX / innerWidth - 0.5) * intensity;
    const moveY = (clientY / innerHeight - 0.5) * intensity;

    // Use transform3d for GPU acceleration
    const transform = `translate3d(${moveX}px, ${moveY}px, 0)`;

    // Send result back to main thread
    self.postMessage({
      type: 'PARALLAX_UPDATE',
      transform,
      timestamp: now
    });
  }
}

// Initialize worker
new ParallaxWorker();

export {};