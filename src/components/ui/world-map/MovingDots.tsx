
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
            {/* Main moving dot - simplifié */}
            <motion.circle
              key={`moving-dot-${i}`}
              cx={startPoint.x}
              cy={startPoint.y}
              r={2}
              fill="#FFFFFF"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{
                duration: 1,
                delay: 0.5 + (i * 0.2),
              }}
            />
            
            {/* Point de destination - simplifié */}
            <motion.circle
              key={`dest-dot-${i}`}
              cx={endPoint.x}
              cy={endPoint.y}
              r={2}
              fill="#FFFFFF"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{
                duration: 1,
                delay: 2 + (i * 0.2),
              }}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
