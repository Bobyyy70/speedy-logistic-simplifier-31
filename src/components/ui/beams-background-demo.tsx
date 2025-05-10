
"use client";
import React from "react";
import { BeamsBackground } from "@/components/ui/beams-background";

export function BeamsBackgroundDemo() {
  return (
    <BeamsBackground 
      className="absolute inset-0 -z-10 h-full w-full min-h-[400px]"
      intensity="strong"
      colors={{
        primary: "#1E88E5",   // Bleu plus vif
        secondary: "#FFFFFF", // Blanc
        tertiary: "#7CB342",  // Vert plus vif
      }}
    />
  );
}
