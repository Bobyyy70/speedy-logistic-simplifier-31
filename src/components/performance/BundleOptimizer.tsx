import { lazy, Suspense, ComponentType, ReactNode } from 'react';

// Composant de fallback pour le chargement lazy
const LoadingFallback = ({ height = "200px" }: { height?: string }) => (
  <div 
    className="flex items-center justify-center bg-gray-50 animate-pulse"
    style={{ minHeight: height }}
  >
    <div className="flex flex-col items-center space-y-2">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-sm text-gray-500">Chargement...</span>
    </div>
  </div>
);

// HOC pour optimiser le chargement des composants
export function withLazyLoading<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallbackHeight?: string
) {
  const LazyComponent = lazy(importFn);
  
  return function WrappedComponent(props: React.ComponentProps<T>) {
    return (
      <Suspense fallback={<LoadingFallback height={fallbackHeight} />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Préchargement intelligent des composants
export class ComponentPreloader {
  private static preloadedComponents = new Set<string>();
  
  static preloadComponent(
    componentName: string,
    importFn: () => Promise<any>,
    delay = 0
  ) {
    if (this.preloadedComponents.has(componentName)) {
      return;
    }
    
    setTimeout(() => {
      importFn().then(() => {
        this.preloadedComponents.add(componentName);
        console.log(`✅ Composant préchargé: ${componentName}`);
      }).catch(error => {
        console.warn(`❌ Erreur de préchargement pour ${componentName}:`, error);
      });
    }, delay);
  }
  
  static preloadRoute(routePath: string, delay = 1000) {
    if (this.preloadedComponents.has(routePath)) {
      return;
    }
    
    setTimeout(() => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = routePath;
      document.head.appendChild(link);
      
      this.preloadedComponents.add(routePath);
      console.log(`🔗 Route préchargée: ${routePath}`);
    }, delay);
  }
}

// Hook pour précharger les composants based sur l'interaction utilisateur
export const useSmartPreloading = () => {
  const preloadOnHover = (componentName: string, importFn: () => Promise<any>) => {
    return {
      onMouseEnter: () => {
        ComponentPreloader.preloadComponent(componentName, importFn);
      },
      onFocus: () => {
        ComponentPreloader.preloadComponent(componentName, importFn);
      }
    };
  };
  
  const preloadOnVisible = (componentName: string, importFn: () => Promise<any>) => {
    return (element: HTMLElement | null) => {
      if (!element) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            ComponentPreloader.preloadComponent(componentName, importFn, 500);
            observer.unobserve(element);
          }
        },
        { rootMargin: '100px' }
      );
      
      observer.observe(element);
    };
  };
  
  return { preloadOnHover, preloadOnVisible };
};

// Composant pour optimiser le rendu conditionnel
export const ConditionalRender: React.FC<{
  condition: boolean;
  children: ReactNode;
  fallback?: ReactNode;
  loading?: boolean;
}> = ({ condition, children, fallback = null, loading = false }) => {
  if (loading) {
    return <LoadingFallback />;
  }
  
  return condition ? <>{children}</> : <>{fallback}</>;
};

// Composant pour déférer le rendu des éléments non-critiques
export const DeferredComponent: React.FC<{
  children: ReactNode;
  delay?: number;
  fallback?: ReactNode;
}> = ({ children, delay = 100, fallback }) => {
  const [shouldRender, setShouldRender] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRender(true);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);
  
  if (!shouldRender) {
    return fallback ? <>{fallback}</> : null;
  }
  
  return <>{children}</>;
};

// Hook pour détection de la priorité du contenu
export const useContentPriority = () => {
  const [isAboveFold, setIsAboveFold] = useState(true);
  
  useEffect(() => {
    const checkPosition = () => {
      setIsAboveFold(window.scrollY < window.innerHeight);
    };
    
    window.addEventListener('scroll', checkPosition, { passive: true });
    return () => window.removeEventListener('scroll', checkPosition);
  }, []);
  
  return { isAboveFold };
};

// Configuration pour le code splitting par route
export const routeComponents = {
  // Pages principales - chargement immédiat
  home: () => import('../../pages/Index'),
  
  // Pages secondaires - chargement lazy
  about: () => import('../../pages/About'),
  services: () => import('../../pages/Services'), 
  technology: () => import('../../pages/Technology'),
  contact: () => import('../../pages/Contact'),
  privacy: () => import('../../pages/PrivacyPolicy'),
  terms: () => import('../../pages/TermsOfService'),
  
  // Composants lourds - chargement très lazy
  performanceSection: () => import('../sections/LogisticsPerformanceSection'),
  featureSection: () => import('../sections/LogisticsFeatureSection'),
};

// Auto-préchargement intelligent basé sur la navigation
export const setupIntelligentPreloading = () => {
  // Précharger les pages importantes après 2 secondes
  setTimeout(() => {
    ComponentPreloader.preloadComponent('about', routeComponents.about, 0);
    ComponentPreloader.preloadComponent('services', routeComponents.services, 500);
    ComponentPreloader.preloadComponent('contact', routeComponents.contact, 1000);
  }, 2000);
  
  // Précharger les routes importantes
  setTimeout(() => {
    ComponentPreloader.preloadRoute('/services', 1000);
    ComponentPreloader.preloadRoute('/contact', 2000);
    ComponentPreloader.preloadRoute('/about', 3000);
  }, 3000);
};

import { useState, useEffect } from 'react';