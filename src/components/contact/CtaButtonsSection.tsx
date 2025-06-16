
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CtaButtonsSectionProps {
  onContactClick: () => void;
  onSavClick: () => void;
}

export const CtaButtonsSection = ({ onContactClick, onSavClick }: CtaButtonsSectionProps) => {
  const scrollToCalendar = () => {
    const calendarSection = document.querySelector('[data-calendar-section]');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openSavChat = () => {
    // Ouvrir le chatbot HubSpot pour le SAV
    if (window.HubSpotConversations) {
      window.HubSpotConversations.widget.open();
    }
  };

  return (
    <motion.section 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div 
        className="bg-white border-2 border-slate-200 rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
        onClick={scrollToCalendar}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="text-4xl mb-4 block">📅</span>
        <h3 className="text-xl font-semibold mb-2 text-slate-900">Réserver un Rendez-vous</h3>
        <p className="text-slate-600 mb-6 text-sm">
          Planifiez une consultation de 15 minutes pour discuter de vos besoins logistiques
        </p>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg">
          Voir le calendrier
        </Button>
      </div>

      <div 
        className="bg-white border-2 border-slate-200 rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
        onClick={openSavChat}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="text-4xl mb-4 block">💬</span>
        <h3 className="text-xl font-semibold mb-2 text-slate-900">Support Client</h3>
        <p className="text-slate-600 mb-6 text-sm">
          Besoin d'aide ? Notre équipe SAV est disponible pour répondre à vos questions
        </p>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg">
          Ouvrir le chat
        </Button>
      </div>
    </motion.section>
  );
};
