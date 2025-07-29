import React from "react";
import { WorldMap } from "@/components/ui/world-map/component";

// Motion animations disabled for TBT optimization

export function WorldMapBackground() {
  // Define our international shipping routes (reduced for performance)
  const shippingRoutes = [
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 40.7128, lng: -74.0060 } // New York
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 35.6762, lng: 139.6503 } // Tokyo
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: -33.8688, lng: 151.2093 } // Sydney
    }
  ];

  return (
    <div className="absolute inset-0 world-map-container opacity-60">
      <WorldMap 
        dots={shippingRoutes} 
        lineColor="#2F68F3" 
        secondaryLineColor="#F3BA2F"
        opacity={0.7}
        dotColor="#2F68F3"
        secondaryDotColor="#F3BA2F"
      />
      
      {/* Reduced overlay gradient for better animation visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-transparent to-slate-50/20"></div>
    </div>
  );
}