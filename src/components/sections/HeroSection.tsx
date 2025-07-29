
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeroContent } from "@/components/sections/hero/HeroContent";
import { HeroCard } from "@/components/sections/hero/HeroCard";
import { ScrollIndicator } from "@/components/sections/ScrollIndicator";
import { WorldMapBackground } from "@/components/sections/hero/WorldMapBackground";
// import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"; // Disabled for TBT optimization
// Heavy animations disabled for TBT optimization

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect disabled for TBT optimization

  return (
    <section ref={heroRef} className="relative w-full h-screen min-h-[100vh] overflow-hidden">
      {/* Background animations disabled for TBT optimization */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30 z-0" />
      
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
