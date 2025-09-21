import React, { ReactNode } from 'react';
import { useEnhancedMobile } from '@/hooks/use-enhanced-mobile';
import { cn } from '@/lib/utils';

interface MobileOptimizedLayoutProps {
  children: ReactNode;
  className?: string;
  enablePadding?: boolean;
  enableSpacing?: boolean;
}

export function MobileOptimizedLayout({ 
  children, 
  className,
  enablePadding = true,
  enableSpacing = true 
}: MobileOptimizedLayoutProps) {
  const mobile = useEnhancedMobile();

  const layoutClasses = cn(
    'w-full',
    enablePadding && 'mobile-content-padding',
    enableSpacing && 'mobile-spacing-y',
    mobile.isMobile && 'touch-pan-y',
    className
  );

  return (
    <div className={layoutClasses}>
      {children}
    </div>
  );
}

interface MobileGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
}

export function MobileGrid({ 
  children, 
  columns = 3, 
  className,
  gap = 'md' 
}: MobileGridProps) {
  const mobile = useEnhancedMobile();
  
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-4 sm:gap-6 lg:gap-8',
    lg: 'gap-6 sm:gap-8 lg:gap-12'
  };

  const gridClasses = cn(
    'grid',
    gapClasses[gap],
    // Mobile-first responsive grid
    columns === 1 && 'grid-cols-1',
    columns === 2 && 'mobile-grid-2',
    columns === 3 && 'mobile-grid-3', 
    columns === 4 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    className
  );

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
}

interface MobileCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
}

export function MobileCard({ 
  children, 
  className,
  variant = 'default',
  padding = 'md'
}: MobileCardProps) {
  const mobile = useEnhancedMobile();

  const variantClasses = {
    default: 'bg-card border border-border shadow-sm',
    elevated: 'bg-card border border-border shadow-md hover:shadow-lg',
    outlined: 'bg-transparent border-2 border-border'
  };

  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8'
  };

  const cardClasses = cn(
    'rounded-lg transition-all duration-200',
    variantClasses[variant],
    paddingClasses[padding],
    mobile.touchSupported && 'touch-manipulation',
    className
  );

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
}

interface MobileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function MobileButton({ 
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}: MobileButtonProps) {
  const mobile = useEnhancedMobile();

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80', 
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground'
  };

  const sizeClasses = {
    sm: mobile.isMobile ? 'min-h-[44px] px-4 py-2 text-sm' : 'h-9 px-3 text-sm',
    md: mobile.isMobile ? 'min-h-[48px] px-6 py-3 text-base' : 'h-10 px-4 py-2 text-sm',
    lg: mobile.isMobile ? 'min-h-[52px] px-8 py-4 text-lg' : 'h-11 px-8 text-base'
  };

  const buttonClasses = cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}