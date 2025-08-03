import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeroContent } from "@/components/sections/hero/HeroContent";
import { HeroCard } from "@/components/sections/hero/HeroCard";
import { ScrollIndicator } from "@/components/sections/ScrollIndicator";
import { WorldMapBackground } from "@/components/sections/hero/WorldMapBackground";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { UltraLazyMotion, performanceVariants } from "@/components/ui/ultra-lazy-motion";
import { useThrottledParallax } from "@/hooks/use-throttled-parallax";
import { usePerformanceMonitor } from "@/hooks/use-performance-monitor";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const throttledParallax = useThrottledParallax({ intensity: 8, fps: 30 });
  const { metrics } = usePerformanceMonitor();

  // Enable optimized parallax effect only on performant devices
  useEffect(() => {
    if (!heroRef.current || metrics.isLowEndDevice) return;

    const worldMapElement = heroRef.current.querySelector(".world-map-container") as HTMLElement;
    const handleMouseMove = throttledParallax(worldMapElement);
    
    if (handleMouseMove) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [throttledParallax, metrics.isLowEndDevice]);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-screen min-h-[100vh] overflow-hidden"
      style={{
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)' // Force GPU layer
      }}
    >
      {/* Background gradient animation with enhanced colors and subtlety */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="#ffffff"
        gradientBackgroundEnd="#f8fafc"
        firstColor="47, 104, 243"        // Primary blue
        secondColor="243, 186, 47"       // Gold/yellow accent
        thirdColor="100, 220, 255"       // Light blue
        fourthColor="80, 120, 240"       // Soft blue
        fifthColor="220, 180, 100"       // Warm gold
        pointerColor="140, 100, 255"     // Interactive purple
        size="100%"
        blendingValue="soft-light"
        className="absolute inset-0 z-0 opacity-40"
        interactive={true}
      />
      
      {/* Animated gradient orbs - only for high-performance devices */}
      {!metrics.isLowEndDevice && (
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <UltraLazyMotion
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
          </UltraLazyMotion>
          <UltraLazyMotion
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
          </UltraLazyMotion>
        </div>
      )}
      
      {/* World Map Background - conditional rendering based on performance */}
      <div className="absolute inset-0 z-10">
        {!metrics.isLowEndDevice && metrics.networkSpeed !== 'slow' && (
          <WorldMapBackground />
        )}
      </div>
      
      <div className="container mx-auto relative z-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] gap-6 lg:gap-12 items-center">
          {/* Content Column */}
          <HeroContent />
          
          {/* Visual Column with floating effect */}
          <HeroCard />
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
}