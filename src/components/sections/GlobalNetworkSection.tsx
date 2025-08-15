import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map/component";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/contact/QuoteFormModal";
import { useQuoteModal } from "@/hooks/useQuoteModal";

interface GlobalNetworkSectionProps {
  backgroundVariant?: 'white' | 'site';
}

export function GlobalNetworkSection({ backgroundVariant = 'site' }: GlobalNetworkSectionProps) {
  const { isOpen, openModal, closeModal } = useQuoteModal();

  // Points de livraison internationaux pour la carte
  const globalShippingPoints = [
    {
      start: { lat: 48.8566, lng: 2.3522, label: "France" },
      end: { lat: 40.7128, lng: -74.006, label: "New York" }
    },
    {
      start: { lat: 48.8566, lng: 2.3522 },
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney" }
    },
    {
      start: { lat: 48.8566, lng: 2.3522 },
      end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }
    },
    {
      start: { lat: 48.8566, lng: 2.3522 },
      end: { lat: 55.7558, lng: 37.6173, label: "Moscow" }
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-0 relative overflow-hidden bg-white">
      {/* Fond avec carte du monde plus visible */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <WorldMap 
          dots={globalShippingPoints} 
          lineColor="#2F68F3"
          secondaryLineColor="#F3BA2F"
          opacity={0.6}
          dotColor="#2F68F3"
          secondaryDotColor="#F3BA2F"
        />
      </div>
      
      <div className="section-container py-0 my-0 px-4 md:px-8 relative z-10">
        <motion.div 
          className="section-box text-center max-w-3xl mx-auto backdrop-blur-sm bg-white/80 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 12
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-orange-500">
              Prêt à optimiser votre logistique ?
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment Speed E Log peut transformer votre chaîne logistique.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Button 
              variant="blue" 
              size="2xl" 
              className="mx-auto shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 rounded-full"
              onClick={openModal}
            >
              Obtenir un devis personnalisé 
              <ArrowRight className="ml-2 h-5 w-5 text-white transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Quote Form Modal */}
      <QuoteFormModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}