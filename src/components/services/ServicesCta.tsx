import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/contact/QuoteFormModal";
import { useQuoteModal } from "@/hooks/useQuoteModal";

export const ServicesCta: React.FC = () => {
  const { isOpen, openModal, closeModal } = useQuoteModal();

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
        <Button 
          variant="blue" 
          size="2xl" 
          className="shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 rounded-full"
          onClick={openModal}
        >
          Demander un Devis Personnalisé <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>

      {/* Quote Form Modal */}
      <QuoteFormModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};
