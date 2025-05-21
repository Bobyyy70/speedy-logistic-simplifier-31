
import React, { useRef } from "react";
import { useTheme } from "next-themes";
import DottedMap from "dotted-map";
import { MapPaths } from "./MapPaths";
import { MapPoints } from "./MapPoints";
import { MovingDots } from "./MovingDots";
import { MapProps } from "./types";

export function WorldMap({
  dots = [],
  lineColor = "#4895EF",
  secondaryLineColor = "#9D4EDD",
  opacity = 0.75,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  
  // Get the theme from next-themes
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const svgMap = map.getSVG({
    radius: 0.3, // Slightly larger dots
    color: "#4CC9F080", // Unified color with opacity
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
    <div className="w-full aspect-[2/1] rounded-lg relative font-sans site-background tech-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/80 via-transparent to-[#0A1128]/80"></div>
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
