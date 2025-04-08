
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LogoIcon: React.FC<{
  className?: string;
  size?: "sm" | "md" | "lg";
}> = ({
  className = "",
  size = "md"
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <motion.img 
      src="/lovable-uploads/1e40acc5-0282-4821-8805-e6ec5630d09a.png"
      alt="Speed E-Log Logo"
      initial={{
        opacity: 0,
        scale: 0.95
      }} 
      animate={{
        opacity: 1,
        scale: 1
      }} 
      transition={{
        duration: 0.3
      }} 
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2
        }
      }} 
      className={cn(sizeClasses[size], "my-0", className)}
    />
  );
};

export const LogoIconWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <motion.img 
        src="/lovable-uploads/1e40acc5-0282-4821-8805-e6ec5630d09a.png"
        alt="Speed E-Log Logo with Text"
        width={180}
        initial={{
          opacity: 0,
          scale: 0.95
        }} 
        animate={{
          opacity: 1,
          scale: 1
        }} 
        transition={{
          duration: 0.3
        }}
        className="mb-1"
      />
    </div>
  );
};

export default LogoIcon;
