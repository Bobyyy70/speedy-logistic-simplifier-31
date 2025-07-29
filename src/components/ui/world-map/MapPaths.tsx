
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
        
        return (
          <g key={`path-group-${i}`}>
            <motion.path
              d={createCurvedPath(startPoint, endPoint, i)}
              fill="none"
              stroke={`url(#path-gradient-${i})`}
              strokeWidth="2.5"
              strokeDasharray="0 1"
              initial={{ 
                pathLength: 0,
                opacity: 0
              }}
              animate={{ 
                pathLength: 1,
                opacity: 0.8,
                strokeDasharray: ["0 1", "1 0", "0 1"]
              }}
              style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
              transition={{
                pathLength: { duration: 2, delay: i * 0.5, ease: "easeInOut" },
                opacity: { duration: 1, delay: i * 0.5 },
                strokeDasharray: { 
                  duration: 4, 
                  delay: i * 0.5 + 2, 
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
              key={`start-upper-${i}`}
            ></motion.path>
            <defs>
              <linearGradient id={`path-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={currentColor} stopOpacity="0.2" />
                <stop offset="2%" stopColor={currentColor} stopOpacity="0.8" />
                <stop offset="50%" stopColor={currentColor} stopOpacity="1" />
                <stop offset="98%" stopColor={currentColor} stopOpacity="0.8" />
                <stop offset="100%" stopColor={currentColor} stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </g>
        );
      })}
    </>
  );
};
