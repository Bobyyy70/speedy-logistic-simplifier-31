
import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
import { OptimizedHeroContent } from "@/components/sections/hero/OptimizedHeroContent";
import { OptimizedHeroImage } from "@/components/sections/hero/OptimizedHeroImage";
import { ScrollIndicator } from "@/components/sections/ScrollIndicator";

// Lazy load des animations non-critiques pour ne pas bloquer le LCP
const LazyBackgroundGradientAnimation = lazy(() =>
  import("@/components/ui/background-gradient-animation").then(m => ({ default: m.BackgroundGradientAnimation }))
);

const LazyWorldMapBackground = lazy(() =>
  import("@/components/sections/hero/WorldMapBackground").then(m => ({ default: m.WorldMapBackground }))
);

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showDecorations, setShowDecorations] = useState(false);

  // Différer les décorations après le LCP pour ne pas impacter la performance
  useEffect(() => {
    // Attendre que le contenu critique soit rendu avant d'ajouter les décorations
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => setShowDecorations(true), { timeout: 2000 });
      } else {
        setTimeout(() => setShowDecorations(true), 1000);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-screen min-h-[100vh] overflow-hidden bg-white"
    >
      {/* Background décoratif différé pour ne pas impacter le LCP */}
      {showDecorations && (
        <Suspense fallback={null}>
          <LazyBackgroundGradientAnimation
            gradientBackgroundStart="#ffffff"
            gradientBackgroundEnd="#f8fafc"
            firstColor="47, 104, 243"
            secondColor="243, 186, 47"
            thirdColor="100, 220, 255"
            fourthColor="80, 120, 240"
            fifthColor="220, 180, 100"
            pointerColor="140, 100, 255"
            size="100%"
            blendingValue="soft-light"
            className="absolute inset-0 z-0 opacity-40"
            interactive={false} // Désactivé pour la performance
          />
        </Suspense>
      )}
      
      {/* Carte du monde différée */}
      {showDecorations && (
        <div className="absolute inset-0 z-10">
          <Suspense fallback={null}>
            <LazyWorldMapBackground />
          </Suspense>
        </div>
      )}
      
      {/* Contenu principal - critique pour LCP */}
      <div className="container mx-auto relative z-20 h-full flex items-center px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_600px] gap-8 lg:gap-16 items-center w-full">
          
          {/* Contenu textuel optimisé - élément critique LCP */}
          <OptimizedHeroContent />
          
          {/* Image héro optimisée - potentiel élément LCP */}
          <div className="order-first lg:order-last">
            <OptimizedHeroImage />
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
}
