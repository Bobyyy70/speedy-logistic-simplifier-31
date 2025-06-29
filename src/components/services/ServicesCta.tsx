import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServicesCta: React.FC = () => {
  React.useEffect(() => {
    // Charger le CTA HubSpot
    const loadHubSpotCTA = () => {
      if (window.hbspt && window.hbspt.cta) {
        window.hbspt.cta.load();
      }
    };

    // Charger immédiatement si HubSpot est déjà disponible
    if (window.hbspt) {
      loadHubSpotCTA();
    } else {
      // Sinon attendre que HubSpot soit chargé
      const checkHubSpot = setInterval(() => {
        if (window.hbspt && window.hbspt.cta) {
          clearInterval(checkHubSpot);
          loadHubSpotCTA();
        }
      }, 500);

      return () => clearInterval(checkHubSpot);
    }
  }, []);

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
        
        <span className="hs-cta-wrapper" id="hs-cta-wrapper-248429698260">
          <span className="hs-cta-node hs-cta-248429698260 hs-cta-trigger-button hs-cta-trigger-button-248429698260" 
                id="hs-cta-248429698260"
                style={{
                  background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 25px 50px -12px rgba(47, 104, 243, 0.25)',
                  transition: 'all 0.3s ease',
                  height: '56px',
                  borderRadius: '9999px',
                  padding: '16px 48px',
                  fontSize: '18px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: 'none',
                  textDecoration: 'none'
                }}>
            Demander un Devis Personnalisé
            <ArrowRight className="ml-2 h-5 w-5" />
          </span>
        </span>
      </motion.div>
    </section>
  );
};
