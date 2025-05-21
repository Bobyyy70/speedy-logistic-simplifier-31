
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
        
        return (
          <React.Fragment key={`moving-dot-group-${i}`}>
            {/* Main moving dot - simplified animation */}
            <motion.circle
              key={`moving-dot-${i}`}
              cx={startPoint.x}
              cy={startPoint.y}
              r={2}
              fill="#FFFFFF"
              animate={{
                cx: [startPoint.x, endPoint.x],
                cy: [startPoint.y, endPoint.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + (i * 0.3),
                delay: 1 + (i * 0.5),
                repeat: Infinity,
                repeatDelay: 2,
                times: [0, 0.5, 1]
              }}
            />
            
            {/* Pulse effect at destination - simplified */}
            <motion.circle
              key={`pulse-dot-${i}`}
              cx={endPoint.x}
              cy={endPoint.y}
              r={2}
              fill="transparent"
              stroke="#FFFFFF"
              animate={{
                r: [2, 8, 2],
                opacity: [0, 0.5, 0],
                strokeWidth: [1, 0.2, 1],
              }}
              transition={{
                duration: 2,
                delay: 5 + (i * 0.5),
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
