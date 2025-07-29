
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const FloatingChatButton = () => {
  const [isHubSpotLoaded, setIsHubSpotLoaded] = useState(false);

  useEffect(() => {
    // Optimized HubSpot check with reduced frequency
    const checkHubSpot = () => {
      if (window.HubSpotConversations?.widget?.open) {
        setIsHubSpotLoaded(true);
        return true;
      }
      return false;
    };

    // Immediate check
    if (!checkHubSpot()) {
      // Reduced frequency check - every 1s for 8 seconds max
      let attempts = 0;
      const maxAttempts = 8;
      
      const interval = setInterval(() => {
        attempts++;
        if (checkHubSpot() || attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  const openHubSpotChat = () => {
    // Opening HubSpot chat

    if (window.HubSpotConversations?.widget?.open) {
      try {
        window.HubSpotConversations.widget.open();
        // Chat opened successfully
      } catch (error) {
        // Chat opening error handled
      }
    } else {
      // HubSpot chat unavailable - fallback to contact
      // Fallback : scroll vers le calendrier sur la page contact
      if (window.location.pathname === '/contact') {
        const calendarSection = document.querySelector('[data-calendar-section]');
        if (calendarSection) {
          calendarSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.location.href = '/contact';
      }
    }
  };

  return (
    <motion.button
      onClick={openHubSpotChat}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group min-h-[56px] min-w-[56px] touch-manipulation"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {isHubSpotLoaded ? 'Besoin d\'aide ? Discutons !' : 'Contactez-nous !'}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
      </div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
    </motion.button>
  );
};
