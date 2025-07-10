import React from "react";
import { cn } from "@/lib/utils";

interface AriaEnhancedProps {
  children: React.ReactNode;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaExpanded?: boolean;
  ariaHidden?: boolean;
  tabIndex?: number;
  className?: string;
}

export function AriaEnhanced({
  children,
  role,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaExpanded,
  ariaHidden,
  tabIndex,
  className,
  ...props
}: AriaEnhancedProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-expanded={ariaExpanded}
      aria-hidden={ariaHidden}
      tabIndex={tabIndex}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Hook for managing focus and keyboard navigation
export function useFocusManagement() {
  const focusRef = React.useRef<HTMLElement>(null);

  const setFocus = React.useCallback(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  const handleKeyboardNavigation = React.useCallback((e: React.KeyboardEvent) => {
    // Escape key handling
    if (e.key === 'Escape') {
      if (focusRef.current) {
        focusRef.current.blur();
      }
    }
    
    // Enter/Space key handling for interactive elements
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Custom logic can be added here
    }
  }, []);

  return {
    focusRef,
    setFocus,
    handleKeyboardNavigation
  };
}