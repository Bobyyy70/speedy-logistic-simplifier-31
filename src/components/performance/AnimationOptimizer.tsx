import { lazy, Suspense } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMediaQuery } from '@/hooks/use-media-query';

// Lazy load motion uniquement si nécessaire
const MotionDiv = lazy(() =>
  import('framer-motion').then(({ motion }) => ({ default: motion.div }))
);

interface AnimationOptimizerProps {
  children: React.ReactNode;
  className?: string;
  reduceMotion?: boolean;
  // Props motion conditionnelles
  initial?: any;
  animate?: any;
  whileInView?: any;
  whileHover?: any;
  transition?: any;
  viewport?: any;
}

/**
 * Composant d'optimisation des animations pour améliorer le TBT (Total Blocking Time)
 * - Désactive les animations sur les connexions lentes
 * - Respecte les préférences utilisateur (prefers-reduced-motion)
 * - Lazy load les animations non critiques
 * - Simplifie les animations sur mobile
 */
export function AnimationOptimizer({
  children,
  className,
  reduceMotion = false,
  initial,
  animate,
  whileInView,
  whileHover,
  transition,
  viewport,
  ...props
}: AnimationOptimizerProps) {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  
  // Détection de connexion lente
  const isSlowConnection = typeof navigator !== 'undefined' && 
    'connection' in navigator && 
    (navigator as any).connection?.effectiveType === 'slow-2g';

  // Conditions pour désactiver les animations
  const shouldReduceMotion = prefersReducedMotion || reduceMotion || isSlowConnection;
  
  // Si on doit réduire les animations, renvoyer juste une div simple
  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  // Simplifier les animations sur mobile
  const optimizedProps = isMobile ? {
    initial: initial ? { opacity: 0 } : undefined,
    animate: animate ? { opacity: 1 } : undefined,
    whileInView: whileInView ? { opacity: 1 } : undefined,
    // Supprimer whileHover sur mobile pour économiser les ressources
    whileHover: undefined,
    transition: { duration: 0.3 }, // Transitions plus courtes sur mobile
    viewport: viewport ? { once: true, margin: '-50px' } : undefined
  } : {
    initial,
    animate,
    whileInView,
    whileHover,
    transition: transition || { duration: 0.5 },
    viewport: viewport || { once: true }
  };

  return (
    <Suspense fallback={<div className={className} {...props}>{children}</div>}>
      <MotionDiv 
        className={className} 
        {...optimizedProps}
        {...props}
      >
        {children}
      </MotionDiv>
    </Suspense>
  );
}

// Hook pour optimiser les animations conditionnellement
export function useOptimizedAnimation() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  
  const isSlowConnection = typeof navigator !== 'undefined' && 
    'connection' in navigator && 
    (navigator as any).connection?.effectiveType === 'slow-2g';

  const shouldAnimate = !prefersReducedMotion && !isSlowConnection;
  
  return {
    shouldAnimate,
    isMobile,
    // Variantes optimisées
    fadeIn: shouldAnimate ? {
      hidden: { opacity: 0, y: isMobile ? 10 : 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: isMobile ? 0.3 : 0.5 }
      }
    } : {},
    slideUp: shouldAnimate ? {
      hidden: { opacity: 0, y: isMobile ? 20 : 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: isMobile ? 0.4 : 0.6 }
      }
    } : {},
    scale: shouldAnimate ? {
      initial: { scale: 0.95, opacity: 0 },
      animate: { 
        scale: 1, 
        opacity: 1,
        transition: { duration: isMobile ? 0.3 : 0.5 }
      }
    } : {}
  };
}