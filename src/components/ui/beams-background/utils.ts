
import { Beam } from "./types";

export const MINIMUM_BEAMS = 20; // Increased from 12 to 20 for more visible effect

export const opacityMap = {
    subtle: 0.5, // Increased from 0.3 to 0.5
    medium: 0.7, // Increased from 0.5 to 0.7
    strong: 0.9, // Increased from 0.7 to 0.9
};

export function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 60 + Math.random() * 100, // Increased width for more visible beams
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.15 + Math.random() * 0.15, // Increased base opacity
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

export function resetBeam(beam: Beam, index: number, totalBeams: number, canvas: HTMLCanvasElement): Beam {
    if (!canvas) return beam;
    
    const column = index % 3;
    const spacing = canvas.width / 3;

    beam.y = canvas.height + 100;
    beam.x =
        column * spacing +
        spacing / 2 +
        (Math.random() - 0.5) * spacing * 0.5;
    beam.width = 60 + Math.random() * 100; // Increased width for more visible beams
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
    
    beam.opacity = 0.15 + Math.random() * 0.15; // Increased base opacity
    return beam;
}

export function drawBeam(
    ctx: CanvasRenderingContext2D, 
    beam: Beam, 
    intensity: "subtle" | "medium" | "strong",
    colors: { primary: string; secondary: string; tertiary: string; }
) {
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
