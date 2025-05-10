
import { useEffect, useRef } from "react";
import { Beam, BeamsBackgroundProps } from "./types";
import { MINIMUM_BEAMS, createBeam, resetBeam, drawBeam } from "./utils";

export function useBeamsAnimation({
    intensity = "strong", // Changé à "strong" pour plus d'intensité
    colors = {
        primary: "#1E88E5",   // Bleu plus vif
        secondary: "#FFFFFF", // Blanc
        tertiary: "#7CB342",  // Vert plus vif
    },
}: Partial<BeamsBackgroundProps>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);

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

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(8px)"; // Flou réduit pour plus de définition

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                // Réinitialiser le rayon quand il sort de l'écran
                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams, canvas);
                }

                drawBeam(ctx, beam, intensity, colors);
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

    return canvasRef;
}
