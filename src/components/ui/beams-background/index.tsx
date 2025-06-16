
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BeamsBackgroundProps } from "./types";
import { useBeamsAnimation } from "./use-beams-animation";

export function BeamsBackground({
    className,
    children,
    intensity = "subtle", // Changé à "subtle" par défaut pour plus de discrétion
    colors = {
        primary: "#1E88E5",   // Bleu standard (sans transparence dans la définition)
        secondary: "#FFFFFF", // Blanc standard (sans transparence dans la définition)
        tertiary: "#7CB342",  // Vert standard (sans transparence dans la définition)
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
                style={{ filter: "blur(20px)" }} // Flou augmenté pour plus de discrétion
            />

            {children && (
                <div className="relative z-10">{children}</div>
            )}
        </div>
    );
}
