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
    }} src="/lovable-uploads/f1857faa-e92e-4c2f-8baa-f5d3ce99f322.png" className="mb-1 object-scale-down" />
    </div>;
};
export const HomeLogoWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  return <div className="px-[240px] py-[92px] mx-0 my-0 rounded-none bg-emerald-200">
      <motion.img alt="Speed E-Log Logo with Text" width={300} initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.3
    }} src="/lovable-uploads/44bd1cbe-178d-4cd7-8783-f02ff7d4d5a5.png" className="mb-1 object-fill" />
    </div>;
};
export default LogoIcon;