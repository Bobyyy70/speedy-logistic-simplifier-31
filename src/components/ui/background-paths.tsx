
"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BackgroundPathsProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  opacity?: number;
  preserveBackground?: boolean;
}

function FloatingPaths({ position, opacity = 0.15 }: { position: number; opacity?: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.4 + i * 0.03, // Lignes légèrement plus épaisses pour être visibles mais subtiles
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <svg
        className="w-full h-full text-blue-100 dark:text-blue-900/30" 
        viewBox="0 0 696 316"
        fill="none"
        style={{ position: 'absolute', width: '180%', height: '180%', left: '-40%', top: '-40%' }}
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={(0.08 + path.id * 0.008) * opacity} // Opacité subtile mais visible
            initial={{ pathLength: 0.3, opacity: 0.3 }}
            animate={{
              pathLength: 1,
              opacity: [0.15, 0.3, 0.15], // Variation d'opacité subtile
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 25 + Math.random() * 15, // Animation très lente pour plus de subtilité
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
  opacity = 0.15, // Opacité par défaut subtile
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
