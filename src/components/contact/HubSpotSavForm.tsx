
import React from "react";

export const HubSpotSavForm = () => {
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
