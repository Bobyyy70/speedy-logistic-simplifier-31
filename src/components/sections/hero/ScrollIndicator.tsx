
import React from "react";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <motion.div 
        className="w-7 h-12 border-2 border-slate-400 rounded-full flex justify-center overflow-hidden"
      >
        <motion.div 
          className="w-2 h-2 rounded-full mt-2"
          style={{
            background: "linear-gradient(to bottom, #2F68F3, #F3BA2F)"
          }}
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.8, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <motion.p 
        className="text-xs mt-3 text-center font-medium tracking-wide overflow-hidden whitespace-nowrap"
        initial={{ opacity: 0, y: 4 }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{ 
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut" 
        }}
        style={{
          color: "#333333"
        }}
      >
        Découvrir plus
      </motion.p>
    </motion.div>
  );
}
