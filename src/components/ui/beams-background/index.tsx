
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
        primary: "#1E88E570",   // Bleu plus transparent
        secondary: "#FFFFFF40", // Blanc transparent
        tertiary: "#7CB34250",  // Vert plus transparent
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
