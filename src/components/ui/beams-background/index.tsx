
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BeamsBackgroundProps } from "./types";
import { useBeamsAnimation } from "./use-beams-animation";

export function BeamsBackground({
    className,
    children,
    intensity = "subtle",
    colors = {
        primary: "#D3E4FD",   // Soft blue
        secondary: "#FFFFFF", // White
        tertiary: "#F2FCE2",  // Soft green
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
