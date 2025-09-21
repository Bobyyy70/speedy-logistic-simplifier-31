import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import type { LucideIcon } from "lucide-react";

interface OptimizedIconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  title?: string;
  priority?: boolean; // For critical icons that should load immediately
  "aria-hidden"?: boolean | "true" | "false";
  fallback?: React.ReactNode;
}

// Icon cache to avoid multiple imports of the same icon
const iconCache = new Map<string, LucideIcon>();
const loadingPromises = new Map<string, Promise<LucideIcon>>();

// Pre-define critical icons that should be loaded immediately
const CRITICAL_ICONS = new Set([
  'ArrowRight', 'Menu', 'X', 'Check', 'ChevronDown', 'ChevronRight'
]);

// Dynamic import map for better code splitting
const getIconImport = (name: string): Promise<LucideIcon> => {
  if (iconCache.has(name)) {
    return Promise.resolve(iconCache.get(name)!);
  }

  if (loadingPromises.has(name)) {
    return loadingPromises.get(name)!;
  }

  const importPromise = import('lucide-react')
    .then((module) => {
      const IconComponent = (module as any)[name];
      if (!IconComponent) {
        throw new Error(`Icon "${name}" not found in lucide-react`);
      }
      iconCache.set(name, IconComponent);
      return IconComponent;
    })
    .finally(() => {
      loadingPromises.delete(name);
    });

  loadingPromises.set(name, importPromise);
  return importPromise;
};

export const OptimizedIcon: React.FC<OptimizedIconProps> = ({
  name,
  className,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  title,
  priority = false,
  fallback,
  ...rest
}) => {
  const [IconComponent, setIconComponent] = useState<LucideIcon | null>(
    iconCache.get(name) || null
  );
  const [error, setError] = useState(false);

  // Determine if this is a critical icon or if priority is set
  const isCritical = priority || CRITICAL_ICONS.has(name);

  // Use intersection observer for non-critical icons
  const intersectionResult = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "100px"
  });

  // Only use intersection observer for non-critical icons
  const isVisible = isCritical ? true : intersectionResult.shouldAnimate;
  const elementRef = isCritical ? 
    useRef<HTMLSpanElement>(null) : 
    intersectionResult.elementRef as React.RefObject<HTMLSpanElement>;

  // Load icon when visible or if critical
  const loadIcon = useCallback(async () => {
    if (IconComponent || error) return;

    try {
      const LoadedIcon = await getIconImport(name);
      setIconComponent(() => LoadedIcon);
    } catch (err) {
      console.warn(`Failed to load icon: ${name}`, err);
      setError(true);
    }
  }, [name, IconComponent, error]);

  useEffect(() => {
    if (isCritical || isVisible) {
      loadIcon();
    }
  }, [isCritical, isVisible, loadIcon]);

  // Memoized icon props for performance
  const iconProps = useMemo(() => ({
    size,
    color,
    strokeWidth,
    className,
    title,
    ...rest
  }), [size, color, strokeWidth, className, title, rest]);

  // Fallback component for loading state
  const FallbackIcon = () => (
    <div 
      className={`inline-block ${className || ''}`}
      style={{ 
        width: size, 
        height: size,
        backgroundColor: 'currentColor',
        opacity: 0.1,
        borderRadius: '2px'
      }}
      aria-hidden="true"
    />
  );

  if (error) {
    return fallback ? <>{fallback}</> : <FallbackIcon />;
  }

  if (!IconComponent) {
    return (
      <span ref={elementRef}>
        {fallback ? <>{fallback}</> : <FallbackIcon />}
      </span>
    );
  }

  return <IconComponent {...iconProps} />;
};

// Preload critical icons for better performance
export const preloadCriticalIcons = async () => {
  const promises = Array.from(CRITICAL_ICONS).map(getIconImport);
  await Promise.allSettled(promises);
};

// Hook for batch icon preloading
export const useIconPreloader = (iconNames: string[]) => {
  useEffect(() => {
    const preloadIcons = async () => {
      const promises = iconNames.map(getIconImport);
      await Promise.allSettled(promises);
    };

    // Use requestIdleCallback for non-critical preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => preloadIcons());
    } else {
      setTimeout(preloadIcons, 100);
    }
  }, [iconNames]);
};