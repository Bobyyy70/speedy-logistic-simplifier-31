import React from "react";
import { motion } from "framer-motion";
export const ContactHeader = () => {
  return <motion.div className="flex flex-col items-start justify-center space-y-4 mb-6" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="inline-block text-orange-700 dark:text-orange-300 px-3 py-1 text-sm mb-2 rounded-3xl bg-orange-100">
        Contactez-Nous
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Prêt à simplifier votre logistique ?</h2>
      <p className="text-base md:text-lg text-muted-foreground mb-4">Remplissez le formulaire ci-dessous pour obtenir un devis. Nos devis sont standardisées, aucune surprise, transparence 100%</p>
    </motion.div>;
};