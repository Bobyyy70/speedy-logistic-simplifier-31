
import React from "react";
import { WorldMap } from "./component";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Livraisons{" "}
          <span className="text-neutral-400">
            {"Internationales".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Une logistique sans frontières pour votre e-commerce. Expédiez partout dans le monde avec la même simplicité qu'une livraison locale.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
            end: { lat: 40.7128, lng: -74.0060 }, // New York
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
            end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
            end: { lat: 55.7558, lng: 37.6173 }, // Moscow
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi, Kenya
          },
        ]}
        lineColor="#3B82F6"
      />
    </div>
  );
}
