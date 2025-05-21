
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
      {/* Add moving dots along paths for more dynamic effect */}
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
            animate={{
              cx: [startPoint.x, endPoint.x],
              cy: [startPoint.y, endPoint.y],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              delay: 1 + (i * 0.5),
              repeat: Infinity,
              repeatDelay: 2 + (i * 0.5),
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
        );
      })}
    </>
  );
};
