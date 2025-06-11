
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, AlertCircle } from "lucide-react";

export const CalendarSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadHubSpotCalendar = () => {
      console.log('Chargement du calendrier HubSpot...');
      setIsLoading(true);
      setHasError(false);
      
      // Nettoyer les anciens scripts HubSpot meetings
      const existingScripts = document.querySelectorAll('script[src*="MeetingsEmbedCode"]');
      existingScripts.forEach(script => script.remove());

      // Supprimer les anciens conteneurs meetings
      const existingContainers = document.querySelectorAll('[data-src*="meetings-eu1.hubspot.com"]');
      existingContainers.forEach(container => {
        if (container.id !== 'hubspot-calendar-container') {
          container.remove();
        }
      });

      // Créer et charger le script HubSpot Meetings
      const script = document.createElement('script');
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.type = 'text/javascript';
      script.async = true;
      script.id = 'hs-meetings-script';
      
      script.onload = () => {
        console.log('Script HubSpot Meetings chargé avec succès');
        // Petit délai pour laisser le script s'initialiser
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      };

      script.onerror = () => {
        console.error('Échec du chargement du script HubSpot Meetings');
        setHasError(true);
        setIsLoading(false);
      };

      document.head.appendChild(script);
    };

    // Démarrer le chargement avec un petit délai
    const timer = setTimeout(loadHubSpotCalendar, 200);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    // Recharger la page pour réinitialiser complètement HubSpot
    window.location.reload();
  };

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
      
      <div className="min-h-[650px] border border-slate-200 rounded-xl overflow-hidden bg-white relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-slate-600">Chargement du calendrier HubSpot...</p>
            </div>
          </div>
        )}
        
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <p className="text-slate-600 mb-4">Erreur lors du chargement du calendrier</p>
              <button 
                onClick={handleRetry}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Réessayer
              </button>
            </div>
          </div>
        )}
        
        {/* Conteneur HubSpot Calendar avec l'approche recommandée */}
        <div 
          id="hubspot-calendar-container"
          className="meetings-iframe-container w-full h-full min-h-[650px]" 
          data-src="https://meetings-eu1.hubspot.com/falmanzo?embed=true"
        ></div>
      </div>
    </motion.section>
  );
};
