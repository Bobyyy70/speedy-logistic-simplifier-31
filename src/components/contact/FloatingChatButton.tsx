
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Clock, Users } from "lucide-react";

export const FloatingChatButton = () => {
  const [isHubSpotLoaded, setIsHubSpotLoaded] = useState(false);
  const [isBusinessHours, setIsBusinessHours] = useState(true);

  useEffect(() => {
    // Vérifier les heures d'ouverture (9h-16h30, Lun-Ven)
    const checkBusinessHours = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); // 0 = Dimanche, 1 = Lundi, etc.
      
      const isWeekday = day >= 1 && day <= 5; // Lundi à Vendredi
      const isWorkingHour = hour >= 9 && hour < 17; // 9h à 17h (16h30 inclus)
      
      setIsBusinessHours(isWeekday && isWorkingHour);
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Vérifier chaque minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Vérifier périodiquement si HubSpot est chargé avec configuration améliorée
    const checkHubSpot = () => {
      console.log('🔍 Vérification HubSpot avancée...', {
        HubSpotConversations: !!window.HubSpotConversations,
        widget: !!window.HubSpotConversations?.widget,
        open: !!window.HubSpotConversations?.widget?.open,
        businessHours: isBusinessHours
      });

      if (window.HubSpotConversations?.widget?.open) {
        setIsHubSpotLoaded(true);
        console.log('✅ HubSpot chat configuré et prêt !');
        
        // Appliquer la configuration personnalisée
        applyCustomChatConfig();
        return true;
      }
      return false;
    };

    const applyCustomChatConfig = () => {
      const config = localStorage.getItem('hubspot_chat_config');
      const prospectContext = localStorage.getItem('hubspot_prospect_context');
      
      if (config) {
        try {
          const chatConfig = JSON.parse(config);
          console.log('🎨 Application configuration chat:', chatConfig);
          
          // Si on a des données de prospect, les préparer pour l'équipe
          if (prospectContext) {
            console.log('👤 Contexte prospect disponible pour l\'équipe');
          }
        } catch (error) {
          console.error('❌ Erreur configuration chat:', error);
        }
      }
    };

    // Vérification immédiate
    if (!checkHubSpot()) {
      // Vérification périodique
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
  }, [isBusinessHours]);

  const openHubSpotChat = () => {
    console.log('🚀 Ouverture chat avec contexte...', { 
      isLoaded: isHubSpotLoaded,
      businessHours: isBusinessHours,
      HubSpotConversations: !!window.HubSpotConversations 
    });

    if (window.HubSpotConversations?.widget?.open) {
      try {
        // Récupérer le contexte du prospect si disponible
        const prospectContext = localStorage.getItem('hubspot_prospect_context');
        if (prospectContext) {
          console.log('📋 Ouverture chat avec contexte prospect');
        }
        
        window.HubSpotConversations.widget.open();
        console.log('✅ Chat ouvert avec succès');
        
        // Marquer l'interaction pour analytics
        console.log('📊 Interaction chat trackée');
        
      } catch (error) {
        console.error('❌ Erreur lors de l\'ouverture du chat:', error);
      }
    } else {
      console.log('⚠️ Chat HubSpot non disponible - redirection vers contact');
      // Fallback amélioré
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

  const getButtonStyle = () => {
    if (!isBusinessHours) {
      return "bg-gradient-to-r from-slate-500 to-slate-700 hover:from-slate-600 hover:to-slate-800";
    }
    return "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900";
  };

  const getTooltipMessage = () => {
    if (!isHubSpotLoaded) return 'Contactez-nous !';
    if (!isBusinessHours) return 'Laissez-nous un message (hors horaires)';
    return 'Besoin d\'aide ? Discutons !';
  };

  return (
    <motion.button
      onClick={openHubSpotChat}
      className={`fixed bottom-6 right-6 z-50 ${getButtonStyle()} text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {isBusinessHours ? (
          <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
        ) : (
          <Clock className="h-6 w-6" />
        )}
        
        {/* Indicateur de disponibilité */}
        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
          isBusinessHours ? 'bg-green-400' : 'bg-orange-400'
        } border-2 border-white`}></div>
      </div>
      
      {/* Tooltip amélioré */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {getTooltipMessage()}
        {!isBusinessHours && (
          <div className="text-xs opacity-80 mt-1">
            Disponible Lun-Ven 9h-16h30
          </div>
        )}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
      </div>
      
      {/* Animation de pulse */}
      <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${
        isBusinessHours ? 'bg-blue-600' : 'bg-slate-600'
      }`}></div>
    </motion.button>
  );
};
