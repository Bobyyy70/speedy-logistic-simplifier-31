
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
  const mapDots = dots.map(dot => ({
    start: { ...dot.start, label: dot.start.lat === 48.8566 && dot.start.lng === 2.3522 ? "France" : undefined },
    end: { ...dot.end, label: undefined }
  }));

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
