
import React from "react";

interface HubSpotSavFormProps {
  isModalOpen?: boolean;
}

export const HubSpotSavForm = ({ isModalOpen = true }: HubSpotSavFormProps) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Service Après-Vente</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour toute demande SAV</p>
      
      <div 
        className="hs-form-frame min-h-[400px]"
        data-hs-src-iframe="true"
        data-target="#hubspot-sav-form"
        data-hs-form-portal-id="144571109"
        data-hs-form-id="434e2703-cd85-4a7d-a84b-69d4b12f04d6"
        data-hs-form-region="eu1"
      >
        <div className="flex items-center justify-center h-20">
          <div className="text-muted-foreground">Chargement du formulaire...</div>
        </div>
      </div>
    </div>
  );
};

export default HubSpotSavForm;
