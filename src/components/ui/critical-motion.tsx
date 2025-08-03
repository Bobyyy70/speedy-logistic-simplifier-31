import React from 'react';
import { motion } from 'framer-motion';

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
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return React.createElement(component, { className }, children);
  }

  const MotionComponent = motion[component as keyof typeof motion] as any;

  return (
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
  );
};