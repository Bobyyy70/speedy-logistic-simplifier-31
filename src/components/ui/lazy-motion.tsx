import React, { lazy, Suspense } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Lazy load motion components only when needed
const MotionDiv = lazy(() => 
  import('framer-motion').then(({ motion }) => ({ default: motion.div }))
);

interface LazyMotionDivProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  initial?: any;
  animate?: any;
  transition?: any;
  triggerOnce?: boolean;
}

export const LazyMotionDiv: React.FC<LazyMotionDivProps> = ({
  children,
  className,
  variants,
  initial = "hidden",
  animate = "visible",
  transition,
  triggerOnce = true,
  ...props
}) => {
  const { elementRef, shouldAnimate } = useIntersectionObserver({ 
    triggerOnce,
    threshold: 0.1,
    rootMargin: '50px'
  });

  return (
    <div ref={elementRef} className={['relative', className].filter(Boolean).join(' ')}>
      <Suspense fallback={<div className={className}>{children}</div>}>
        {shouldAnimate ? (
          <MotionDiv
            variants={variants}
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
            {...props}
          >
            {children}
          </MotionDiv>
        ) : (
          <div className={className}>{children}</div>
        )}
      </Suspense>
    </div>
  );
};