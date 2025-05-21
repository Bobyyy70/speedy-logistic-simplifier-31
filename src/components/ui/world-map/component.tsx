
import React, { useRef } from "react";
import { useTheme } from "next-themes";
import DottedMap from "dotted-map";
import { MapPaths } from "./MapPaths";
import { MapPoints } from "./MapPoints";
import { MovingDots } from "./MovingDots";
import { MapProps } from "./types";

export function WorldMap({
  dots = [],
  lineColor = "#2F68F3",
  secondaryLineColor = "#F3BA2F",
  opacity = 0.85,
  dotColor = "#2F68F3",
  secondaryDotColor = "#F3BA2F",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  
  // Get the theme from next-themes
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const svgMap = map.getSVG({
    radius: 0.35, // Slightly larger dots
    color: isDarkMode ? "#FFFFFF90" : "#00000060", // More visible dots in light mode
    shape: "circle",
    backgroundColor: "transparent", // Transparent background to blend with the gradient
  });

  // If no points are provided, use default ones
  const activeDots = dots.length > 0 ? dots : [
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

  return (
    <div className="w-full h-full rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className={`h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none opacity-${Math.round(opacity * 100)}`}
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* Render path lines */}
        <MapPaths 
          dots={activeDots} 
          lineColor={lineColor} 
          secondaryLineColor={secondaryLineColor} 
        />
        
        {/* Render start and end points */}
        <MapPoints 
          dots={activeDots} 
          lineColor={lineColor} 
          secondaryLineColor={secondaryLineColor} 
        />
        
        {/* Render moving dots along the paths */}
        <MovingDots dots={activeDots} />
      </svg>
    </div>
  );
}
