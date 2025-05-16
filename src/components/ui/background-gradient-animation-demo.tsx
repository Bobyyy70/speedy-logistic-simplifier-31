
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation 
      height="35vh" 
      gradientBackgroundStart="#f0f4ff" 
      gradientBackgroundEnd="#fff"
      firstColor="47, 104, 243"  // Bleu primaire
      secondColor="243, 186, 47"  // Orange secondaire
      thirdColor="100, 150, 255"  // Bleu plus clair
      fourthColor="240, 180, 50"  // Orange plus clair
      fifthColor="180, 200, 255"  // Bleu très clair
    >
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-speedelog-500 to-speedelog-700">
          Gradients X Animations
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
