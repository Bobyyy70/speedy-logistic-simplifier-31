
import React from "react";

export const CalendarContainer = () => {
  return (
    <div className="space-y-4">
      <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
        <p className="text-green-800 font-medium">
          ✅ Merci ! Nous avons bien reçu vos informations.
        </p>
        <p className="text-green-700 text-sm mt-1">
          Choisissez maintenant votre créneau de rendez-vous.
        </p>
      </div>
      
      <div className="min-h-[650px] border border-slate-200 rounded-xl overflow-hidden bg-white">
        {/* HubSpot Calendar */}
        <div className="meetings-iframe-container w-full h-full min-h-[650px]" data-src="https://meetings-eu1.hubspot.com/falmanzo?embed=true"></div>
      </div>
    </div>
  );
};
