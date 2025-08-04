import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { QuoteFormModal } from "@/components/contact/QuoteFormModal";
import { useQuoteModal } from "@/hooks/useQuoteModal";

export const ServicesHero: React.FC = () => {
  const { isOpen, openModal, closeModal } = useQuoteModal();

  return (
    <AuroraBackground className="min-h-[65vh] h-auto py-16 md:py-24" keepExistingBackground={true}>
      <div className="container mx-auto relative px-4 flex flex-col items-center justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6">
            Fulfilment e-commerce : <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">la solution logistique</span> complète pour votre boutique en ligne
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto">
            Des solutions sur mesure pour gérer efficacement votre chaîne logistique.
            <span className="block mt-2">Concentrez-vous sur votre cœur de métier, nous nous occupons du reste.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button 
              variant="blue" 
              size="2xl" 
              className="shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 rounded-full"
              onClick={openModal}
            >
              Obtenir un devis personnalisé
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2 group"
              asChild
            >
              <Link to="#services">
                En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]"></div>
          <div className="w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-[80px] absolute -top-20 right-[20%]"></div>
        </div>
      </div>

      {/* Quote Form Modal */}
      <QuoteFormModal isOpen={isOpen} onClose={closeModal} />
    </AuroraBackground>
  );
};
