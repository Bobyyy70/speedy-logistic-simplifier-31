
import React from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";

export function HeroCard() {
  return (
    <motion.div 
      className="lg:order-last relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <motion.div 
        className="absolute -inset-1.5 bg-gradient-to-r from-[#2F68F3]/30 to-[#F3BA2F]/30 rounded-xl blur-md"
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
        className="relative glass-card backdrop-blur-md bg-slate-900/70 shadow-xl p-6 border border-white/10 rounded-lg overflow-hidden"
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2F68F3] to-[#F3BA2F]"></div>
        
        <h3 className="font-semibold text-lg mb-2 text-white">
          Speed E-Log vous accompagne dans la gestion complète de votre e-commerce.
        </h3>
        
        <p className="text-gray-300 mb-5">
          Notre expertise 3PL garantit une optimisation maximale de votre chaîne logistique.
        </p>
        
        {/* Enhanced stats with icons */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm p-3 rounded border border-white/10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="h-4 w-4 text-[#2F68F3]" />
              <p className="text-sm text-gray-400">Taux de livraison</p>
            </div>
            <p className="text-xl font-semibold text-white">99.8%</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-sm p-3 rounded border border-white/10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Clock className="h-4 w-4 text-[#F3BA2F]" />
              <p className="text-sm text-gray-400">Pays desservis</p>
            </div>
            <p className="text-xl font-semibold text-white">180+</p>
          </motion.div>
        </div>

        {/* Add a badge */}
        <div className="absolute top-0 right-0 transform">
          <motion.div 
            className="bg-[#F3BA2F] text-slate-900 text-xs font-bold px-2 py-1 rounded-sm"
            initial={{ scale: 0, rotate: 15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 2, type: "spring" }}
          >
            NOUVEAU
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
