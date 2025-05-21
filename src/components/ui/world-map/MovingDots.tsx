
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
            {/* Origin dot with pulsing effect */}
            <motion.circle
              cx={startPoint.x}
              cy={startPoint.y}
              r="3"
              fill="url(#originGradient)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                filter: ["drop-shadow(0 0 1px #FFFFFF80)", "drop-shadow(0 0 3px #FFFFFF)", "drop-shadow(0 0 1px #FFFFFF80)"]
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            {/* Destination dot with subtle animation */}
            {dot.end.label && (
              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="2"
                fill="url(#destinationGradient)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3 + 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
            
            {/* Optional destination label */}
            {dot.end.label && (
              <motion.text
                x={endPoint.x + 5}
                y={endPoint.y - 5}
                fontSize="8"
                fill="#FFFFFF"
                opacity="0.7"
                fontFamily="sans-serif"
                fontWeight="300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{
                  duration: 1,
                  delay: i * 0.3 + 1,
                }}
              >
                {dot.end.label}
              </motion.text>
            )}
          </React.Fragment>
        );
      })}

      {/* Gradient definitions for dots */}
      <defs>
        <radialGradient id="originGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#2F68F3" stopOpacity="1" />
          <stop offset="100%" stopColor="#2F68F3" stopOpacity="0.3" />
        </radialGradient>
        
        <radialGradient id="destinationGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#F3BA2F" stopOpacity="1" />
          <stop offset="100%" stopColor="#F3BA2F" stopOpacity="0.3" />
        </radialGradient>
      </defs>
    </>
  );
};
