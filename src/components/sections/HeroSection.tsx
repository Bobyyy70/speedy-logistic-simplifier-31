
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeroContent } from "@/components/sections/hero/HeroContent";
import { HeroCard } from "@/components/sections/hero/HeroCard";
import { ScrollIndicator } from "@/components/sections/ScrollIndicator";
import { WorldMapBackground } from "@/components/sections/hero/WorldMapBackground";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { motion } from "framer-motion";
import { useThrottledParallax } from "@/hooks/use-throttled-parallax";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const throttledParallax = useThrottledParallax({ intensity: 15, fps: 60 });

  // Enable optimized parallax effect
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const worldMapElement = hero.querySelector(".world-map-container") as HTMLElement;
    const handleMouseMove = throttledParallax(worldMapElement);
    
    if (handleMouseMove) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [throttledParallax]);

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
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"
          animate={{
            x: ["-20%", "10%", "-10%", "5%", "-20%"],
            y: ["0%", "15%", "-5%", "10%", "0%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] top-[20%] right-[10%] rounded-full bg-yellow-500/10 blur-[100px]"
          animate={{
            x: ["10%", "-15%", "5%", "-5%", "10%"],
            y: ["5%", "-10%", "15%", "0%", "5%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="absolute inset-0 z-10">
        <WorldMapBackground />
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
