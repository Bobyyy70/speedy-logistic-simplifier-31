
import React from "react";
import { motion } from "framer-motion";
import { projectPoint, getLineColor } from "./utils";
import { MapDot } from "./types";

interface MapPointsProps {
  dots: MapDot[];
  lineColor: string;
  secondaryLineColor: string;
}

export const MapPoints: React.FC<MapPointsProps> = ({ 
  dots, 
  lineColor, 
  secondaryLineColor 
}) => {
  return (
    <>
      {dots.map((dot, i) => {
        const currentColor = getLineColor(i, lineColor, secondaryLineColor);
        
        return (
          <g key={`points-group-${i}`}>
            {/* Start point */}
            <g key={`start-${i}`}>
              {/* France highlight - special treatment for origin */}
              {dot.start.lat === 48.8566 && dot.start.lng === 2.3522 && (
                <motion.circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="5" 
                  fill="#F3BA2F"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.2,
                  }}
                />
              )}
              <motion.circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3.5"
                fill={currentColor}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2 * i,
                }}
              />
              <motion.circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3.5" 
                fill={currentColor}
                opacity="0.6"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              {/* Add city label for France origin only */}
              {dot.start.lat === 48.8566 && dot.start.lng === 2.3522 && (
                <motion.text
                  x={projectPoint(dot.start.lat, dot.start.lng).x + 8}
                  y={projectPoint(dot.start.lat, dot.start.lng).y - 8}
                  fontSize="10"
                  fill="#FFFFFF"
                  opacity="0.8"
                  textAnchor="start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  France
                </motion.text>
              )}
            </g>
            
            {/* End point */}
            <g key={`end-${i}`}>
              <motion.circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="3.5"
                fill={currentColor}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2 * i + 2, // Appear after path animation
                }}
              />
              <motion.circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="3.5" 
                fill={currentColor}
                opacity="0.6"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duration: 2,
                  delay: 0.2 * i + 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              {/* Add destination labels for notable destinations */}
              {dot.end.label && (
                <motion.text
                  x={projectPoint(dot.end.lat, dot.end.lng).x + 8}
                  y={projectPoint(dot.end.lat, dot.end.lng).y - 5}
                  fontSize="9"
                  fill="#FFFFFF"
                  opacity="0.7"
                  textAnchor="start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 1, delay: 0.2 * i + 2.5 }}
                >
                  {dot.end.label}
                </motion.text>
              )}
            </g>
          </g>
        );
      })}
    </>
  );
};
