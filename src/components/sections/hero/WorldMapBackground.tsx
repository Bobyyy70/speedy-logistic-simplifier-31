
import React from "react";
import { WorldMap } from "@/components/ui/world-map/component";

export function WorldMapBackground() {
  // Define our international shipping routes
  const shippingRoutes = [
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 40.7128, lng: -74.0060, label: "New York" } // New York
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney" } // Sydney
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" } // Tokyo
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 55.7558, lng: 37.6173, label: "Moscow" } // Moscow
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: -15.7975, lng: -47.8919, label: "Brasília" } // Brazil (Brasília)
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: -1.2921, lng: 36.8219, label: "Nairobi" } // Nairobi, Kenya
    }
  ];

  return (
    <div className="absolute inset-0 world-map-container transition-transform duration-200 ease-out">
      <WorldMap 
        dots={shippingRoutes} 
        lineColor="#2F68F3" 
        secondaryLineColor="#F3BA2F"
        opacity={0.65}
      />
    </div>
  );
}
