
import React, { useId } from "react";

interface HubSpotSavFormProps {
  isModalOpen?: boolean;
}

export const HubSpotSavForm = ({ isModalOpen = true }: HubSpotSavFormProps) => {
  const uniqueId = useId();
  const formId = `hubspot-sav-form-${uniqueId.replace(/:/g, '-')}`;

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Service Après-Vente</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour toute demande SAV</p>
      
      <div 
        id={formId}
        className="hs-form-frame" 
        data-region="eu1" 
        data-form-id="434e2703-cd85-4a7d-a84b-69d4b12f04d6" 
        data-portal-id="144571109"
      />
    </div>
  );
};

export default HubSpotSavForm;
