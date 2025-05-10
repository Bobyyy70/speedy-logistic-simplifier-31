
"use client";
import React from "react";
import { BeamsBackground } from "@/components/ui/beams-background";

export function BeamsBackgroundDemo() {
  return (
    <BeamsBackground 
      className="absolute inset-0 -z-10 h-full w-full"
      intensity="subtle"
      colors={{
        primary: "#1E88E570",   // Bleu plus transparent
        secondary: "#FFFFFF40", // Blanc transparent
        tertiary: "#7CB34250",  // Vert plus transparent
      }}
    />
  );
}
