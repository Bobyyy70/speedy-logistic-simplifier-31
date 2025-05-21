
import React from "react";
import { motion } from "framer-motion";

export function HeroCard() {
  return (
    <motion.div 
      className="lg:order-last relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-orange-500/30 rounded-lg blur-md"
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      ></motion.div>
      <motion.div 
        className="relative bg-gradient-to-r from-slate-900/80 via-slate-950/70 to-slate-900/80 shadow-xl p-6 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 rounded"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      >
        <h3 className="font-semibold text-lg mb-2 text-white">Speed E-Log vous accompagne dans la gestion complète de votre e-commerce.</h3>
        <p className="text-gray-300">Notre expertise 3PL garantit une optimisation maximale de votre chaîne logistique.</p>
        
        {/* Add animated stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm p-3 rounded"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <p className="text-sm text-gray-400">Taux de livraison</p>
            <p className="text-xl font-semibold text-white">99.8%</p>
          </motion.div>
          <motion.div 
            className="bg-white/5 backdrop-blur-sm p-3 rounded"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <p className="text-sm text-gray-400">Pays desservis</p>
            <p className="text-xl font-semibold text-white">180+</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
