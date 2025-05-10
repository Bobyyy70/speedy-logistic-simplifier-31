
"use client";
import React from "react";
import { BeamsBackground } from "@/components/ui/beams-background";

export function BeamsBackgroundDemo() {
  return (
    <BeamsBackground 
      className="absolute inset-0 -z-10 h-full w-full min-h-[400px]"
      intensity="medium"
      colors={{
        primary: "#86B6FC",   // Brighter blue
        secondary: "#FFFFFF", // White
        tertiary: "#A9F99B",  // Brighter green
      }}
    />
  );
}
