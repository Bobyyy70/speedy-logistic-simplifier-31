
import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export const CalendarSection = () => {
  return (
    <motion.section 
      className="bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-slate-200 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      data-calendar-section
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-3xl font-bold mb-3 text-slate-900 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          <Calendar className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
          Planifiez votre rendez-vous
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-2">
          Réservez un créneau de 15 minutes pour discuter de votre projet logistique avec notre équipe d'experts.
        </p>
      </div>
      
      <div className="w-full h-[650px] border border-slate-200 rounded-xl bg-white" style={{ overflow: 'hidden' }}>
        {/* Calendrier HubSpot avec configuration dynamique */}
        <div className="w-full h-full" style={{ overflow: 'hidden' }}>
          <iframe 
            src="https://meetings-eu1.hubspot.com/falmanzo?embed=true" 
            width="100%" 
            height="650" 
            className="border-0 w-full h-full"
            style={{ minHeight: '650px', width: '100%', display: 'block', border: 'none' }}
            loading="lazy"
            title="Planifier un rendez-vous"
            data-expected="hubspot-calendar"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </motion.section>
  );
};
