
import { Beam } from "./types";

export const MINIMUM_BEAMS = 15; // Réduit pour un effet plus discret

export const opacityMap = {
    subtle: 0.3,
    medium: 0.5, 
    strong: 0.7,  // Réduit pour être plus discret même en mode strong
};

export function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 40 + Math.random() * 80, // Largeur ajustée
        length: height * 2.5,
        angle: angle,
        speed: 0.4 + Math.random() * 0.8, // Vitesse réduite
        opacity: 0.08 + Math.random() * 0.12, // Opacité réduite
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02, // Pulsation plus lente
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
    beam.width = 40 + Math.random() * 80; // Largeur ajustée
    beam.speed = 0.2 + Math.random() * 0.3;
    
    // Utiliser nos couleurs personnalisées en fonction de l'index
    const colorIndex = index % 3;
    if (colorIndex === 0) {
        beam.hue = 210; // Teinte bleue
    } else if (colorIndex === 1) {
        beam.hue = 0; // Blanc (sera remplacé dans drawBeam)
    } else {
        beam.hue = 90; // Teinte verte
    }
    
    beam.opacity = 0.08 + Math.random() * 0.12; // Opacité réduite
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

    // Calculer l'opacité pulsante
    const pulsingOpacity =
        beam.opacity *
        (0.7 + Math.sin(beam.pulse) * 0.3) *
        opacityMap[intensity];
    
    // Convertir les couleurs hexadécimales en format rgba
    const getColorWithOpacity = (color: string, opacity: number) => {
        // Si c'est déjà au format rgba, simplement ajuster l'opacité
        if (color.startsWith('rgba')) {
            const parts = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
            if (parts) {
                return `rgba(${parts[1]}, ${parts[2]}, ${parts[3]}, ${opacity})`;
            }
        }
        
        // Pour le format hex
        let hex = color.replace('#', '');
        
        // Si le format est #RRGGBBAA, extraire les composantes RGB et ignorer l'alpha original
        if (hex.length === 8) {
            hex = hex.substring(0, 6);
        }
        
        // Gérer les formats courts #RGB
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
    
    // Obtenir la couleur en fonction de la teinte du rayon
    let baseColor;
    if (Math.abs(beam.hue - 210) < 20) {
        baseColor = colors.primary;
    } else if (Math.abs(beam.hue - 0) < 20) {
        baseColor = colors.secondary;
    } else {
        baseColor = colors.tertiary;
    }

    // Utiliser des valeurs d'opacité pour rgba au lieu d'essayer d'ajouter des valeurs hex d'opacité
    gradient.addColorStop(0, getColorWithOpacity(baseColor, 0)); // Transparent
    gradient.addColorStop(0.1, getColorWithOpacity(baseColor, pulsingOpacity * 0.6));  
    gradient.addColorStop(0.4, getColorWithOpacity(baseColor, pulsingOpacity * 0.8));
    gradient.addColorStop(0.6, getColorWithOpacity(baseColor, pulsingOpacity * 0.8));
    gradient.addColorStop(0.9, getColorWithOpacity(baseColor, pulsingOpacity * 0.6));  
    gradient.addColorStop(1, getColorWithOpacity(baseColor, 0)); // Transparent

    ctx.fillStyle = gradient;
    ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
    ctx.restore();
}
