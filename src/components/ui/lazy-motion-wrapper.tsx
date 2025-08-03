import React, { lazy, Suspense } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Lazy load motion components with better chunking
const LazyMotionDiv = lazy(() => 
  import('framer-motion').then(({ motion }) => ({ default: motion.div }))
);

const LazyMotionSection = lazy(() => 
  import('framer-motion').then(({ motion }) => ({ default: motion.section }))
);

interface LazyMotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  component?: 'div' | 'section';
  variants?: any;
  initial?: any;
  animate?: any;
  transition?: any;
  triggerOnce?: boolean;
  threshold?: number;
  rootMargin?: string;
  style?: React.CSSProperties;
}

export const LazyMotionWrapper: React.FC<LazyMotionWrapperProps> = ({
  children,
  className,
  component = 'div',
  variants,
  initial = 'hidden',
  animate = 'visible',
  transition,
  triggerOnce = true,
  threshold = 0.1,
  rootMargin = '50px',
  style,
  ...props
}) => {
  const { elementRef, shouldAnimate } = useIntersectionObserver({ 
    triggerOnce,
    threshold,
    rootMargin
  });

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    const StaticComponent = component;
    return React.createElement(StaticComponent, { className, style, ref: elementRef }, children);
  }

  const MotionComponent = component === 'section' ? LazyMotionSection : LazyMotionDiv;
  const fallback = React.createElement(component, { className, style, ref: elementRef }, children);

  return (
    <div ref={elementRef}>
      <Suspense fallback={fallback}>
        {shouldAnimate ? (
          <MotionComponent
            variants={variants}
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
            style={style}
            {...props}
          >
            {children}
          </MotionComponent>
        ) : (
          fallback
        )}
      </Suspense>
    </div>
  );
};