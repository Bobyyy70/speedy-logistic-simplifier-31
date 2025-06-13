
import React from "react";
import { useHubSpotForm } from "@/hooks/useHubSpotForm";

interface HubSpotSavFormProps {
  isModalOpen?: boolean;
}

export const HubSpotSavForm = ({ isModalOpen = true }: HubSpotSavFormProps) => {
  const { containerRef, targetId, isReady } = useHubSpotForm({
    formId: "434e2703-cd85-4a7d-a84b-69d4b12f04d6",
    isModalOpen
  });

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Service Après-Vente</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour toute demande SAV</p>
      
      {!isReady && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-muted-foreground">Chargement du formulaire...</span>
        </div>
      )}
      
      <div 
        ref={containerRef}
        id={targetId}
        className={isReady ? 'block' : 'hidden'}
      />
    </div>
  );
};

export default HubSpotSavForm;
