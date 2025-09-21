
import React from "react";
import { LazyMotionWrapper } from "@/components/ui/lazy-motion-wrapper";
import { WorldMap } from "@/components/ui/world-map/component";

export function WorldMapBackground() {
  // Define our European shipping routes
  const shippingRoutes = [
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 51.5074, lng: -0.1278 } // London, UK
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 52.5200, lng: 13.4050 } // Berlin, Germany
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 40.4168, lng: -3.7038 } // Madrid, Spain
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 41.9028, lng: 12.4964 } // Rome, Italy
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 52.3676, lng: 4.9041 } // Amsterdam, Netherlands  
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 47.3769, lng: 8.5417 } // Zurich, Switzerland
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
