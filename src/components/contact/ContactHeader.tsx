
import React from "react";
import { motion } from "framer-motion";

export const ContactHeader = () => {
  return (
    <>
      <motion.div 
        className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm mb-2">
          Contactez-Nous
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Prêt à simplifier votre logistique ?</h1>
        <p className="text-base md:text-lg text-center text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
          Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé ou discuter de vos besoins spécifiques. 
          Notre équipe vous répondra dans les plus brefs délais.
        </p>
      </motion.div>
    </>
  );
};
