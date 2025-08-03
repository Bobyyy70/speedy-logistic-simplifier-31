import React, { useEffect, useState } from 'react';

// Interface pour les métriques Web Vitals
interface WebVitalsMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

// Interface pour les informations de performance
interface PerformanceInfo {
  webVitals: WebVitalsMetrics;
  deviceInfo: {
    type: 'mobile' | 'tablet' | 'desktop';
    connection: 'slow' | 'fast' | 'unknown';
    memory?: number;
    cores?: number;
  };
  optimizations: {
    webpSupport: boolean;
    avifSupport: boolean;
    intersectionObserver: boolean;
    reducedMotion: boolean;
  };
  loadingStats: {
    imagesLoaded: number;
    imagesLazy: number;
    chunksLoaded: string[];
  };
}

// Hook pour détecter le type d'appareil
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceType('mobile');
      else if (width < 1024) setDeviceType('tablet');
      else setDeviceType('desktop');
    };

    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  return deviceType;
};

// Hook pour détecter la vitesse de connexion
const useConnectionSpeed = () => {
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast' | 'unknown'>('unknown');

  useEffect(() => {
    // @ts-ignore - navigator.connection n'est pas standard
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const updateConnectionSpeed = () => {
        const effectiveType = connection.effectiveType;
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          setConnectionSpeed('slow');
        } else if (effectiveType === '3g' || effectiveType === '4g') {
          setConnectionSpeed('fast');
        }
      };

      updateConnectionSpeed();
      connection.addEventListener('change', updateConnectionSpeed);
      return () => connection.removeEventListener('change', updateConnectionSpeed);
    }
  }, []);

  return connectionSpeed;
};

// Hook pour détecter le support des formats d'image
const useImageFormatSupport = () => {
  const [support, setSupport] = useState({ webp: false, avif: false });

  useEffect(() => {
    // Test WebP
    const testWebP = () => {
      return new Promise<boolean>((resolve) => {
        const webP = new Image();
        webP.onload = webP.onerror = () => resolve(webP.height === 2);
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      });
    };

    // Test AVIF
    const testAVIF = () => {
      return new Promise<boolean>((resolve) => {
        const avif = new Image();
        avif.onload = () => resolve(true);
        avif.onerror = () => resolve(false);
        avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAQAAAAEAAAAQcGl4aQAAAAADCAgIAAAAFWF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcAAAAAAOYXY0QwAAAABhdwAKAAAAAAAYaXRlbQAAAABhaWRjAQAAAAEAAAABAAAAGWlkYXQBAgAKAAAAAAAYaXRlbQAAAABidGlkAQAAAAEAAAABAAAAOGlkYXQBAgAUAAAAAAAXaXRlbQAAAABtZGF0AQAAAAEAAAABAAAAJmltZGF0YWlmAQAAAAEAAAABAAAAAQ==';
      });
    };

    Promise.all([testWebP(), testAVIF()]).then(([webpSupport, avifSupport]) => {
      setSupport({ webp: webpSupport, avif: avifSupport });
    });
  }, []);

  return support;
};

// Hook pour collecter les Web Vitals
const useWebVitals = () => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});

  useEffect(() => {
    // Fonction pour mesurer LCP
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
      }
    };

    // Fonction pour mesurer FCP
    const measureFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        observer.observe({ type: 'paint', buffered: true });
      }
    };

    // Fonction pour mesurer CLS
    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // @ts-ignore - types PerformanceEntry incomplètes
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          }
        });
        observer.observe({ type: 'layout-shift', buffered: true });
      }
    };

    measureLCP();
    measureFCP();
    measureCLS();
  }, []);

  return metrics;
};

