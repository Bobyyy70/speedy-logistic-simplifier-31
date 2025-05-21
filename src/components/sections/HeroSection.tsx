
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroContent } from "@/components/sections/hero/HeroContent";
import { HeroCard } from "@/components/sections/hero/HeroCard";
import { ScrollIndicator } from "@/components/sections/hero/ScrollIndicator";
import { WorldMapBackground } from "@/components/sections/hero/WorldMapBackground";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Enable parallax effect on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;
      
      const worldMapElement = hero.querySelector(".world-map-container");
      if (worldMapElement) {
        // Subtle parallax movement for world map
        (worldMapElement as HTMLElement).style.transform = 
          `translate3d(${moveX * 15}px, ${moveY * 15}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0"></div>
      
      <BackgroundGradientAnimation 
        height="100vh"
        gradientBackgroundStart="rgb(2, 6, 23)" 
        gradientBackgroundEnd="rgb(1, 1, 15)"
        firstColor="47, 104, 243"     // Primary blue
        secondColor="243, 186, 47"    // Secondary orange/yellow
        thirdColor="45, 212, 191"     // Teal
        fourthColor="240, 171, 252"   // Purple
        fifthColor="22, 78, 99"       // Dark blue
        pointerColor="243, 186, 47"   // Orange
        interactive={true}
        className="absolute inset-0 z-10"
        preserveBackground={true}
      >
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
      </BackgroundGradientAnimation>
    </section>
  );
}
