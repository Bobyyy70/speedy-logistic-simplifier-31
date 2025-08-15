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

  const backgroundClass = backgroundVariant === 'white' ? 'bg-white' : 'bg-background';

  return (
    <section className={`py-16 md:py-24 lg:py-32 w-full ${backgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Text Content */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="font-bold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Livraisons{" "}
            <span className="text-muted-foreground">
              {"Internationales".split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Une logistique sans frontières pour votre e-commerce. Expédiez partout dans le monde avec la même simplicité qu'une livraison locale.
          </motion.p>
        </div>

        {/* World Map */}
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <WorldMap
            dots={[
              {
                start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
                end: { lat: -33.8688, lng: 151.2093 }, // Sydney
              },
              {
                start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
                end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              },
              {
                start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
                end: { lat: 55.7558, lng: 37.6173 }, // Moscow
              },
              {
                start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi, Kenya
              },
            ]}
            lineColor="#2F68F3"
            secondaryLineColor="#F3BA2F"
            opacity={0.75}
            dotColor="#2F68F3"
            secondaryDotColor="#F3BA2F"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button 
            variant="blue" 
            size="2xl" 
            className="shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 rounded-full"
            onClick={openModal}
          >
            Demander un devis personnalisé
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Quote Form Modal */}
      <QuoteFormModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
}