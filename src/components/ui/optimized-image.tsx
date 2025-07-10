import React, { useState, useRef } from "react";
import { useLazyImage } from "@/hooks/use-lazy-image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  webpSrc?: string;
  avifSrc?: string;
  placeholder?: string;
  loading?: "lazy" | "eager";
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  priority = false,
  quality = 85,
  webpSrc,
  avifSrc,
  placeholder,
  loading = "lazy"
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Use lazy loading hook unless priority is set
  const { isLoaded } = useLazyImage({ 
    threshold: 0.1, 
    rootMargin: "50px" 
  });

  const shouldLoad = priority || isLoaded;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Fallback to placeholder if image fails to load
  const finalSrc = imageError ? (placeholder || "/placeholder.svg") : src;

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {/* Loading placeholder */}
      {!imageLoaded && shouldLoad && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ aspectRatio: `${width}/${height}` }}
        />
      )}

      {shouldLoad && (
        <picture>
          {/* AVIF format for modern browsers */}
          {avifSrc && (
            <source 
              srcSet={avifSrc} 
              type="image/avif"
              sizes={sizes}
            />
          )}
          
          {/* WebP format for supported browsers */}
          {webpSrc && (
            <source 
              srcSet={webpSrc} 
              type="image/webp"
              sizes={sizes}
            />
          )}
          
          {/* Fallback image */}
          <img
            ref={imgRef}
            src={finalSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            sizes={sizes}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              maxWidth: "100%",
              height: "auto"
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