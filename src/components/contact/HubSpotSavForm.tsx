
import React from "react";
import { useHubSpotForm } from "@/hooks/useHubSpotForm";

interface HubSpotSavFormProps {
  isModalOpen?: boolean;
}

export const HubSpotSavForm = ({ isModalOpen = true }: HubSpotSavFormProps) => {
  const containerRef = useHubSpotForm({
    portalId: "144571109",
    formId: "434e2703-cd85-4a7d-a84b-69d4b12f04d6",
    region: "eu1",
    isOpen: isModalOpen
  });

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Service Après-Vente</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour toute demande SAV</p>
      
      <div 
        ref={containerRef}
        className="min-h-[400px]"
        id="hubspot-sav-form-container"
      />
    </div>
  );
};

export default HubSpotSavForm;
