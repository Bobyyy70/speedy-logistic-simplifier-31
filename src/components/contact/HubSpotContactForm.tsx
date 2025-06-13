
import React from "react";

export const HubSpotContactForm = () => {
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
