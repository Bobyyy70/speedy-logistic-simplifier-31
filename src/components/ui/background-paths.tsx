
"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BackgroundPathsProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  opacity?: number;
  preserveBackground?: boolean;
}

function FloatingPaths({ position, opacity = 0.5 }: { position: number; opacity?: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 1.0 + i * 0.05, // Increased line thickness
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <svg
        className="w-full h-full text-blue-500 dark:text-blue-400" 
        viewBox="0 0 696 316"
        fill="none"
        style={{ position: 'absolute', width: '200%', height: '200%', left: '-50%', top: '-50%' }}
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={(0.3 + path.id * 0.02) * opacity} // Increased base opacity
            initial={{ pathLength: 0.3, opacity: 0.7 }}
            animate={{
              pathLength: 1,
              opacity: [0.5, 0.8, 0.5], // Increased animation opacity
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 6, // Slightly faster animation
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  className,
  children,
  opacity = 0.5, // Increased default opacity
  preserveBackground = true,
  ...props
}: BackgroundPathsProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        !preserveBackground && "bg-white dark:bg-neutral-950",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} opacity={opacity} />
        <FloatingPaths position={-1} opacity={opacity} />
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
