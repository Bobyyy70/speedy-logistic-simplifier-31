
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
        className="w-7 h-12 border-2 border-white/40 rounded-full flex justify-center"
        animate={{ 
          boxShadow: [
            "0 0 0 rgba(255,255,255,0.1)", 
            "0 0 15px rgba(47,104,243,0.5)", 
            "0 0 5px rgba(243,186,47,0.3)", 
            "0 0 0 rgba(255,255,255,0.1)"
          ] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
      
      {/* Texte "Scroll" avec animation néon */}
      <motion.p 
        className="text-xs mt-3 text-center font-light tracking-widest"
        initial={{ opacity: 0, y: 5 }}
        animate={{ 
          opacity: [0.5, 1, 0.5], 
          y: [5, 0, 5],
          textShadow: [
            "0 0 0px #ffffff", 
            "0 0 5px #2F68F3", 
            "0 0 0px #ffffff"
          ]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatDelay: 0.5,
          ease: "easeInOut" 
        }}
        style={{
          color: "#ffffff"
        }}
      >
        SCROLL
      </motion.p>
    </motion.div>
  );
}
