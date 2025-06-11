
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, HelpCircle } from "lucide-react";

interface CtaButtonsSectionProps {
  onContactClick: () => void;
  onSavClick: () => void;
}

export const CtaButtonsSection = ({ onContactClick, onSavClick }: CtaButtonsSectionProps) => {
  return (
    <motion.section 
      className="grid md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Formulaire de Contact */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <div className="text-center">
          <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-slate-900">
            Formulaire de Contact
          </h3>
          <p className="text-slate-600 mb-6">
            Obtenez un devis personnalisé pour vos besoins logistiques
          </p>
          <Button 
            onClick={onContactClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Demander un devis
          </Button>
        </div>
      </div>

      {/* Service Après-Vente */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <div className="text-center">
          <HelpCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-slate-900">
            Service Après-Vente
          </h3>
          <p className="text-slate-600 mb-6">
            Un problème avec votre commande ? Contactez notre équipe SAV
          </p>
          <Button 
            onClick={onSavClick}
            variant="outline"
            className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Contacter le SAV
          </Button>
        </div>
      </div>
    </motion.section>
  );
};
