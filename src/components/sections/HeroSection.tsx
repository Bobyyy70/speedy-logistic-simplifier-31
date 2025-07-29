
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeroContent } from "@/components/sections/hero/HeroContent";
import { HeroCard } from "@/components/sections/hero/HeroCard";
import { ScrollIndicator } from "@/components/sections/ScrollIndicator";
import { WorldMapBackground } from "@/components/sections/hero/WorldMapBackground";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { motion } from "framer-motion";
import { usePerformanceOptimization } from "@/hooks/use-performance-optimization";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { settings, throttle } = usePerformanceOptimization();

  // Optimized parallax effect with performance checks
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || settings.disableParallax) return;

    const handleMouseMove = throttle((e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;
      
      const worldMapElement = hero.querySelector(".world-map-container");
      if (worldMapElement) {
        // Reduced parallax movement for better performance
        (worldMapElement as HTMLElement).style.transform = 
          `translate3d(${moveX * 8}px, ${moveY * 8}px, 0)`;
      }
    }, 16); // 60fps throttling

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [settings.disableParallax, throttle]);

  return (
    <section ref={heroRef} className="relative w-full h-screen min-h-[100vh] overflow-hidden">
      {/* Optimized background animation */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="#ffffff"
        gradientBackgroundEnd="#f8fafc"
        firstColor="47, 104, 243"
        secondColor="243, 186, 47"
        thirdColor="100, 220, 255"
        fourthColor="80, 120, 240"
        fifthColor="220, 180, 100"
        pointerColor="140, 100, 255"
        size="80%"
        blendingValue="normal"
        className="absolute inset-0 z-0 opacity-20"
        interactive={!settings.disableInteractivity}
      />
      
      {/* Simplified gradient orbs for performance */}
      {!settings.reduceAnimations && (
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px]"
            animate={{
              x: ["-10%", "5%", "-5%", "-10%"],
              y: ["0%", "8%", "-3%", "0%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        </div>
      )}
      
      <div className="absolute inset-0 z-10">
        <WorldMapBackground reduceAnimations={settings.reduceAnimations} />
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
