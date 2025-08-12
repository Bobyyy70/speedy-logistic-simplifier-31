import React, { useState, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useAdaptiveLoading } from "@/hooks/use-performance-monitor";
import { cn } from "@/lib/utils";
import { validateAltText } from "@/lib/alt-text-utils";

interface OptimizedImageProps {
  src: string; // Base path without extension for optimized loading
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  webpSrc?: string;
  avifSrc?: string;
  placeholder?: string;
  loading?: "lazy" | "eager";
  aspectRatio?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  quality = 85,
  webpSrc,
  avifSrc,
  placeholder,
  loading = "lazy",
  aspectRatio
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Performance-aware loading
  const { getLoadingStrategy, isLowEnd, isSlowNetwork } = useAdaptiveLoading();
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: isLowEnd ? 0.2 : 0.1,
    rootMargin: isSlowNetwork ? "200px" : "50px",
  });

  const loadingStrategy = getLoadingStrategy();
  const shouldLoad = priority || isIntersecting;
  
  // Generate optimized image sources
  const optimizedWebpSrc = webpSrc || `${src}.webp`;
  const optimizedAvifSrc = avifSrc || `${src}.avif`;
  const fallbackSrc = `${src}.jpg`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Determine final image source with fallbacks
  const finalSrc = imageError ? (placeholder || "/placeholder.svg") : fallbackSrc;

  // Dev-only alt text validation
  if (import.meta.env.DEV) {
    try {
      const res = validateAltText(alt);
      if (!res.isValid) {
        console.warn(`[SEO] Image alt à améliorer: "${alt}"`, res.issues, res.suggestions);
      }
    } catch {}
  }
  
  // Calculate computed aspect ratio
  const computedAspectRatio = aspectRatio || (width && height ? `${width}/${height}` : undefined);

  return (
    <div 
      ref={elementRef}
      className={cn("relative overflow-hidden", className)}
      style={{ 
        aspectRatio: computedAspectRatio,
        willChange: shouldLoad ? 'transform' : 'auto'
      }}
    >
      {/* Loading skeleton with performance considerations */}
      {!imageLoaded && shouldLoad && (
        <div 
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            isLowEnd ? "bg-muted" : "bg-muted animate-pulse"
          )}
          style={{ aspectRatio: computedAspectRatio }}
        >
          {!isLowEnd && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
      )}

      {/* Placeholder when not in viewport */}
      {!shouldLoad && (
        <div
          className="absolute inset-0 bg-muted/30"
          style={{ aspectRatio: computedAspectRatio }}
        />
      )}

      {shouldLoad && (
        <picture>
          {/* AVIF format for ultra-modern browsers (if not low-end device) */}
          {!isLowEnd && optimizedAvifSrc && (
            <source 
              srcSet={optimizedAvifSrc} 
              type="image/avif"
              sizes={sizes}
            />
          )}
          
          {/* WebP format for modern browsers */}
          <source 
            srcSet={optimizedWebpSrc} 
            type="image/webp"
            sizes={sizes}
          />
          
          {/* Fallback image */}
          <img
            ref={imgRef}
            src={finalSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loadingStrategy.imageStrategy === 'eager' ? 'eager' : 'lazy'}
            decoding="async"
            sizes={sizes}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              "will-change-transform", // GPU acceleration hint
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              maxWidth: "100%",
              height: "auto",
              aspectRatio: computedAspectRatio
            }}
            // SEO and accessibility attributes
            itemProp="image"
            aria-label={alt}
          />
        </picture>
      )}
    </div>
  );
}