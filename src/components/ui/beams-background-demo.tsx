
"use client";
import React from "react";
import { BeamsBackground } from "@/components/ui/beams-background";

export function BeamsBackgroundDemo() {
  return (
    <BeamsBackground 
      className="absolute inset-0 -z-10 h-full w-full"
      intensity="subtle"
      colors={{
        primary: "#1E88E5",   // Bleu standard (sans transparence dans la définition)
        secondary: "#FFFFFF", // Blanc standard (sans transparence dans la définition)
        tertiary: "#7CB342",  // Vert standard (sans transparence dans la définition)
      }}
    />
  );
}
