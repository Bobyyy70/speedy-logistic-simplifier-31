
import React, { useEffect } from "react";

export const CalendarContainer = () => {
  useEffect(() => {
    // Charger le script HubSpot Meetings s'il n'est pas déjà chargé
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    
    // Vérifier si le script n'est pas déjà présent
    const existingScript = document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]');
    if (!existingScript) {
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup si nécessaire
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 font-medium">
          📅 Sélectionnez votre créneau préféré
        </p>
        <p className="text-blue-700 text-sm mt-1">
          Consultation gratuite de 15 minutes avec nos experts logistique.
        </p>
      </div>
      
      <div className="min-h-[650px] border border-slate-200 rounded-xl overflow-hidden bg-white">
        {/* HubSpot Meetings Embed */}
        <div className="meetings-iframe-container" data-src="https://speedelog.net/meetings/falmanzo?embed=true"></div>
      </div>
    </div>
  );
};
