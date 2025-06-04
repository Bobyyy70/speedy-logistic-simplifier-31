import React from "react";
import { motion } from "framer-motion";
export function ScrollIndicator() {
  return <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 1,
    delay: 1.5
  }}>
      
    </motion.div>;
}