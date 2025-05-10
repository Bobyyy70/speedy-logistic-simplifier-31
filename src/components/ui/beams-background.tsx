
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
    colors?: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.16,
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

export function BeamsBackground({
    className,
    children,
    intensity = "subtle",
    colors = {
        primary: "#D3E4FD",   // Soft blue
        secondary: "#FFFFFF", // White
        tertiary: "#F2FCE2",  // Soft green
    },
}: AnimatedGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 12; // Reduced number for subtlety

    const opacityMap = {
        subtle: 0.3,
        medium: 0.5,
        strong: 0.7,
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = MINIMUM_BEAMS;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;
            
            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 40 + Math.random() * 80;
            beam.speed = 0.2 + Math.random() * 0.3;
            
            // Use our custom colors based on index
            const colorIndex = index % 3;
            if (colorIndex === 0) {
                beam.hue = 210; // Blue hue
            } else if (colorIndex === 1) {
                beam.hue = 0; // White (will be overridden in drawBeam)
            } else {
                beam.hue = 90; // Green hue
            }
            
            beam.opacity = 0.08 + Math.random() * 0.08;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            // Calculate pulsing opacity
            const pulsingOpacity =
                beam.opacity *
                (0.7 + Math.sin(beam.pulse) * 0.3) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
            
            // Get color based on beam's hue
            let color;
            if (Math.abs(beam.hue - 210) < 20) {
                color = colors.primary;
            } else if (Math.abs(beam.hue - 0) < 20) {
                color = colors.secondary;
            } else {
                color = colors.tertiary;
            }

            // Enhanced gradient with custom colors
            gradient.addColorStop(0, `${color}00`); // Transparent
            gradient.addColorStop(0.1, `${color}${Math.floor(pulsingOpacity * 128).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(0.4, `${color}${Math.floor(pulsingOpacity * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(0.6, `${color}${Math.floor(pulsingOpacity * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(0.9, `${color}${Math.floor(pulsingOpacity * 128).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, `${color}00`); // Transparent

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(25px)";

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                // Reset beam when it goes off screen
                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity, colors]);

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
