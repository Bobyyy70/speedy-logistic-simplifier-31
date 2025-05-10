
"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground 
      className="max-w-4xl mx-auto py-10 md:py-16" 
      containerClassName="h-auto min-h-[280px] md:min-h-[340px]"
      colors={["#3B82F6", "#2563EB", "#1D4ED8", "#6BA1F2", "#95C2FF"]}
      waveWidth={40}
      backgroundFill="rgba(255, 255, 255, 0.05)"
      blur={8}
      waveOpacity={0.6}
    >
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
          Une équipe à votre écoute
        </h3>
        <p className="text-base md:text-lg text-white/90 font-normal max-w-lg mx-auto">
          Besoin d'informations complémentaires ou d'un devis personnalisé ? Notre équipe est disponible pour répondre à toutes vos questions.
        </p>
      </div>
    </WavyBackground>
  );
}
