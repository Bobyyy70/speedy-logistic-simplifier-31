import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyComponentLoaderProps {
  importFn: () => Promise<any>; // Accept any module structure
  componentName: string; // Name of the exported component
  fallback?: React.ReactNode;
  [key: string]: any;
}

const componentCache = new Map<string, ComponentType<any>>();

export const LazyComponentLoader: React.FC<LazyComponentLoaderProps> = ({ 
  importFn, 
  componentName,
  fallback = <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
  ...props 
}) => {
  // Create a cache key based on import function and component name
  const cacheKey = `${importFn.toString()}_${componentName}`;
  
  let LazyComponent = componentCache.get(cacheKey);
  
  if (!LazyComponent) {
    LazyComponent = lazy(async () => {
      const module = await importFn();
      const Component = module[componentName];
      if (!Component) {
        throw new Error(`Component "${componentName}" not found in module`);
      }
      return { default: Component };
    });
    componentCache.set(cacheKey, LazyComponent);
  }

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};