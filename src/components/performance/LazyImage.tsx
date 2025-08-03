import { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  placeholder?: string;
  threshold?: number;
  rootMargin?: string;
  priority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(({
  src,
  alt,
  fallbackSrc,
  placeholder,
  threshold = 0.1,
  rootMargin = '50px',
  priority = 'auto',
  loading = 'lazy',
  onLoad,
  onError,
  className,
  ...props
}, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer pour détecter quand l'image entre dans la vue
  useEffect(() => {
    const element = imgRef.current;
    if (!element || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, loading]);

  // Gestion du chargement de l'image
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Détermine la source à utiliser
  const imageSrc = hasError && fallbackSrc ? fallbackSrc : src;
  const shouldLoad = isInView || loading === 'eager';

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      {/* Image placeholder/skeleton */}
      {!isLoaded && shouldLoad && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ backgroundImage: placeholder ? `url(${placeholder})` : undefined }}
        >
          {!placeholder && (
            <svg
              className="w-10 h-10 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      )}

      {/* Image réelle */}
      <img
        ref={(node) => {
          imgRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        src={shouldLoad ? imageSrc : undefined}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        fetchPriority={priority}
        className={cn(
          "transition-opacity duration-300 w-full h-full object-cover",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{
          ...(shouldLoad ? {} : { visibility: 'hidden' }),
        }}
      />
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Hook pour détecter la connection lente
export const useSlowConnection = () => {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // @ts-ignore - Navigator.connection n'est pas encore standard
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const checkConnection = () => {
        // Connexion lente si effectiveType est '2g' ou 'slow-2g'
        const slowTypes = ['slow-2g', '2g'];
        setIsSlowConnection(slowTypes.includes(connection.effectiveType));
      };

      checkConnection();
      connection.addEventListener('change', checkConnection);

      return () => {
        connection.removeEventListener('change', checkConnection);
      };
    }

    // Fallback: détecter via le temps de chargement d'une petite image
    const testImage = new Image();
    const startTime = performance.now();
    
    testImage.onload = () => {
      const loadTime = performance.now() - startTime;
      // Si le chargement d'une image de 1x1 pixel prend plus de 100ms, considérer comme lent
      setIsSlowConnection(loadTime > 100);
    };
    
    testImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  }, []);

  return isSlowConnection;
};

// Composant optimisé pour les images de fond
export const LazyBackgroundImage: React.FC<{
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  loading?: 'lazy' | 'eager';
}> = ({ src, alt, children, className, loading = 'lazy' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [loading]);

  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;
  }, [isInView, src]);

  return (
    <div
      ref={elementRef}
      className={cn("relative", className)}
      style={{
        backgroundImage: isLoaded ? `url(${src})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      role="img"
      aria-label={alt}
    >
      {/* Placeholder gradient */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
      
      {children}
    </div>
  );
};