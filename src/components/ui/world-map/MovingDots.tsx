
import React from "react";
import { motion } from "framer-motion";
import { projectPoint } from "./utils";
import { MapDot } from "./types";

interface MovingDotsProps {
  dots: MapDot[];
}

export const MovingDots: React.FC<MovingDotsProps> = ({ dots }) => {
  return (
    <>
      {/* Fixed dots representing cities/points */}
      {dots.map((dot, i) => {
        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
        
        // Origin dot (pulsing effect)
        return (
          <React.Fragment key={`moving-dot-${i}`}>
            {/* Origin dot with advanced pulsing effect */}
            <motion.circle
              cx={startPoint.x}
              cy={startPoint.y}
              r="4"
              fill="url(#originGradient)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.7, 1, 0.7], 
                scale: [1, 1.3, 1],
                filter: [
                  "drop-shadow(0 0 3px rgba(47, 104, 243, 0.9))", 
                  "drop-shadow(0 0 10px rgba(47, 104, 243, 1))", 
                  "drop-shadow(0 0 3px rgba(47, 104, 243, 0.9))"
                ]
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            {/* Halo effect for origin */}
            <motion.circle
              cx={startPoint.x}
              cy={startPoint.y}
              r="8"
              fill="none"
              stroke="url(#haloGradient)"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.7, 0],
                scale: [0.8, 1.8, 0.8],
              }}
              transition={{
                duration: 4,
                delay: i * 0.3 + 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            {/* Destination dot with enhanced animation */}
            {dot.end.label && (
              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="3"
                fill="url(#destinationGradient)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                  filter: [
                    "drop-shadow(0 0 2px rgba(243, 186, 47, 0.7))",
                    "drop-shadow(0 0 8px rgba(243, 186, 47, 0.9))",
                    "drop-shadow(0 0 2px rgba(243, 186, 47, 0.7))"
                  ]
                }}
                transition={{
                  duration: 3.5,
                  delay: i * 0.4 + 0.7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            )}
            
            {/* Improved destination label with glow effect */}
            {dot.end.label && (
              <motion.text
                x={endPoint.x + 6}
                y={endPoint.y - 6}
                fontSize="9"
                fill="#FFFFFF"
                opacity="0.8"
                fontFamily="sans-serif"
                fontWeight="500"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.6, 0.9, 0.6],
                  filter: [
                    "drop-shadow(0 0 1px rgba(255,255,255,0.5))",
                    "drop-shadow(0 0 3px rgba(255,255,255,1))",
                    "drop-shadow(0 0 1px rgba(255,255,255,0.5))"
                  ]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3 + 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                {dot.end.label}
              </motion.text>
            )}
          </React.Fragment>
        );
      })}

      {/* Enhanced gradient definitions for dots with more vibrant colors */}
      <defs>
        <radialGradient id="originGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#4C8DFF" stopOpacity="1" />
          <stop offset="70%" stopColor="#2F68F3" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2F68F3" stopOpacity="0" />
        </radialGradient>
        
        <radialGradient id="haloGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#4C8DFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#4C8DFF" stopOpacity="0" />
        </radialGradient>
        
        <radialGradient id="destinationGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="70%" stopColor="#F3BA2F" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F3BA2F" stopOpacity="0" />
        </radialGradient>
      </defs>
    </>
  );
};
