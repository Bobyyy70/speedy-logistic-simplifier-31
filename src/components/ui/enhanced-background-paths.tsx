
"use client";

import { motion } from "framer-motion";
import React, { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface EnhancedBackgroundPathsProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  opacity?: number;
  preserveBackground?: boolean;
  particleDensity?: number;
  particleColor?: string;
  speed?: number;
}

// Floating sparkle component
const Sparkle = ({ 
  size, 
  position, 
  color = "#8EB8FF", 
  speed = 5,
  delay = 0
}: { 
  size: number; 
  position: { x: number; y: number }; 
  color?: string;
  speed?: number;
  delay?: number;
}) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
      }}
      initial={{ 
        opacity: 0,
        scale: 0 
      }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
};

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
    width: 0.5 + i * 0.035,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <svg
        className="w-full h-full text-blue-200/70 dark:text-blue-700/20" 
        viewBox="0 0 696 316"
        fill="none"
        style={{ 
          position: 'absolute', 
          width: '200%', 
          height: '200%', 
          left: '-50%', 
          top: '-50%',
          zIndex: 0 
        }}
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={(0.1 + path.id * 0.01) * opacity}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.4, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 30 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function EnhancedBackgroundPaths({
  className,
  children,
  opacity = 0.3,
  preserveBackground = true,
  particleDensity = 25,
  particleColor = "#8EB8FF",
  speed = 5,
  ...props
}: EnhancedBackgroundPathsProps) {
  const [sparkles, setSparkles] = useState<Array<{
    id: number;
    size: number;
    position: { x: number; y: number };
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate random sparkles
    const newSparkles = Array.from({ length: particleDensity }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1, // Size between 1-4px
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      delay: Math.random() * 10,
    }));
    
    setSparkles(newSparkles);
  }, [particleDensity]);

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
        
        {/* Sparkles layer */}
        {sparkles.map((sparkle) => (
          <Sparkle
            key={sparkle.id}
            size={sparkle.size}
            position={sparkle.position}
            color={particleColor}
            speed={speed}
            delay={sparkle.delay}
          />
        ))}
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
