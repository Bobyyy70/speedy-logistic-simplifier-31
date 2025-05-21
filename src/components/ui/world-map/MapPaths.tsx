
import React from "react";
import { motion } from "framer-motion";
import { projectPoint, createCurvedPath, getLineColor } from "./utils";
import { MapDot } from "./types";

interface MapPathsProps {
  dots: MapDot[];
  lineColor: string;
  secondaryLineColor: string;
}

export const MapPaths: React.FC<MapPathsProps> = ({ 
  dots, 
  lineColor, 
  secondaryLineColor 
}) => {
  return (
    <>
      {dots.map((dot, i) => {
        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
        const currentColor = getLineColor(i, lineColor, secondaryLineColor);
        const pathId = `path-${i}`;
        
        return (
          <g key={`path-group-${i}`}>
            {/* Main visible path - animation simplifiée */}
            <motion.path
              id={pathId}
              d={createCurvedPath(startPoint, endPoint, i)}
              fill="none"
              stroke={currentColor}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{
                duration: 1,
                delay: 0.3 * i,
              }}
            />
            
            {/* Path gradient definition */}
            <defs>
              <linearGradient id={`path-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={currentColor} stopOpacity="0.3" />
                <stop offset="50%" stopColor={currentColor} stopOpacity="1" />
                <stop offset="100%" stopColor={currentColor} stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </g>
        );
      })}
    </>
  );
};
