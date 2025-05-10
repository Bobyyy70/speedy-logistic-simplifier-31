
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BeamsBackgroundProps } from "./types";
import { useBeamsAnimation } from "./use-beams-animation";

export function BeamsBackground({
    className,
    children,
    intensity = "strong", // Changé à "strong" par défaut
    colors = {
        primary: "#1E88E5",   // Bleu plus vif
        secondary: "#FFFFFF", // Blanc
        tertiary: "#7CB342",  // Vert plus vif
    },
}: BeamsBackgroundProps) {
    const canvasRef = useBeamsAnimation({ intensity, colors });

    return (
        <div
            className={cn(
                "relative overflow-hidden",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 -z-10"
                style={{ filter: "blur(8px)" }} // Flou réduit ici aussi
            />

            {children && (
                <div className="relative z-10">{children}</div>
            )}
        </div>
    );
}
