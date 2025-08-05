import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { InlineQuoteForm } from "@/components/contact/InlineQuoteForm";

export const ServicesHero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-8 items-center justify-center px-4 max-w-4xl mx-auto"
        >
          <div className="text-3xl md:text-7xl font-bold text-white text-center">
            Nos Services
            <div className="text-lg md:text-xl text-neutral-200 py-4 max-w-3xl text-center">
              Une logistique e-commerce complète et sur mesure pour faire grandir votre business sereinement.
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 w-full max-w-2xl">
            <InlineQuoteForm 
              title="Obtenir un devis personnalisé"
              description="Découvrez comment nos services peuvent transformer votre logistique e-commerce."
            />
          </div>

          <button 
            className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2"
            onClick={() => {
              const servicesSection = document.getElementById('services-content');
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            En savoir plus
          </button>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};