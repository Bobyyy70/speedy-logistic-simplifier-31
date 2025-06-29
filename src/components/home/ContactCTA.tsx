
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HubSpotCTA } from "@/components/ui/HubSpotCTA";

export const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-sky-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat"></div>
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à simplifier votre logistique ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Obtenez votre devis personnalisé en quelques minutes et découvrez comment nous pouvons transformer votre chaîne logistique.
          </p>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <HubSpotCTA ctaId="248429698260">
              <span className="flex items-center text-white">
                Obtenir un devis personnalisé
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </HubSpotCTA>
          </motion.div>

          <p className="text-sm text-muted-foreground mt-4">
            Sans engagement • Réponse sous 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};
