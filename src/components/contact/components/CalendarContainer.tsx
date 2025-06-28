
import React, { useEffect } from "react";

export const CalendarContainer = () => {
  useEffect(() => {
    // Ensure HubSpot meetings script is loaded and initialize the calendar
    const initializeCalendar = () => {
      if (window.hbspt) {
        // Find the container and initialize the calendar
        const container = document.querySelector('.meetings-iframe-container');
        if (container && container.getAttribute('data-src')) {
          const src = container.getAttribute('data-src');
          container.innerHTML = `<iframe src="${src}" width="100%" height="650" frameborder="0"></iframe>`;
        }
      } else {
        // If HubSpot script isn't loaded yet, try again in a moment
        setTimeout(initializeCalendar, 500);
      }
    };

    if (document.readyState === 'complete') {
      initializeCalendar();
    } else {
      window.addEventListener('load', initializeCalendar);
      return () => window.removeEventListener('load', initializeCalendar);
    }
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
        {/* HubSpot Calendar - Using direct iframe */}
        <iframe 
          src="https://meetings-eu1.hubspot.com/falmanzo?embed=true"
          width="100%" 
          height="650" 
          frameBorder="0"
          title="Réserver votre consultation"
          className="w-full h-full min-h-[650px]"
        />
      </div>
    </div>
  );
};
