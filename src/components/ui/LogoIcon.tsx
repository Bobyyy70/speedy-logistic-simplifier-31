
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
  
  return <motion.img 
    src="/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" 
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
    className={cn(sizeClasses[size], "object-contain", className)} 
  />;
};

// Composant de logo avec texte principal (celui que vous avez sélectionné)
export const LogoIconWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  return <div className={cn("flex flex-col items-center", className)}>
      <motion.img 
        src="/lovable-uploads/1e40acc5-0282-4821-8805-e6ec5630d09a.png" 
        alt="Speed E-Log Logo with Text" 
        width={140} 
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
        className="mb-1 object-contain" 
      />
    </div>;
};

// Nouveau composant dissocié pour le logo spécifique que vous avez ciblé
export const HomeLogoWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  return <div className={cn("flex flex-col items-center", className)}>
      <motion.img 
        src="/lovable-uploads/1e40acc5-0282-4821-8805-e6ec5630d09a.png" 
        alt="Speed E-Log Logo with Text" 
        width={140} 
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
        className="mb-1 object-contain" 
      />
    </div>;
};

export default LogoIcon;
