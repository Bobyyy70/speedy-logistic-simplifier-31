
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
      {/* Fixed dots to avoid animation issues */}
      {dots.map((dot, i) => {
        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
        
        return (
          <motion.circle
            key={`moving-dot-${i}`}
            cx={startPoint.x}
            cy={startPoint.y}
            r="2"
            fill="#FFFFFF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.2
            }}
          />
        );
      })}
    </>
  );
};
