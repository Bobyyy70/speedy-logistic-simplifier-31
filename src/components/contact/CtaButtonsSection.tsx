
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CtaButtonsSectionProps {
  onContactClick: () => void;
  onSavClick: () => void;
}

export const CtaButtonsSection = ({ onContactClick, onSavClick }: CtaButtonsSectionProps) => {
  return (
    <motion.section 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div 
        className="bg-white border-2 border-slate-200 rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
        onClick={onContactClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="text-4xl mb-4 block">💬</span>
        <h3 className="text-xl font-semibold mb-2 text-slate-900">Formulaire de Contact</h3>
        <p className="text-slate-600 mb-6 text-sm">
          Décrivez votre projet et recevez une réponse personnalisée sous 24h
        </p>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg">
          Nous contacter
        </Button>
      </div>

      <div 
        className="bg-white border-2 border-slate-200 rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
        onClick={onSavClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="text-4xl mb-4 block">🛠️</span>
        <h3 className="text-xl font-semibold mb-2 text-slate-900">Service Après-Vente</h3>
        <p className="text-slate-600 mb-6 text-sm">
          Un problème avec votre commande ? Notre équipe SAV est là pour vous aider
        </p>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg">
          Contacter le SAV
        </Button>
      </div>
    </motion.section>
  );
};
