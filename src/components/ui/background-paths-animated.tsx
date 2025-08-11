
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedOverlayProps {
  opacity?: number;
}

function buildPaths(position: number) {
  return Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.035,
    delay: i * 0.02,
  }));
}

function AnimatedPathsOverlay({ opacity = 0.3 }: AnimatedOverlayProps) {
  const leftPaths = React.useMemo(() => buildPaths(1), []);
  const rightPaths = React.useMemo(() => buildPaths(-1), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <motion.svg
        className="w-full h-full text-blue-200/70 dark:text-blue-700/20"
        viewBox="0 0 696 316"
        fill="none"
        style={{ position: "absolute", width: "200%", height: "200%", left: "-50%", top: "-50%", zIndex: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <title>Background Paths Animated</title>
        {[...leftPaths, ...rightPaths].map((path) => (
          <motion.path
            key={`p-${path.id}-${path.width}`}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={(0.1 + path.id * 0.01) * opacity}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: (0.1 + path.id * 0.01) * Math.min(1, opacity + 0.2) }}
            transition={{ duration: 1.2, delay: path.delay, ease: "easeOut" }}
          />)
        )}
      </motion.svg>
    </div>
  );
}

export default AnimatedPathsOverlay;
