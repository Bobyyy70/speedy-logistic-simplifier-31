import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Ultra-lazy loading: only load when actually needed AND in viewport
const MotionDiv = lazy(() => 
  import('framer-motion').then(({ motion }) => ({ default: motion.div }))
);

const MotionSection = lazy(() => 
  import('framer-motion').then(({ motion }) => ({ default: motion.section }))
);

interface UltraLazyMotionProps {
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
  // Performance optimization: only animate on fast connections
  respectConnection?: boolean;
}

export const UltraLazyMotion: React.FC<UltraLazyMotionProps> = ({
  children,
  className,
  component = 'div',
  variants,
  initial = "hidden",
  animate = "visible",
  transition,
  triggerOnce = true,
  threshold = 0.1,
  rootMargin = '50px',
  respectConnection = true,
  ...props
}) => {
  const { elementRef, shouldAnimate } = useIntersectionObserver({ 
    triggerOnce,
    threshold,
    rootMargin
  });

  const [shouldLoadMotion, setShouldLoadMotion] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Check connection speed
    if (respectConnection && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        const isSlow = connection.effectiveType === 'slow-2g' || 
                      connection.effectiveType === '2g' ||
                      connection.saveData;
        setIsSlowConnection(isSlow);
      }
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Only load motion if we should animate and don't prefer reduced motion
    if (shouldAnimate && !prefersReducedMotion && !isSlowConnection) {
      setShouldLoadMotion(true);
    }
  }, [shouldAnimate, respectConnection, isSlowConnection]);

  const MotionComponent = component === 'section' ? MotionSection : MotionDiv;
  
  // Fallback component without motion
  const StaticComponent = component === 'section' ? 'section' : 'div';

  return (
    <div ref={elementRef} className={className}>
      <Suspense fallback={<StaticComponent className={className} {...props}>{children}</StaticComponent>}>
        {shouldLoadMotion ? (
          <MotionComponent
            variants={variants}
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
            {...props}
          >
            {children}
          </MotionComponent>
        ) : (
          <StaticComponent className={className} {...props}>{children}</StaticComponent>
        )}
      </Suspense>
    </div>
  );
};

// Performance-optimized animation variants
export const performanceVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    // Use transform3d for GPU acceleration
    transform: 'translate3d(0, 20px, 0) scale(0.95)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transform: 'translate3d(0, 0, 0) scale(1)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for 60fps
      // Stagger children for better performance
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Ultra-light slide variant
export const slideVariants = {
  hidden: { 
    opacity: 0, 
    transform: 'translate3d(-20px, 0, 0)'
  },
  visible: { 
    opacity: 1, 
    transform: 'translate3d(0, 0, 0)',
    transition: {
      duration: 0.25,
      ease: 'easeOut'
    }
  }
};