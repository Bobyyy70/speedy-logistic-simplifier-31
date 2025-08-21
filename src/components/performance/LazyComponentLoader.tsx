import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyComponentLoaderProps {
  importFn: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

const componentCache = new Map<string, ComponentType<any>>();

export const LazyComponentLoader: React.FC<LazyComponentLoaderProps> = ({ 
  importFn, 
  fallback = <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
  ...props 
}) => {
  // Create a cache key based on the import function string
  const cacheKey = importFn.toString();
  
  let LazyComponent = componentCache.get(cacheKey);
  
  if (!LazyComponent) {
    LazyComponent = lazy(importFn);
    componentCache.set(cacheKey, LazyComponent);
  }

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};