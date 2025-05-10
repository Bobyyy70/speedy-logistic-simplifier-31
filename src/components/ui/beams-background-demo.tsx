
"use client";
import React from "react";
import { BeamsBackground } from "@/components/ui/beams-background";

export function BeamsBackgroundDemo() {
  return (
    <BeamsBackground 
      className="absolute inset-0 -z-10 h-full w-full"
      intensity="subtle"
      colors={{
        primary: "#D3E4FD",   // Soft blue
        secondary: "#FFFFFF", // White
        tertiary: "#F2FCE2",  // Soft green
      }}
    />
  );
}
