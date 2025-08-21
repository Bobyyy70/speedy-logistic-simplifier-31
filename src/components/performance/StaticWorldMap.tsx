import React from "react";

// Static world map background using CSS - no JavaScript execution on main thread
export function StaticWorldMap() {
  return (
    <div className="absolute inset-0 world-map-container opacity-80">
      {/* SVG world map outline - minimal, static */}
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1200 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.15 }}
      >
        {/* Simplified world continents - static paths */}
        <path 
          d="M200 200 Q300 180 400 200 L500 250 Q450 300 400 280 L200 280 Z" 
          fill="#2F68F3" 
          opacity="0.3"
        />
        <path 
          d="M600 150 Q750 140 900 160 L950 200 Q900 250 850 240 L600 240 Z" 
          fill="#2F68F3" 
          opacity="0.2"
        />
        <path 
          d="M100 350 Q200 340 300 360 L350 400 Q300 440 250 430 L100 430 Z" 
          fill="#F3BA2F" 
          opacity="0.2"
        />
        <path 
          d="M700 300 Q850 290 1000 310 L1050 350 Q1000 390 950 380 L700 380 Z" 
          fill="#F3BA2F" 
          opacity="0.3"
        />
        
        {/* Connection lines - static */}
        <line x1="350" y1="250" x2="750" y2="180" stroke="#2F68F3" strokeWidth="2" opacity="0.4" strokeDasharray="5,5" />
        <line x1="350" y1="250" x2="200" y2="380" stroke="#F3BA2F" strokeWidth="2" opacity="0.4" strokeDasharray="5,5" />
        <line x1="350" y1="250" x2="850" y2="340" stroke="#2F68F3" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" />
        
        {/* Location dots */}
        <circle cx="350" cy="250" r="8" fill="#2F68F3" opacity="0.8" />
        <circle cx="750" cy="180" r="6" fill="#F3BA2F" opacity="0.8" />
        <circle cx="200" cy="380" r="6" fill="#F3BA2F" opacity="0.8" />
        <circle cx="850" cy="340" r="6" fill="#2F68F3" opacity="0.8" />
      </svg>
      
      {/* Overlay gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/50"></div>
    </div>
  );
}