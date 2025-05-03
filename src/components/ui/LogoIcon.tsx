
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
  return <motion.img 
    src={logoPath} 
    alt="Speed E-Log Logo" 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
    className={cn(sizeClasses[size], "object-contain", className)}
  />;
};

export const LogoIconWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  // Utilisation du nouveau logo fourni par l'utilisateur
  const logoPath = "/lovable-uploads/5c1b4538-57b0-4f38-af9e-dda22195de74.png";
  return <div className={cn("flex flex-col items-center", className)}>
    <motion.img 
      src={logoPath}
      alt="Speed E-Log Logo with Text" 
      width={180} 
      height={40}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="object-contain h-[40px]" 
    />
  </div>;
};

export const HomeLogoWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  const logoPath = "/lovable-uploads/83cc9529-aa94-4f8a-851d-02ea52cc3c71.png";
  return <div className={cn("flex items-center", className)}>
      
    </div>;
};

export default LogoIcon;
