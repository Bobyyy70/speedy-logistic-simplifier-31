
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
        
        // Define animation variants to prevent function issues
        const dotVariants = {
          start: { cx: startPoint.x, cy: startPoint.y, opacity: 0, r: 2 },
          middle: { cx: midX, cy: midY, opacity: 1, r: 3 },
          end: { cx: endPoint.x, cy: endPoint.y, opacity: 0, r: 2 }
        };

        const trailVariants = {
          start: { cx: startPoint.x, cy: startPoint.y, opacity: 0, r: 1.5 },
          middle: { cx: midX, cy: midY, opacity: 0.7, r: 1.5 },
          end: { cx: endPoint.x, cy: endPoint.y, opacity: 0, r: 1.5 }
        };

        const pulseVariants = {
          start: { cx: endPoint.x, cy: endPoint.y, r: 2, opacity: 0, strokeWidth: 1 },
          pulse: { cx: endPoint.x, cy: endPoint.y, r: 10, opacity: 0.5, strokeWidth: 0.2 },
          end: { cx: endPoint.x, cy: endPoint.y, r: 2, opacity: 0, strokeWidth: 1 }
        };
        
        return (
          <React.Fragment key={`moving-dot-group-${i}`}>
            {/* Main moving dot */}
            <motion.circle
              key={`moving-dot-${i}`}
              variants={dotVariants}
              initial="start"
              animate={["start", "middle", "end"]}
              fill="#FFFFFF"
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
              variants={trailVariants}
              initial="start"
              animate={["start", "middle", "end"]}
              fill="#FFFFFF"
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
              variants={pulseVariants}
              initial="start"
              animate={["start", "pulse", "end"]}
              fill="transparent"
              stroke="#FFFFFF"
              transition={{
                duration: 3,
                delay: 5 + (i * 0.8),
                repeat: Infinity,
                repeatDelay: 3 + (i * 0.5),
                ease: "easeOut",
                times: [0, 0.5, 1]
              }}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
