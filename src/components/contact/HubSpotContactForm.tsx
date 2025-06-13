
import React, { useEffect } from "react";

export const HubSpotContactForm = () => {
  useEffect(() => {
    // Charger le script HubSpot pour les formulaires
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/144571109.js';
    script.defer = true;
    script.onload = () => {
      console.log('HubSpot Contact script loaded');
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
      <h2 className="text-xl font-semibold mb-2">Contactez-nous</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour nous contacter</p>
      
      <div 
        className="hs-form-frame" 
        data-region="eu1" 
        data-form-id="ebf2ad52-915e-4bfa-b4c0-a2ff8480054f" 
        data-portal-id="144571109"
      ></div>
    </div>
  );
};

export default HubSpotContactForm;
