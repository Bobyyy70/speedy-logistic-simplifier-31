"use client";
import React from "react";
import { MovingBorder } from "./moving-border";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}

export function AnimatedButton({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: AnimatedButtonProps) {
  return (
    <Component
      className={cn(
        "bg-transparent relative h-12 md:h-14 px-6 md:px-8 overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%" />
      </div>

      <div
        className={cn(
          "relative bg-gradient-to-br from-blue-600 via-orange-400/20 to-green-500 hover:from-blue-700 hover:via-orange-500/30 hover:to-green-600 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased transition-all duration-300",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}
