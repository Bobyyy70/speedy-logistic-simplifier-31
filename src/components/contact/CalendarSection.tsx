
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Star, CheckCircle, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarBookingPopup } from "./CalendarBookingPopup";

export const CalendarSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Écouter l'événement de redirection automatique après soumission du formulaire
    const handleFormSubmission = () => {
      setIsPopupOpen(true);
    };

    window.addEventListener('openCalendarAfterForm', handleFormSubmission);

    // Charger le CTA HubSpot
    const loadHubSpotCTA = () => {
      if (window.hbspt && window.hbspt.cta) {
        window.hbspt.cta.load(144571109, '248429698260', {
          "useNewLoader": "true",
          "region": "eu1"
        });
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

      return () => {
        clearInterval(checkHubSpot);
        window.removeEventListener('openCalendarAfterForm', handleFormSubmission);
      };
    }

    return () => {
      window.removeEventListener('openCalendarAfterForm', handleFormSubmission);
    };
  }, []);

  const handleButtonClick = () => {
    console.log('Bouton cliqué - ouverture du calendrier');
    setIsPopupOpen(true);
  };

  const benefits = [
    {
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      text: "Consultation gratuite de 15 minutes"
    },
    {
      icon: <Users className="h-5 w-5 text-blue-600" />,
      text: "Échange avec un expert logistique"
    },
    {
      icon: <Clock className="h-5 w-5 text-purple-600" />,
      text: "Réponse sous 24h garantie"
    }
  ];

  return (
    <>
      <motion.section 
        className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        data-calendar-section
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        
        {/* Hero CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            Consultation gratuite
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Optimisez votre logistique en{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              15 minutes
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Commencez par notre analyse rapide, puis réservez votre consultation personnalisée. 
            Analysons ensemble vos défis logistiques et trouvons les solutions adaptées à votre e-commerce.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200"
              >
                {benefit.icon}
                <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* HubSpot CTA Button avec style personnalisé */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <span className="hs-cta-wrapper" id="hs-cta-wrapper-248429698260">
              <span className="hs-cta-node hs-cta-248429698260 hs-cta-trigger-button hs-cta-trigger-button-248429698260" 
                    id="hs-cta-248429698260"
                    style={{
                      background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                      color: 'white',
                      fontWeight: 'bold',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                      transition: 'all 0.3s ease',
                      height: '56px',
                      borderRadius: '9999px',
                      padding: '16px 48px',
                      fontSize: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      cursor: 'pointer',
                      border: 'none',
                      textDecoration: 'none'
                    }}>
                <Calendar className="h-6 w-6 mr-3" />
                Commencer mon analyse logistique gratuite
                <ArrowRight className="h-6 w-6 ml-3" />
              </span>
            </span>
          </motion.div>

          <div className="mt-4 text-sm text-slate-500">
            📋 Étape 1: Analyse rapide → 📅 Étape 2: Rendez-vous automatique
          </div>

          {/* Trust indicators */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-50 blur-xl"></div>
      </motion.section>

      {/* Popup Component */}
      <CalendarBookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};
