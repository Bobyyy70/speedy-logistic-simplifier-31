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
  return <motion.img src="/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" alt="Speed E-Log Logo" initial={{
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
  return <div className={cn("flex flex-col items-center", className)}>
      <motion.img alt="Speed E-Log Logo with Text" width={140} initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.3
    }} className="mb-1 object-contain" src="/lovable-uploads/be317568-d1d2-426a-9ba8-a9ec38ab2e67.png" />
    </div>;
};
export const HomeLogoWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  return <div className={cn("flex flex-col items-center", className)}>
      <motion.img alt="Speed E-Log Logo with Text" width={200} initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.3
    }} className="mb-1 object-contain" src="/lovable-uploads/e02c63d7-a1f7-49cc-90d1-86018630f4de.png" />
    </div>;
};
export default LogoIcon;