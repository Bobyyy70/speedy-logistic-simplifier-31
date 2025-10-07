import React, { lazy, Suspense } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface LazyInViewProps<T extends React.ComponentType<any>> {
  loader: () => Promise<{ default: T }>;
  fallback?: React.ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
  // Optional wrapper to reserve space and avoid CLS for below-the-fold
  wrapperStyle?: React.CSSProperties;
  // Props to forward to the lazily loaded component
  componentProps?: Record<string, any>;
}

export function LazyInView<T extends React.ComponentType<any>>({
  loader,
  fallback = null,
  className,
  rootMargin = '100px',
  threshold = 0.01,
  triggerOnce = true,
  wrapperStyle,
  componentProps,
}: LazyInViewProps<T>) {
  const { elementRef, shouldAnimate } = useIntersectionObserver({
    rootMargin,
    threshold,
    triggerOnce,
  });

  // Build the lazy component only when in view to avoid scheduling network early
  const Component = shouldAnimate ? (lazy(loader) as any) : null;

  return (
    <div ref={elementRef} className={className} style={wrapperStyle}>
      {Component ? (
        <Suspense fallback={fallback}>
          <Component {...componentProps} />
        </Suspense>
      ) : null}
    </div>
  );
}
