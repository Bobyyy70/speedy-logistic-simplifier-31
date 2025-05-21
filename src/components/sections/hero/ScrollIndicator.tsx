
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
        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        animate={{ boxShadow: ["0 0 0 rgba(255,255,255,0.1)", "0 0 10px rgba(255,255,255,0.3)", "0 0 0 rgba(255,255,255,0.1)"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-gradient-to-b from-white to-white/70 rounded-full mt-2"
          animate={{ 
            y: [0, 12, 0],
            scale: [1, 1.2, 1],
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
      
      {/* Texte "Scroll" avec apparition progressive */}
      <motion.p 
        className="text-xs text-white/50 mt-2 text-center font-light tracking-wider"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: [0, 1, 0], y: [5, 0, 5] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatDelay: 0.5,
          ease: "easeInOut" 
        }}
      >
        SCROLL
      </motion.p>
    </motion.div>
  );
}
