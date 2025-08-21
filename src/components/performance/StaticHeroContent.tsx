import React from "react";
import { Button } from "@/components/ui/button";

// Static, lightweight hero content without animations for critical rendering path
export function StaticHeroContent({ onDevisClick }: { onDevisClick: () => void }) {
  return (
    <div className="flex flex-col justify-center space-y-6 text-center lg:text-left px-4 md:px-6">
      {/* Static logo - no animation during critical path */}
      <div className="mb-2">
        <img 
          src="/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png"
          alt="Speed E Log - Logistique E-commerce" 
          className="w-36 h-auto mx-auto lg:mx-0"
          width="144"
          height="auto"
          decoding="async"
          loading="eager"
        />
      </div>

      {/* Static heading - critical for LCP */}
      <h1 className="space-y-4">
        <div className="text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl xl:text-fluid-6xl font-bold tracking-tighter text-slate-900">
          La logistique E-commerce,
        </div>
        <div className="text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl xl:text-fluid-6xl font-bold tracking-tighter text-[#2F68F3]">
          sans les tracas.
        </div>
      </h1>

      {/* Static description */}
      <div className="max-w-[600px] text-slate-700 text-fluid-base md:text-fluid-lg mx-auto lg:mx-0 leading-relaxed">
        <p>
          Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. 
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Speed E-Log simplifie vos expéditions vers le monde entier.
        </p>
      </div>

      {/* Static CTA button */}
      <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
        <Button 
          variant="blue" 
          size="2xl" 
          className="shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 rounded-full"
          onClick={onDevisClick}
        >
          <span className="relative z-10 flex items-center text-white">
            Obtenir un devis personnalisé
            <span className="ml-2 inline-block">→</span>
          </span>
        </Button>
      </div>
      
      {/* Static social proof placeholder */}
      <div className="flex flex-col items-center lg:items-start space-y-3">
        <p className="text-sm text-slate-600 font-medium">
          Déjà adoptée par plus de 100 PME françaises
        </p>
        <div className="flex items-center space-x-4">
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            ⭐ 99,8% de précision
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            📦 Délai moyen 12min
          </div>
        </div>
      </div>
    </div>
  );
}