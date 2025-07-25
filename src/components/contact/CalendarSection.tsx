
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
      
      <div className="min-h-[500px] md:min-h-[650px] border border-slate-200 rounded-xl overflow-hidden bg-white">
        {/* Calendrier HubSpot avec votre code d'intégration */}
        <div className="meetings-iframe-container w-full h-full min-h-[500px] md:min-h-[650px]" data-src="https://meetings-eu1.hubspot.com/falmanzo?embed=true"></div>
      </div>
    </motion.section>
  );
};
