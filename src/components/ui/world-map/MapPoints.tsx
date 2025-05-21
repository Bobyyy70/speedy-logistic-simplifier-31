
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
        
        // Define animation variants to prevent function issues
        const pointVariants = {
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 0.9 }
        };
        
        const pulseVariants = {
          animate: {
            scale: [1, 2, 1],
            opacity: [0.6, 0.1, 0.6],
            strokeWidth: [1.5, 0.5, 1.5]
          }
        };
        
        const labelVariants = {
          hidden: { opacity: 0 },
          visible: { opacity: 0.9 }
        };
        
        return (
          <g key={`points-group-${i}`}>
            {/* Start point */}
            <g key={`start-${i}`}>
              {/* France highlight - special treatment for origin */}
              {dot.start.lat === 48.8566 && dot.start.lng === 2.3522 && (
                <motion.circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="5" 
                  fill="#F3BA2F"
                  variants={pointVariants}
                  initial="hidden"
                  animate="visible"
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
                variants={pointVariants}
                initial="hidden"
                animate="visible"
                transition={{ 
                  duration: 0.5,
                  delay: 0.2 * i,
                }}
              />
              
              {/* Pulse effect for origin point */}
              <motion.circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="3.5" 
                fill="transparent"
                stroke={currentColor}
                opacity="0.6"
                strokeWidth="1.5"
                animate={pulseVariants.animate}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
              
              {/* Add city label for France origin only */}
              {dot.start.lat === 48.8566 && dot.start.lng === 2.3522 && (
                <motion.text
                  x={startPoint.x + 8}
                  y={startPoint.y - 8}
                  fontSize="11"
                  fontWeight="500"
                  fill="#FFFFFF"
                  variants={labelVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1, delay: 0.5 }}
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
                variants={pointVariants}
                initial="hidden"
                animate="visible"
                transition={{ 
                  duration: 0.5,
                  delay: 0.2 * i + 2, // Appear after path animation
                }}
              />
              
              {/* Subtle glow effect for destination points */}
              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="6" 
                fill={`${currentColor}30`} // Semi-transparent version of the color
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.2 * i + 2.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
              
              {/* Add destination labels for notable destinations */}
              {dot.end.label && (
                <motion.text
                  x={endPoint.x + 8}
                  y={endPoint.y - 5}
                  fontSize="10"
                  fontWeight="500"
                  fill="#FFFFFF"
                  opacity="0.8"
                  textAnchor="start"
                  variants={{
                    hidden: { opacity: 0, y: endPoint.y - 10 },
                    visible: { opacity: 0.8, y: endPoint.y - 5 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ 
                    duration: 1, 
                    delay: 0.2 * i + 2.5,
                    ease: "easeOut"
                  }}
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
