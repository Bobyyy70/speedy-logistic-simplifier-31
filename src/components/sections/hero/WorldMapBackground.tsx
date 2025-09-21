
import React from "react";
import { LazyMotionWrapper } from "@/components/ui/lazy-motion-wrapper";
import { WorldMap } from "@/components/ui/world-map/component";

export function WorldMapBackground() {
  // Define our global logistics network from France
  const shippingRoutes = [
    // European destinations
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 51.5074, lng: -0.1278, label: "London" } // London, UK
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 52.5200, lng: 13.4050, label: "Berlin" } // Berlin, Germany
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 40.4168, lng: -3.7038, label: "Madrid" } // Madrid, Spain
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 41.9028, lng: 12.4964, label: "Rome" } // Rome, Italy
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 52.3676, lng: 4.9041, label: "Amsterdam" } // Amsterdam, Netherlands
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 59.3293, lng: 18.0686, label: "Stockholm" } // Stockholm, Sweden
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 50.1109, lng: 8.6821, label: "Frankfurt" } // Frankfurt, Germany
    },
    // Intercontinental destinations - Americas
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 40.7128, lng: -74.0060, label: "New York" } // New York, USA
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" } // Los Angeles, USA
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 43.6532, lng: -79.3832, label: "Toronto" } // Toronto, Canada
    },
    // Asia destinations
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" } // Tokyo, Japan
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 31.2304, lng: 121.4737, label: "Shanghai" } // Shanghai, China
    },
    {
      start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
      end: { lat: 1.3521, lng: 103.8198, label: "Singapore" } // Singapore
    },
    // Oceania & Others
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
