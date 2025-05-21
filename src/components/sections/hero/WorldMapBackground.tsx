
import React from "react";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map/component";

export function WorldMapBackground() {
  // Define our international shipping routes
  const shippingRoutes = [
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 40.7128, lng: -74.0060 } // New York
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: -33.8688, lng: 151.2093 } // Sydney
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 35.6762, lng: 139.6503 } // Tokyo
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 55.7558, lng: 37.6173 } // Moscow
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: -15.7975, lng: -47.8919 } // Brazil (Brasília)
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: -1.2921, lng: 36.8219 } // Nairobi, Kenya
    }
  ];

  return (
    <motion.div 
      className="absolute inset-0 world-map-container transition-transform duration-200 ease-out opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <WorldMap 
        dots={shippingRoutes} 
        lineColor="#2F68F3" 
        secondaryLineColor="#F3BA2F"
        opacity={0.6}
        dotColor="#2F68F3"
        secondaryDotColor="#F3BA2F"
      />
      
      {/* Overlay gradient for better contrast with content */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/50"></div>
    </motion.div>
  );
}
