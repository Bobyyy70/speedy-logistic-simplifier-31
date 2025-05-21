
import React from "react";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
    >
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <motion.div 
          className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
