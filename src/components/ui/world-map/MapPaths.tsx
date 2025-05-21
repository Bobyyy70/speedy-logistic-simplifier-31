
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
            {/* Main visible path - simplified animation */}
            <motion.path
              id={pathId}
              d={createCurvedPath(startPoint, endPoint, i)}
              fill="none"
              stroke={`url(#path-gradient-${i})`}
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.1 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{
                duration: 2.5,
                delay: 0.3 * i,
                ease: "easeOut",
              }}
            />
            
            {/* Subtle glow effect path - simplified */}
            <motion.path
              d={createCurvedPath(startPoint, endPoint, i)}
              fill="none"
              stroke={currentColor}
              strokeWidth="6"
              strokeLinecap="round"
              strokeOpacity="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.15 }}
              transition={{
                duration: 3,
                delay: 0.3 * i,
                ease: "easeOut",
              }}
            />
            
            {/* Path gradient definition */}
            <defs>
              <linearGradient id={`path-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={currentColor} stopOpacity="0.3" />
                <stop offset="5%" stopColor={currentColor} stopOpacity="1" />
                <stop offset="95%" stopColor={currentColor} stopOpacity="1" />
                <stop offset="100%" stopColor={currentColor} stopOpacity="0.3" />
              </linearGradient>
              
              <linearGradient
                id={`dash-gradient-${i}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={currentColor} stopOpacity="0.1" />
                <stop offset="50%" stopColor={currentColor} stopOpacity="0.6" />
                <stop offset="100%" stopColor={currentColor} stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </g>
        );
      })}
    </>
  );
};
