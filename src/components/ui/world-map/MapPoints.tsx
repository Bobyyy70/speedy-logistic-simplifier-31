
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
        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
        
        return (
          <g key={`points-group-${i}`}>
            {/* Start point */}
            <g key={`start-${i}`}>
              {/* France highlight - version simplifiée */}
              {dot.start.lat === 48.8566 && dot.start.lng === 2.3522 && (
                <motion.circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="5" 
                  fill="#F3BA2F"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.2,
                  }}
                />
              )}
              <motion.circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="3.5"
                fill={currentColor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2,
                }}
              />
              
              {/* Étiquette France */}
              {dot.start.lat === 48.8566 && dot.start.lng === 2.3522 && (
                <motion.text
                  x={startPoint.x + 8}
                  y={startPoint.y - 8}
                  fontSize="11"
                  fontWeight="500"
                  fill="#FFFFFF"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 1 }}
                >
                  France
                </motion.text>
              )}
            </g>
            
            {/* End point */}
            <g key={`end-${i}`}>
              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="3.5"
                fill={currentColor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.5,
                }}
              />
              
              {/* Étiquettes de destination */}
              {dot.end.label && (
                <motion.text
                  x={endPoint.x + 8}
                  y={endPoint.y - 5}
                  fontSize="10"
                  fontWeight="500"
                  fill="#FFFFFF"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 1 }}
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