// Composant de monitoring des performances (dev uniquement)
export const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceInfo, setPerformanceInfo] = useState<PerformanceInfo | null>(null);
  
  const deviceType = useDeviceType();
  const connectionSpeed = useConnectionSpeed();
  const imageSupport = useImageFormatSupport();
  const webVitals = useWebVitals();

  // Seulement en développement
  const isDev = process.env.NODE_ENV === 'development';

  useEffect(() => {
    if (!isDev) return;

    const collectPerformanceInfo = () => {
      // @ts-ignore - navigator.hardwareConcurrency peut ne pas être disponible
      const cores = navigator.hardwareConcurrency || 'unknown';
      // @ts-ignore - navigator.deviceMemory peut ne pas être disponible
      const memory = navigator.deviceMemory || 'unknown';

      const info: PerformanceInfo = {
        webVitals,
        deviceInfo: {
          type: deviceType,
          connection: connectionSpeed,
          memory: typeof memory === 'number' ? memory : undefined,
          cores: typeof cores === 'number' ? cores : undefined,
        },
        optimizations: {
          webpSupport: imageSupport.webp,
          avifSupport: imageSupport.avif,
          intersectionObserver: 'IntersectionObserver' in window,
          reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        },
        loadingStats: {
          imagesLoaded: document.querySelectorAll('img[src]').length,
          imagesLazy: document.querySelectorAll('img[loading="lazy"]').length,
          chunksLoaded: [], // À implémenter si besoin
        }
      };

      setPerformanceInfo(info);
    };

    // Collecter les infos après un délai pour permettre le chargement
    const timer = setTimeout(collectPerformanceInfo, 2000);
    return () => clearTimeout(timer);
  }, [isDev, deviceType, connectionSpeed, imageSupport, webVitals]);

  // Raccourci clavier pour afficher/masquer (Ctrl+Shift+P)
  useEffect(() => {
    if (!isDev) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isDev]);

  if (!isDev || !isVisible || !performanceInfo) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 9999,
        maxWidth: '400px',
        maxHeight: '80vh',
        overflow: 'auto',
        border: '1px solid #333'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '14px' }}>🔍 Performance Monitor</h3>
        <button 
          onClick={() => setIsVisible(false)}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'white', 
            cursor: 'pointer',
            fontSize: '16px',
            padding: '0'
          }}
        >
          ✕
        </button>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <strong>📊 Web Vitals:</strong>
        <div style={{ marginLeft: '8px' }}>
          {performanceInfo.webVitals.lcp && (
            <div>LCP: {Math.round(performanceInfo.webVitals.lcp)}ms 
              <span style={{ color: performanceInfo.webVitals.lcp < 2500 ? '#4ade80' : '#f87171' }}>
                {performanceInfo.webVitals.lcp < 2500 ? ' ✓' : ' ⚠'}
              </span>
            </div>
          )}
          {performanceInfo.webVitals.fcp && (
            <div>FCP: {Math.round(performanceInfo.webVitals.fcp)}ms</div>
          )}
          {performanceInfo.webVitals.cls !== undefined && (
            <div>CLS: {performanceInfo.webVitals.cls.toFixed(3)}
              <span style={{ color: performanceInfo.webVitals.cls < 0.1 ? '#4ade80' : '#f87171' }}>
                {performanceInfo.webVitals.cls < 0.1 ? ' ✓' : ' ⚠'}
              </span>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <strong>📱 Device Info:</strong>
        <div style={{ marginLeft: '8px' }}>
          <div>Type: {performanceInfo.deviceInfo.type}</div>
          <div>Connection: {performanceInfo.deviceInfo.connection}</div>
          {performanceInfo.deviceInfo.memory && <div>Memory: {performanceInfo.deviceInfo.memory}GB</div>}
          {performanceInfo.deviceInfo.cores && <div>Cores: {performanceInfo.deviceInfo.cores}</div>}
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <strong>⚡ Optimizations:</strong>
        <div style={{ marginLeft: '8px' }}>
          <div>WebP: {performanceInfo.optimizations.webpSupport ? '✓' : '✗'}</div>
          <div>AVIF: {performanceInfo.optimizations.avifSupport ? '✓' : '✗'}</div>
          <div>IntersectionObserver: {performanceInfo.optimizations.intersectionObserver ? '✓' : '✗'}</div>
          <div>Reduced Motion: {performanceInfo.optimizations.reducedMotion ? '✓' : '✗'}</div>
        </div>
      </div>

      <div>
        <strong>🖼️ Images:</strong>
        <div style={{ marginLeft: '8px' }}>
          <div>Loaded: {performanceInfo.loadingStats.imagesLoaded}</div>
          <div>Lazy: {performanceInfo.loadingStats.imagesLazy}</div>
        </div>
      </div>

      <div style={{ marginTop: '12px', fontSize: '10px', opacity: 0.7 }}>
        Raccourci: Ctrl+Shift+P
      </div>
    </div>
  );
};

export default PerformanceMonitor;