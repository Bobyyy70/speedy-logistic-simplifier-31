// Backup of ContactHeader component
import React from "react";
import { motion } from "framer-motion";

export const ContactHeader = () => {
  // Animation de texte lettre par lettre
  const titleText = "Prêt à simplifier votre logistique ?";
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div 
      className="flex flex-col items-start justify-center space-y-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="inline-block px-5 py-2 text-sm font-medium mb-3 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(135deg, rgba(243, 186, 47, 0.2) 0%, rgba(243, 186, 47, 0.6) 100%)",
            border: "1px solid rgba(243, 186, 47, 0.3)",
            boxShadow: "0 0 15px rgba(243, 186, 47, 0.2)",
          }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500 font-semibold">
            Contactez-Nous
          </span>
          
          {/* Effet néon autour du badge */}
          <motion.div
            className="absolute inset-0 rounded-full -z-10"
            animate={{ 
              boxShadow: ["0 0 5px rgba(243, 186, 47, 0)", "0 0 20px rgba(243, 186, 47, 0.3)", "0 0 5px rgba(243, 186, 47, 0)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
      
      <motion.h2 
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {titleText.split("").map((char, index) => (
          <motion.span 
            key={index} 
            variants={letterVariants}
            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>
      
      <motion.p 
        className="text-base md:text-lg text-white/80 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <span className="relative">
          Remplissez le formulaire ci-dessous pour obtenir un devis. 
          <motion.span 
            className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1 }}
          />
        </span>
        {" "}
        <span className="font-medium text-orange-300">Nos devis sont standardisés, aucune surprise, transparence 100%</span>
      </motion.p>
    </motion.div>
  );
};
