
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LogoIcon: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  return <motion.svg 
    width="300" 
    height="300" 
    viewBox="0 0 250 250" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
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
    className={cn("my-0", className)}
  >
    <path d="M125 50L75 80.9808V142.942L125 173.923L175 142.942V80.9808L125 50Z" stroke="currentColor" strokeWidth="10" className="text-blue-600 dark:text-blue-400" />
    <path d="M75 80.9808L125 111.962L175 80.9808" stroke="currentColor" strokeWidth="10" className="text-blue-600/80 dark:text-blue-400/80" />
    <path d="M125 111.962V173.923" stroke="currentColor" strokeWidth="10" className="text-blue-600/60 dark:text-blue-400/60" />
  </motion.svg>;
};

export const LogoIconWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  return <div className="flex items-center space-x-2">
    <LogoIcon />
    <motion.div 
      initial={{
        opacity: 0,
        x: -5
      }} 
      animate={{
        opacity: 1,
        x: 0
      }} 
      transition={{
        duration: 0.3,
        delay: 0.1
      }} 
      className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400"
    >
      SPEED E-LOG
    </motion.div>
  </div>;
};

export default LogoIcon;
