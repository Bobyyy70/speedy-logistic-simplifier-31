
import React from "react";
import { useDottedMap } from "./useDottedMap";
import { MapPaths } from "./MapPaths";
import { MapPoints } from "./MapPoints";
import { MovingDots } from "./MovingDots";
import { WorldMapProps } from "./types";

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  secondaryLineColor = "#f59e0b",
  opacity = 1,
  dotColor = "#0ea5e9",
  secondaryDotColor = "#f59e0b",
  priority = false
}: WorldMapProps) {
  const { svgMap } = useDottedMap();

  // Convert Dot[] to MapDot[] format for compatibility  
  const mapDots = dots.map(dot => {
    let endLabel = undefined;
    // Add labels for European destinations
    if (dot.end.lat === 51.5074 && dot.end.lng === -0.1278) endLabel = "London";
    if (dot.end.lat === 52.5200 && dot.end.lng === 13.4050) endLabel = "Berlin";
    if (dot.end.lat === 40.4168 && dot.end.lng === -3.7038) endLabel = "Madrid";
    if (dot.end.lat === 41.9028 && dot.end.lng === 12.4964) endLabel = "Rome";
    if (dot.end.lat === 52.3676 && dot.end.lng === 4.9041) endLabel = "Amsterdam";
    if (dot.end.lat === 47.3769 && dot.end.lng === 8.5417) endLabel = "Zurich";
    
    return {
      start: { ...dot.start, label: dot.start.lat === 48.8566 && dot.start.lng === 2.3522 ? "France" : undefined },
      end: { ...dot.end, label: endLabel }
    };
  });

  return (
    <div className="w-full h-full relative">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
        alt="Carte mondiale illustrant la portée internationale des services logistiques Speed E Log"
        height={495}
        width={1056}
        draggable={false}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        style={{
          opacity,
          willChange: "auto",
          contain: "layout style paint",
        }}
      />
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 1056 495"
        width={1056}
        height={495}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        aria-hidden="true"
      >
        <MapPaths
          dots={mapDots}
          lineColor={lineColor}
          secondaryLineColor={secondaryLineColor}
          opacity={opacity}
          priority={priority}
        />
        <MapPoints
          dots={mapDots}
          lineColor={lineColor}
          secondaryLineColor={secondaryLineColor}
          dotColor={dotColor}
          secondaryDotColor={secondaryDotColor}
          opacity={opacity}
          priority={priority}
        />
        <MovingDots
          dots={mapDots}
          dotColor={dotColor}
          secondaryDotColor={secondaryDotColor}
          opacity={opacity}
          priority={priority}
        />
      </svg>
    </div>
  );
}
