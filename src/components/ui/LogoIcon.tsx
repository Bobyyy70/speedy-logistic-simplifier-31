
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LogoIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  return (
    <motion.svg
      width="250"
      height="250"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6 sm:h-8 sm:w-8", className)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <path
        d="M125 50L75 80.9808V142.942L125 173.923L175 142.942V80.9808L125 50Z"
        stroke="currentColor"
        strokeWidth="10"
        className="text-primary"
      />
      <path
        d="M75 80.9808L125 111.962L175 80.9808"
        stroke="currentColor"
        strokeWidth="10"
        className="text-accent-foreground"
      />
      <path
        d="M125 111.962V173.923"
        stroke="currentColor"
        strokeWidth="10"
        className="text-accent-foreground"
      />
    </motion.svg>
  );
};

export const LogoIconWithText: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className="flex items-center space-x-2">
      <LogoIcon />
      <motion.div 
        className="text-lg sm:text-xl font-bold"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        SPEED E-LOG
      </motion.div>
    </div>
  );
};

export default LogoIcon;
