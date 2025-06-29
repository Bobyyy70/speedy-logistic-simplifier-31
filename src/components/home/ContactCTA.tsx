import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ContactCTA = () => {
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
                Obtenir un devis personnalisé
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </span>
          </motion.div>

          <p className="text-sm text-muted-foreground mt-4">
            Sans engagement • Réponse sous 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};
