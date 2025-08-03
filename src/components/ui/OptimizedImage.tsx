
import React, { useState, useRef, useEffect } from 'react';

// Hook simple pour l'intersection observer
const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options.threshold, options.rootMargin]);

  return isIntersecting;
};

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '100vw',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Intersection observer pour le lazy loading
  const isIntersecting = useIntersectionObserver(imgRef, {
    threshold: 0.1,
    rootMargin: '50px',
  });

  // Génération des sources WebP et fallback
  const generateSources = (originalSrc: string) => {
    const basePath = originalSrc.replace(/\.[^/.]+$/, '');
    const extension = originalSrc.split('.').pop();
    
    return {
      webp: `${basePath}.webp`,
      original: originalSrc,
      fallback: extension === 'png' ? originalSrc : `${basePath}.png`
    };
  };

  const sources = generateSources(src);

  useEffect(() => {
    // Pour les images prioritaires, chargement immédiat
    if (priority || isIntersecting) {
      setCurrentSrc(src);
    }
  }, [src, priority, isIntersecting]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    
    // Fallback vers PNG si WebP échoue
    if (img.src.includes('.webp')) {
      img.src = sources.fallback;
    } else {
      handleError();
    }
  };

  // Placeholder pendant le chargement
  const PlaceholderDiv = () => (
    <div 
      className={`bg-gray-200 animate-pulse ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : 'auto',
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
      aria-label={`Chargement de ${alt}`}
    />
  );

  // Si pas encore dans le viewport et pas prioritaire
  if (!priority && !isIntersecting) {
    return <PlaceholderDiv />;
  }

  // Si pas de src définie
  if (!currentSrc) {
    return <PlaceholderDiv />;
  }

  return (
    <picture>
      {/* Source WebP pour les navigateurs compatibles */}
      <source srcSet={sources.webp} type="image/webp" />
      
      {/* Fallback pour les navigateurs non compatibles */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleImageError}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
      
      {/* Placeholder visible pendant le chargement */}
      {!isLoaded && !hasError && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          aria-hidden="true"
        />
      )}
      
      {/* Message d'erreur si échec de chargement */}
      {hasError && (
        <div 
          className={`flex items-center justify-center bg-gray-100 text-gray-500 text-sm ${className}`}
          style={{ 
            width: width ? `${width}px` : '100%', 
            height: height ? `${height}px` : '200px'
          }}
        >
          Image non disponible
        </div>
      )}
    </picture>
  );
};
