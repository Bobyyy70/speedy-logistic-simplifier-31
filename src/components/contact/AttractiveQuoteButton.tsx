import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AttractiveQuoteModal } from "./AttractiveQuoteModal";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface AttractiveQuoteButtonProps {
  className?: string;
  variant?: "default" | "floating" | "hero";
  size?: "sm" | "md" | "lg";
}

export const AttractiveQuoteButton: React.FC<AttractiveQuoteButtonProps> = ({ 
  className = "", 
  variant = "default",
  size = "md" 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const buttonVariants = {
    default: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
    floating: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl shadow-green-500/25",
    hero: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
  };

  const sizeVariants = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  if (variant === "floating") {
    return (
      <>
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            delay: 2,
            duration: 0.6,
            type: "spring",
            stiffness: 200
          }}
        >
          <motion.button
            onClick={openModal}
            className={`
              ${buttonVariants[variant]}
              ${sizeVariants[size]}
              text-white font-semibold rounded-full
              flex items-center gap-2
              transition-all duration-300
              transform hover:scale-110
              border-2 border-white/20
              backdrop-blur-sm
              ${className}
            `}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 30px rgba(34, 197, 94, 0.3)",
                "0 15px 40px rgba(34, 197, 94, 0.4)",
                "0 10px 30px rgba(34, 197, 94, 0.3)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Zap className="h-5 w-5" />
            <span>Devis gratuit</span>
            
            {/* Effet de pulsation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-green-400/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
        
        <AttractiveQuoteModal isOpen={isModalOpen} onClose={closeModal} />
      </>
    );
  }

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        <Button
          onClick={openModal}
          className={`
            ${buttonVariants[variant]}
            ${sizeVariants[size]}
            text-white font-semibold rounded-xl
            shadow-lg hover:shadow-xl
            transition-all duration-300
            border-0
            relative overflow-hidden
            group
            ${className}
          `}
        >
          {/* Effet de brillance au survol */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span>Obtenir mon devis gratuit</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </span>
        </Button>
      </motion.div>
      
      <AttractiveQuoteModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};