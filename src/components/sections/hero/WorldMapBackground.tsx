
import React from "react";
import { LazyMotionWrapper } from "@/components/ui/lazy-motion-wrapper";
import { WorldMap } from "@/components/ui/world-map/component";

export function WorldMapBackground() {
  // Define our global logistics network from France
  const shippingRoutes = [
    // Destinations nord
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 59.3293, lng: 18.0686, label: "Stockholm" } // Stockholm, Sweden
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 59.9139, lng: 10.7522, label: "Oslo" } // Oslo, Norway
    },
    // Destinations sud
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 37.9838, lng: 23.7275, label: "Athènes" } // Athens, Greece
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 33.5731, lng: -7.5898, label: "Casablanca" } // Casablanca, Morocco
    },
    // Intercontinental destinations variées
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 40.7128, lng: -74.0060, label: "New York" } // New York, USA
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" } // Tokyo, Japan
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney" } // Sydney, Australia
    }
  ];

  return (
    <LazyMotionWrapper
      className="absolute inset-0 world-map-container transition-transform duration-200 ease-out opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1, delay: 0.3 }}
      threshold={0.05}
      rootMargin="100px"
      style={{
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)' // GPU acceleration for parallax
      }}
    >
      <WorldMap 
        dots={shippingRoutes} 
        lineColor="#2F68F3" 
        secondaryLineColor="#F3BA2F"
        opacity={0.75}
        dotColor="#2F68F3"
        secondaryDotColor="#F3BA2F"
        priority={true}
      />
      
      {/* Overlay gradient for better contrast with content */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/50"></div>
    </LazyMotionWrapper>
  );
}
