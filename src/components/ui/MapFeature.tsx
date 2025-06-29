
import React from "react";
import { WorldMap } from "./world-map/component";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface MapFeatureProps {
  title: string;
  description: string;
  mapDots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  reverse?: boolean;
  image?: string;
  imageAlt?: string;
}

export function MapFeature({
  title,
  description,
  mapDots = [],
  reverse = false,
  image,
  imageAlt = "Speed E Log"
}: MapFeatureProps) {
  // Si aucun point n'est fourni, utiliser des exemples par défaut
  const defaultDots = [
    {
      start: { lat: 48.8566, lng: 2.3522, label: "France" },
      end: { lat: 40.7128, lng: -74.006, label: "New York" }
    },
    {
      start: { lat: 48.8566, lng: 2.3522 },
      end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }
    },
    {
      start: { lat: 48.8566, lng: 2.3522 },
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney" }
    }
  ];

  const dots = mapDots.length > 0 ? mapDots : defaultDots;

  return (
    <div className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-white via-white to-white/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/80 shadow-xl rounded-lg p-4 md:p-6 overflow-hidden">
                {image ? (
                  <div className="aspect-video bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                    <img alt={imageAlt} className="w-full h-full object-cover" src={image} />
                  </div>
                ) : (
                  <div className="rounded-md overflow-hidden mb-4">
                    <WorldMap dots={dots} opacity={0.65} />
                  </div>
                )}
                <h3 className="font-semibold text-lg mb-2">Réseau logistique international</h3>
                <p className="text-muted-foreground">
                  Notre réseau s'étend à l'international, permettant des livraisons rapides et fiables partout dans le monde.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedText 
              text={title} 
              className="text-3xl font-bold"
              delay={0.3}
            />
            <p className="text-muted-foreground text-lg">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
