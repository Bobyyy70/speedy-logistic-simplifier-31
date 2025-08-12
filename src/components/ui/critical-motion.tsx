import React, { lazy, Suspense } from 'react';

// For critical above-fold animations that need immediate loading
interface CriticalMotionProps {
  children: React.ReactNode;
  className?: string;
  component?: 'div' | 'section' | 'h1' | 'h2' | 'p';
  variants?: any;
  initial?: any;
  animate?: any;
  transition?: any;
}

// Lazy-load framer-motion elements to avoid blocking main thread on initial paint
const LazyMotionDiv = lazy(() =>
  import('framer-motion').then(({ motion }) => ({ default: motion.div }))
);
const LazyMotionSection = lazy(() =>
  import('framer-motion').then(({ motion }) => ({ default: motion.section }))
);
const LazyMotionH1 = lazy(() =>
  import('framer-motion').then(({ motion }) => ({ default: motion.h1 }))
);
const LazyMotionH2 = lazy(() =>
  import('framer-motion').then(({ motion }) => ({ default: motion.h2 }))
);
const LazyMotionP = lazy(() =>
  import('framer-motion').then(({ motion }) => ({ default: motion.p }))
);

export const CriticalMotion: React.FC<CriticalMotionProps> = ({
  children,
  className,
  component = 'div',
  variants,
  initial,
  animate,
  transition,
  ...props
}) => {
  // Respect reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const StaticComponent = component as keyof JSX.IntrinsicElements;
  const fallback = React.createElement(StaticComponent, { className }, children);

  if (prefersReducedMotion) return fallback;

  const MotionComponent =
    component === 'section' ? LazyMotionSection :
    component === 'h1' ? LazyMotionH1 :
    component === 'h2' ? LazyMotionH2 :
    component === 'p' ? LazyMotionP :
    LazyMotionDiv;

  return (
    <Suspense fallback={fallback}>
      <MotionComponent
        variants={variants}
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
        {...(props as any)}
      >
        {children}
      </MotionComponent>
    </Suspense>
  );
};