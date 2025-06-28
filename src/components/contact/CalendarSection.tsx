
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

    return () => {
      window.removeEventListener('openCalendarAfterForm', handleFormSubmission);
    };
  }, []);

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

          {/* Main CTA Button - Utilisation des classes HubSpot CTA */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              className="hs-cta-trigger-button hs-cta-trigger-button-248269354213 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 h-14 rounded-full px-12 py-4 text-lg flex items-center justify-center mx-auto"
            >
              <Calendar className="h-6 w-6 mr-3" />
              Commencer mon analyse logistique gratuite
              <ArrowRight className="h-6 w-6 ml-3" />
            </button>
          </motion.div>

          <div className="mt-4 text-sm text-slate-500">
            📋 Étape 1: Analyse rapide → 📅 Étape 2: Rendez-vous automatique
          </div>

          {/* Trust indicators */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.9/5 satisfaction client</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>+200 entreprises accompagnées</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-50 blur-xl"></div>
      </motion.section>

      {/* Popup Component */}
      <CalendarBookingPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
};
