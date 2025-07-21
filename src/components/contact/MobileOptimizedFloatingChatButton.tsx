
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useMobileOptimization } from "@/hooks/use-mobile-optimization";

export const MobileOptimizedFloatingChatButton = () => {
  const [isHubSpotLoaded, setIsHubSpotLoaded] = useState(false);
  const { isMobile, getOptimalTouchTarget } = useMobileOptimization();

  useEffect(() => {
    // Vérifier périodiquement si HubSpot est chargé
    const checkHubSpot = () => {
      console.log('🔍 Vérification HubSpot...', {
        HubSpotConversations: !!window.HubSpotConversations,
        widget: !!window.HubSpotConversations?.widget,
        open: !!window.HubSpotConversations?.widget?.open
      });

      if (window.HubSpotConversations?.widget?.open) {
        setIsHubSpotLoaded(true);
        console.log('✅ HubSpot chat prêt !');
        return true;
      }
      return false;
    };

    // Vérification immédiate
    if (!checkHubSpot()) {
      // Vérification périodique toutes les 500ms pendant 10 secondes max
      let attempts = 0;
      const maxAttempts = 20;
      
      const interval = setInterval(() => {
        attempts++;
        if (checkHubSpot() || attempts >= maxAttempts) {
          clearInterval(interval);
          if (attempts >= maxAttempts) {
            console.log('⚠️ HubSpot chat non disponible après 10 secondes');
          }
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, []);

  const openHubSpotChat = () => {
    console.log('🚀 Tentative d\'ouverture du chat...', { 
      isLoaded: isHubSpotLoaded,
      HubSpotConversations: !!window.HubSpotConversations 
    });

    if (window.HubSpotConversations?.widget?.open) {
      try {
        window.HubSpotConversations.widget.open();
        console.log('✅ Chat ouvert avec succès');
      } catch (error) {
        console.error('❌ Erreur lors de l\'ouverture du chat:', error);
      }
    } else {
      console.log('⚠️ Chat HubSpot non disponible - redirection vers contact');
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

  const buttonSize = getOptimalTouchTarget(56); // Base size 56px, min 48px on mobile

  return (
    <motion.button
      onClick={openHubSpotChat}
      className={cn(
        "fixed z-50 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group touch-manipulation",
        isMobile 
          ? "bottom-4 right-4" // Closer to edge on mobile to avoid interference with iOS Safari UI
          : "bottom-6 right-6"
      )}
      style={{
        width: `${buttonSize}px`,
        height: `${buttonSize}px`,
        minWidth: `${buttonSize}px`,
        minHeight: `${buttonSize}px`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: isMobile ? 1.05 : 1.1 }} // Less aggressive scaling on mobile
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className={cn(
        "group-hover:animate-pulse",
        isMobile ? "h-7 w-7" : "h-6 w-6"
      )} />
      
      {/* Tooltip - Better positioned for mobile */}
      <div className={cn(
        "absolute mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none",
        isMobile 
          ? "bottom-full right-0 max-w-[200px]" // Right-aligned and width constrained on mobile
          : "bottom-full right-0"
      )}>
        {isHubSpotLoaded ? 'Besoin d\'aide ? Discutons !' : 'Contactez-nous !'}
        <div className={cn(
          "absolute w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900",
          isMobile ? "top-full right-4" : "top-full right-4"
        )}></div>
      </div>
      
      {/* Pulse animation - Subtle on mobile */}
      <div className={cn(
        "absolute inset-0 rounded-full bg-blue-600 opacity-20",
        isMobile ? "animate-pulse" : "animate-ping"
      )}></div>
    </motion.button>
  );
};
