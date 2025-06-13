
import React from "react";
import { useHubSpotForm } from "@/hooks/useHubSpotForm";

interface HubSpotContactFormProps {
  isModalOpen?: boolean;
}

export const HubSpotContactForm = ({ isModalOpen = true }: HubSpotContactFormProps) => {
  const { containerRef, targetId, isReady } = useHubSpotForm({
    formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
    isModalOpen
  });

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Contactez-nous</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour nous contacter</p>
      
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

export default HubSpotContactForm;
