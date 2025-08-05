import React from "react";
import { motion } from "framer-motion";
import { InlineQuoteForm } from "@/components/contact/InlineQuoteForm";

export const ServicesCta: React.FC = () => {
  return (
    <section className="container mx-auto mt-8 md:mt-16 lg:mt-20 text-center px-4 py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          Prêt à transformer votre logistique e-commerce ?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Discutons de vos besoins spécifiques et voyons comment Speed E-Log peut vous aider à simplifier vos opérations et à vous concentrer sur votre croissance.
        </p>
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
          <InlineQuoteForm 
            title="Demander un Devis Personnalisé"
            description="Remplissez ce formulaire pour recevoir un devis adapté à vos besoins logistiques."
          />
        </div>
      </motion.div>
    </section>
  );
};
