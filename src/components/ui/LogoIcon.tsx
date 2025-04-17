
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
  const logoPath = "/lovable-uploads/bbf853d2-2eb8-479c-9fd0-3d87a8e9e230.png";
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
  const logoPath = "/lovable-uploads/bbf853d2-2eb8-479c-9fd0-3d87a8e9e230.png";
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
  const logoPath = "/lovable-uploads/bbf853d2-2eb8-479c-9fd0-3d87a8e9e230.png";
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

