import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  lazy?: boolean;
  priority?: 'high' | 'low' | 'auto';
  sizes?: string;
  quality?: 'high' | 'medium' | 'low';
  onLoad?: () => void;
  onError?: () => void;
}

// Hook pour détecter le support des formats d'images modernes
const useImageFormatSupport = () => {
  const [support, setSupport] = useState({
    webp: false,
    avif: false,
    loading: true
  });

  useEffect(() => {
    const checkWebPSupport = () => {
      return new Promise<boolean>((resolve) => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          resolve(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      });
    };

    const checkAVIFSupport = () => {
      return new Promise<boolean>((resolve) => {
        const avif = new Image();
        avif.onload = avif.onerror = () => {
          resolve(avif.height === 2);
        };
        avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
      });
    };

    Promise.all([checkWebPSupport(), checkAVIFSupport()]).then(([webp, avif]) => {
      setSupport({ webp, avif, loading: false });
    });
  }, []);

  return support;
};

// Fonction pour générer les sources optimisées
const generateOptimizedSources = (originalSrc: string, quality: 'high' | 'medium' | 'low' = 'medium') => {
  // Extraire le nom de fichier sans extension
  const pathParts = originalSrc.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const baseName = fileName.split('.')[0];
  const directory = pathParts.slice(0, -1).join('/');
  
  const qualitySuffix = quality !== 'medium' ? `_${quality}` : '';
  
  return {
    avif: `${directory}/optimized/${baseName}${qualitySuffix}.avif`,
    webp: `${directory}/optimized/${baseName}${qualitySuffix}.webp`,
    jpg: `${directory}/optimized/${baseName}${qualitySuffix}.jpg`,
    original: originalSrc
  };
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  lazy = true,
  priority = 'auto',
  sizes,
  quality = 'medium',
  onLoad,
  onError,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const imgRef = useRef<HTMLImageElement>(null);
  const { webp, avif, loading } = useImageFormatSupport();

  // Intersection Observer pour le lazy loading
  useEffect(() => {
    if (!lazy || isInView) return;

    const element = imgRef.current;
    if (!element) return;

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
  }, [lazy, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Ne pas rendre l'image si les formats ne sont pas encore détectés
  if (loading) {
    return (
      <div 
        className={cn("bg-gray-200 animate-pulse flex items-center justify-center", className)}
        {...props}
      >
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
      </div>
    );
  }

  const sources = generateOptimizedSources(src, quality);
  const shouldLoad = isInView || !lazy;

  if (!shouldLoad) {
    return (
      <div 
        ref={imgRef}
        className={cn("bg-gray-200 animate-pulse flex items-center justify-center", className)}
        {...props}
      >
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
      </div>
    );
  }

  return (
    <picture>
      {/* AVIF - Meilleure compression */}
      {avif && (
        <source 
          srcSet={sources.avif} 
          type="image/avif"
          sizes={sizes}
        />
      )}
      
      {/* WebP - Bon compromise */}
      {webp && (
        <source 
          srcSet={sources.webp} 
          type="image/webp"
          sizes={sizes}
        />
      )}
      
      {/* JPEG optimisé - Fallback moderne */}
      <source 
        srcSet={sources.jpg} 
        type="image/jpeg"
        sizes={sizes}
      />
      
      {/* Image fallback */}
      <img
        ref={imgRef}
        src={hasError && fallbackSrc ? fallbackSrc : sources.original}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazy ? 'lazy' : 'eager'}
        fetchPriority={priority}
        sizes={sizes}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </picture>
  );
};

// Composant pour les images de fond optimisées
export const OptimizedBackgroundImage: React.FC<{
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  quality?: 'high' | 'medium' | 'low';
  lazy?: boolean;
}> = ({ src, alt, children, className, quality = 'medium', lazy = true }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const elementRef = useRef<HTMLDivElement>(null);
  const { webp, avif } = useImageFormatSupport();

  useEffect(() => {
    if (!lazy || isInView) return;

    const element = elementRef.current;
    if (!element) return;

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
  }, [lazy, isInView]);

  useEffect(() => {
    if (!isInView) return;

    const sources = generateOptimizedSources(src, quality);
    let imageToLoad = sources.original;

    // Choisir le meilleur format supporté
    if (avif) {
      imageToLoad = sources.avif;
    } else if (webp) {
      imageToLoad = sources.webp;
    } else {
      imageToLoad = sources.jpg;
    }

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = imageToLoad;
  }, [isInView, src, quality, avif, webp]);

  const sources = generateOptimizedSources(src, quality);
  let backgroundImage = 'none';

  if (isLoaded) {
    if (avif) {
      backgroundImage = `url(${sources.avif})`;
    } else if (webp) {
      backgroundImage = `url(${sources.webp})`;
    } else {
      backgroundImage = `url(${sources.jpg})`;
    }
  }

  return (
    <div
      ref={elementRef}
      className={cn("relative", className)}
      style={{
        backgroundImage,
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

export default OptimizedImage;