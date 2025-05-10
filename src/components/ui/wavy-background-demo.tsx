
"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground 
      className="max-w-full mx-auto" 
      containerClassName="h-auto min-h-[200px] absolute inset-0 -z-10"
      colors={["#D3E4FD", "#FFFFFF", "#F2FCE2"]}
      waveWidth={30}
      backgroundFill="transparent"
      blur={12}
      waveOpacity={0.3}
      speed="slow"
    />
  );
}
