
import React, { useRef } from "react";
import { MapPaths } from "./MapPaths";
import { MapPoints } from "./MapPoints";
import { MovingDots } from "./MovingDots";
import { MapProps } from "./types";
import { useDottedMap } from "./useDottedMap";
import { DEFAULT_DOTS } from "./constants";


export function WorldMap({
  dots = [],
  lineColor = "#2F68F3",
  secondaryLineColor = "#F3BA2F",
  opacity = 0.85,
  dotColor = "#2F68F3",
  secondaryDotColor = "#F3BA2F",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { svgMap } = useDottedMap();


  // If no points are provided, use default ones
  const activeDots = dots.length > 0 ? dots : DEFAULT_DOTS;


    return (
      <div className="w-full h-full rounded-lg relative font-sans">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className={"h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"}
          alt="Carte mondiale illustrant la portée internationale des services logistiques Speed E-Log"
          height="495"
          width="1056"
          draggable={false}
          decoding="async"
          style={{ opacity }}
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
