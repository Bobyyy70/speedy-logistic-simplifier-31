
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, AlertCircle } from "lucide-react";

export const CalendarSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadHubSpotCalendar = () => {
      console.log('Début du chargement du calendrier HubSpot...');
      
      // Nettoyer les anciens scripts
      const existingScripts = document.querySelectorAll('script[src*="MeetingsEmbedCode"]');
      existingScripts.forEach(script => script.remove());

      // Nettoyer le conteneur
      const container = document.getElementById('hubspot-calendar-embed');
      if (container) {
        container.innerHTML = '';
      }

      const script = document.createElement('script');
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.async = true;
      
      script.onload = () => {
        console.log('Script HubSpot chargé avec succès');
        
        // Attendre que le script soit prêt
        const initCalendar = () => {
          if ((window as any).hbspt && (window as any).hbspt.meetings) {
            try {
              console.log('Initialisation du calendrier...');
              (window as any).hbspt.meetings.create({
                portalId: "144571109",
                meetingId: "falmanzo",
                target: "#hubspot-calendar-embed"
              });
              setIsLoading(false);
              console.log('Calendrier initialisé avec succès');
            } catch (error) {
              console.error('Erreur lors de l\'initialisation du calendrier:', error);
              setHasError(true);
              setIsLoading(false);
            }
          } else {
            console.log('HubSpot meetings API pas encore disponible, nouvel essai...');
            setTimeout(initCalendar, 500);
          }
        };

        setTimeout(initCalendar, 100);
      };

      script.onerror = () => {
        console.error('Échec du chargement du script HubSpot');
        setHasError(true);
        setIsLoading(false);
      };

      document.head.appendChild(script);
    };

    // Démarrer le chargement après un court délai
    const timer = setTimeout(loadHubSpotCalendar, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.section 
      className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 flex items-center justify-center gap-3">
          <Calendar className="h-8 w-8 text-blue-600" />
          Planifiez votre rendez-vous
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Réservez un créneau de 15 minutes pour discuter de votre projet logistique avec notre équipe d'experts.
        </p>
      </div>
      
      <div className="min-h-[600px] border border-slate-200 rounded-xl overflow-hidden bg-white relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-slate-600">Chargement du calendrier...</p>
            </div>
          </div>
        )}
        
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <p className="text-slate-600 mb-4">Erreur lors du chargement du calendrier</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Recharger la page
              </button>
            </div>
          </div>
        )}
        
        <div 
          id="hubspot-calendar-embed"
          className="w-full h-full min-h-[600px]" 
        ></div>
      </div>
    </motion.section>
  );
};
