
import React, { useEffect } from "react";

export const HubSpotSavForm = () => {
  useEffect(() => {
    // Charger le script HubSpot pour les formulaires
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/144571109.js';
    script.defer = true;
    script.onload = () => {
      console.log('HubSpot SAV script loaded');
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup si nécessaire
      const existingScript = document.querySelector('script[src*="144571109.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Service Après-Vente</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour toute demande SAV</p>
      
      <div 
        className="hs-form-frame" 
        data-region="eu1" 
        data-form-id="434e2703-cd85-4a7d-a84b-69d4b12f04d6" 
        data-portal-id="144571109"
      ></div>
    </div>
  );
};

export default HubSpotSavForm;
