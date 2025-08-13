
import React, { memo } from "react";
import { motion } from "framer-motion";
import { projectPoint, createCurvedPath, getLineColor } from "./utils";
import { MapDot } from "./types";

interface MapPathsProps {
  dots: MapDot[];
  lineColor: string;
  secondaryLineColor: string;
}

const RawMapPaths: React.FC<MapPathsProps> = ({ dots, lineColor, secondaryLineColor }) => {
  return (
    <>
      {/* Define two reusable gradients instead of one per path to reduce DOM size */}
      <defs>
        <linearGradient id="path-gradient-primary" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={lineColor} stopOpacity="0.3" />
          <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
          <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
          <stop offset="100%" stopColor={lineColor} stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="path-gradient-secondary" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={secondaryLineColor} stopOpacity="0.3" />
          <stop offset="5%" stopColor={secondaryLineColor} stopOpacity="1" />
          <stop offset="95%" stopColor={secondaryLineColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryLineColor} stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {dots.map((dot, i) => {
        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
        const gradientId = i % 2 === 0 ? "path-gradient-primary" : "path-gradient-secondary";

        return (
          <motion.path
            key={`path-${i}`}
            d={createCurvedPath(startPoint, endPoint, i)}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="2.5"
            initial={{ pathLength: 0, opacity: 0.1 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{
              duration: 2.5,
              delay: 0.3 * i,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
          />
        );
      })}
    </>
  );
};

export const MapPaths = memo(RawMapPaths);
