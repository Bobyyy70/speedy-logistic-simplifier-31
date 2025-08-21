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
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        style={{
          opacity,
          willChange: "auto",
          contain: "layout style paint",
        }}
      />
      
      <MapPaths />
      <MapPoints />
      <MovingDots dots={dots} />
    </div>
  );
}
