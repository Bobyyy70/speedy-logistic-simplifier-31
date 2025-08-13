import React, { useState, useCallback } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { validateAltText } from "@/lib/alt-text-utils";

interface PerformanceOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

export const PerformanceOptimizedImage: React.FC<PerformanceOptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const { elementRef, shouldAnimate } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '200px' // Load images 200px before they come into view
  });

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  const shouldLoad = priority || shouldAnimate;

  // Dev-only alt text validation
  if (import.meta.env.DEV) {
    try {
      const res = validateAltText(alt);
      if (!res.isValid) {
        console.warn(`[SEO] Image alt à améliorer: "${alt}"`, res.issues, res.suggestions);
      }
    } catch {}
  }


  return (
    <div ref={elementRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden="true"
        />
      )}
      
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 will-change-auto ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${hasError ? 'bg-gray-200' : ''} ${className}`}
          style={{
            transform: 'translate3d(0, 0, 0)' // Force GPU acceleration
          }}
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
          Image unavailable
        </div>
      )}
    </div>
  );
};