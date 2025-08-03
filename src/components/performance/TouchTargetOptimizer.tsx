import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface TouchTargetProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  minSize?: number;
  className?: string;
}

/**
 * Composant d'optimisation des cibles tactiles pour respecter les standards d'accessibilité
 * - Assure une taille minimale de 48px x 48px (ou personnalisée)
 * - Ajoute du padding invisible si nécessaire
 * - Maintient l'apparence visuelle tout en améliorant l'accessibilité
 */
export const TouchTargetOptimizer = forwardRef<HTMLElement, TouchTargetProps>(
  ({ children, as: Component = 'div', minSize = 48, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          // Assure une taille minimale pour les cibles tactiles
          `min-h-[${minSize}px] min-w-[${minSize}px]`,
          // Centre le contenu
          'flex items-center justify-center',
          // Améliore la zone de clic sur mobile
          'touch-manipulation',
          // Assure que l'élément peut recevoir le focus
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

TouchTargetOptimizer.displayName = 'TouchTargetOptimizer';

/**
 * Wrapper spécialisé pour les boutons petits
 */
export function TouchButton({ 
  children, 
  className, 
  size = 'default',
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  
  const sizeClasses = {
    sm: 'min-h-[48px] min-w-[48px] p-3', // Au moins 48px même pour les petits boutons
    default: 'min-h-[48px] min-w-[48px] px-4 py-3',
    lg: 'min-h-[56px] min-w-[56px] px-6 py-4'
  };

  return (
    <button
      className={cn(
        // Classes de base pour l'accessibilité tactile
        'inline-flex items-center justify-center',
        'touch-manipulation cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        // Taille appropriée
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Wrapper pour les liens qui doivent être tactiles
 */
export function TouchLink({ 
  children, 
  className, 
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  
  return (
    <a
      className={cn(
        // Classes de base pour l'accessibilité tactile
        'inline-flex items-center justify-center',
        'min-h-[48px] min-w-[48px] px-3 py-3',
        'touch-manipulation',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        // Styles de lien
        'text-primary hover:underline',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Wrapper pour les icônes cliquables
 */
export function TouchIcon({ 
  children, 
  className,
  size = 'default',
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  
  const sizeClasses = {
    sm: 'h-[48px] w-[48px] p-3',
    default: 'h-[48px] w-[48px] p-3',
    lg: 'h-[56px] w-[56px] p-4'
  };

  return (
    <button
      className={cn(
        // Classes de base
        'inline-flex items-center justify-center',
        'rounded-md',
        'touch-manipulation cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'hover:bg-accent hover:text-accent-foreground',
        'disabled:pointer-events-none disabled:opacity-50',
        // Taille appropriée
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Hook pour vérifier si un élément respecte les standards tactiles
 */
export function useTouchTargetCheck() {
  const checkTouchTarget = (element: HTMLElement, minSize = 48) => {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return rect.width >= minSize && rect.height >= minSize;
  };

  const optimizeTouchTarget = (element: HTMLElement, minSize = 48) => {
    if (!checkTouchTarget(element, minSize)) {
      const rect = element.getBoundingClientRect();
      const paddingX = Math.max(0, (minSize - rect.width) / 2);
      const paddingY = Math.max(0, (minSize - rect.height) / 2);
      
      element.style.paddingLeft = `${paddingX}px`;
      element.style.paddingRight = `${paddingX}px`;
      element.style.paddingTop = `${paddingY}px`;
      element.style.paddingBottom = `${paddingY}px`;
      element.style.minWidth = `${minSize}px`;
      element.style.minHeight = `${minSize}px`;
    }
  };

  return { checkTouchTarget, optimizeTouchTarget };
}