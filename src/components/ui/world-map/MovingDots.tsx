
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
      {dots.map((dot, i) => {
        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
        
        // Calculate a midpoint for bezier curve movement
        const midX = (startPoint.x + endPoint.x) / 2;
        const midY = Math.min(startPoint.y, endPoint.y) - 30 - (i * 5);
        
        return (
          <React.Fragment key={`moving-dot-group-${i}`}>
            {/* Main moving dot */}
            <motion.circle
              key={`moving-dot-${i}`}
              cx={startPoint.x}
              cy={startPoint.y}
              r="2.5"
              fill="#FFFFFF"
              initial={{ opacity: 0 }}
              animate={{
                cx: [startPoint.x, midX, endPoint.x],
                cy: [startPoint.y, midY, endPoint.y],
                opacity: [0, 1, 0],
                r: [2, 3, 2],
              }}
              transition={{
                duration: 4 + (i * 0.5),
                delay: 1 + (i * 0.8),
                repeat: Infinity,
                repeatDelay: 2 + (i * 0.5),
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
            
            {/* Trailing dot (smaller) */}
            <motion.circle
              key={`moving-dot-trail-${i}`}
              cx={startPoint.x}
              cy={startPoint.y}
              r="1.5"
              fill="#FFFFFF"
              opacity={0.7}
              initial={{ opacity: 0 }}
              animate={{
                cx: [startPoint.x, midX, endPoint.x],
                cy: [startPoint.y, midY, endPoint.y],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 4 + (i * 0.5),
                delay: 1.2 + (i * 0.8),
                repeat: Infinity,
                repeatDelay: 2 + (i * 0.5),
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
            
            {/* Pulse effect at destination */}
            <motion.circle
              key={`pulse-dot-${i}`}
              cx={endPoint.x}
              cy={endPoint.y}
              r="2"
              fill="transparent"
              stroke="#FFFFFF"
              strokeWidth="1"
              initial={{ opacity: 0, r: 2 }}
              animate={{
                opacity: [0, 0.5, 0],
                r: [2, 10, 2],
                strokeWidth: [1, 0.2, 1]
              }}
              transition={{
                duration: 3,
                delay: 5 + (i * 0.8),
                repeat: Infinity,
                repeatDelay: 3 + (i * 0.5),
                ease: "easeOut"
              }}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
