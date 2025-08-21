
import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
import { HeroContent } from "@/components/sections/hero/HeroContent";
import { HeroCard } from "@/components/sections/hero/HeroCard";
import { WorldMapBackground } from "@/components/sections/hero/WorldMapBackground";
import { IdleHydrator } from "@/components/performance/IdleHydrator";

// Lazy load all non-critical components to improve TTI
const LazyScrollIndicator = lazy(() =>
  import("@/components/sections/ScrollIndicator").then(m => ({ default: m.ScrollIndicator }))
);

const LazyBackgroundGradientAnimation = lazy(() =>
  import("@/components/ui/background-gradient-animation").then(m => ({ default: m.BackgroundGradientAnimation }))
);

const LazyUltraLazyMotion = lazy(() =>
  import("@/components/ui/ultra-lazy-motion").then(m => ({ default: m.UltraLazyMotion }))
);

// Remove the problematic lazy hook imports - hooks should not be lazy loaded

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-screen min-h-[100vh] overflow-hidden"
    >
      {/* World Map Background - Critical for LCP, load immediately */}
      <div className="absolute inset-0 z-10">
        <WorldMapBackground />
      </div>
      
      {/* Critical content - load immediately */}
      <div className="container mx-auto relative z-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] gap-6 lg:gap-12 items-center">
          <HeroContent />
          <HeroCard />
        </div>
      </div>
      
      {/* Non-critical decorations - defer for better TTI */}
      <IdleHydrator timeout={2000}>
        <EnhancedDecorations />
      </IdleHydrator>
      
      {/* Scroll indicator - defer to improve TTI */}
      <IdleHydrator timeout={1500}>
        <Suspense fallback={null}>
          <LazyScrollIndicator />
        </Suspense>
      </IdleHydrator>
    </section>
  );
}

// Separate component for heavy decorations to avoid blocking initial render
function EnhancedDecorations() {
  const [showDecorations, setShowDecorations] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Quick device capability check without heavy monitoring
    const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 2 : false;
    const isSlowConnection = (navigator as any).connection?.effectiveType === 'slow-2g' || 
                            (navigator as any).connection?.effectiveType === '2g';
    
    if (isLowEnd || isSlowConnection) return;

    // Defer decorations even further to ensure TTI
    const timer = setTimeout(() => setShowDecorations(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!showDecorations) return null;

  return (
    <div className="absolute inset-0 z-[1]" ref={heroRef}>
      {/* Background gradient animation */}
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
          interactive={true}
        />
      </Suspense>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <Suspense fallback={null}>
          <LazyUltraLazyMotion
            className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"
            variants={{
              hidden: { opacity: 0, x: "-20%", y: "0%" },
              visible: { 
                opacity: 1, 
                x: ["-20%", "10%", "-10%", "5%", "-20%"],
                y: ["0%", "15%", "-5%", "10%", "0%"],
                transition: {
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
              }
            }}
            respectConnection={true}
          >
            <div className="w-full h-full" />
          </LazyUltraLazyMotion>
          <LazyUltraLazyMotion
            className="absolute w-[400px] h-[400px] top-[20%] right-[10%] rounded-full bg-yellow-500/10 blur-[100px]"
            variants={{
              hidden: { opacity: 0, x: "10%", y: "5%" },
              visible: { 
                opacity: 1, 
                x: ["10%", "-15%", "5%", "-5%", "10%"],
                y: ["5%", "-10%", "15%", "0%", "5%"],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
              }
            }}
            respectConnection={true}
          >
            <div className="w-full h-full" />
          </LazyUltraLazyMotion>
        </Suspense>
      </div>
    </div>
  );
}
