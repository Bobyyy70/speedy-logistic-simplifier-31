
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
          `translate3d(${moveX * 10}px, ${moveY * 10}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative py-0 md:py-0 lg:py-0 overflow-hidden xl:py-0 rounded-none mx-0 min-h-[100vh]">
      <BackgroundGradientAnimation 
        height="100vh"
        gradientBackgroundStart="rgb(17, 24, 39)" // Dark blue background
        gradientBackgroundEnd="rgb(2, 6, 23)"      // Almost black
        firstColor="18, 113, 255"                  // Blue
        secondColor="243, 186, 47"                 // Orange
        thirdColor="45, 212, 191"                  // Teal
        fourthColor="240, 171, 252"                // Purple
        fifthColor="22, 78, 99"                    // Dark blue
        pointerColor="243, 186, 47"                // Orange
        interactive={true}
        className="z-10"
        preserveBackground={true}
      >
        <WorldMapBackground />
        
        <div className="container mx-auto relative z-20 px-0 pt-16 md:pt-0 flex items-center min-h-[100vh]">
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
