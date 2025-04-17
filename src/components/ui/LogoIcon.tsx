
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
  const logoPath = "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png";
  return <motion.img src={logoPath} alt="Speed E-Log Logo" initial={{
    opacity: 0,
    scale: 0.95
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.3
  }} whileHover={{
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }} className={cn(sizeClasses[size], "object-contain", className)} />;
};

export const LogoIconWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  const logoPath = "/lovable-uploads/3d8adc49-4128-4bd5-b325-3d0825d8685e.png";
  return <div className={cn("flex flex-col items-center", className)}>
    <motion.img 
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
      src={logoPath} 
      className="mb-1 object-scale-down" 
    />
  </div>;
};

export const HomeLogoWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  const logoPath = "/lovable-uploads/18100238-2c09-413e-85cf-c4c63bab6f9e.png";
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <motion.img 
        alt="Speed E-Log Home Logo"
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
        src={logoPath} 
        className="mb-1 object-scale-down" 
      />
    </div>
  );
};

export default LogoIcon;
