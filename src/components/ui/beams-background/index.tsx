
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BeamsBackgroundProps } from "./types";
import { useBeamsAnimation } from "./use-beams-animation";

export function BeamsBackground({
    className,
    children,
    intensity = "medium",
    colors = {
        primary: "#86B6FC",   // Brighter blue
        secondary: "#FFFFFF", // White
        tertiary: "#A9F99B",  // Brighter green
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
                style={{ filter: "blur(10px)" }}
            />

            {children && (
                <div className="relative z-10">{children}</div>
            )}
        </div>
    );
}
