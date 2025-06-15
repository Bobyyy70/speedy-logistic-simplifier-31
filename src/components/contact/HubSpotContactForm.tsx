
import React from "react";
import { useHubSpotForm } from "@/hooks/useHubSpotForm";

interface HubSpotContactFormProps {
  isModalOpen?: boolean;
}

export const HubSpotContactForm = ({ isModalOpen = true }: HubSpotContactFormProps) => {
  const containerRef = useHubSpotForm({
    portalId: "144571109",
    formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
    region: "eu1",
    isOpen: isModalOpen
  });

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Contactez-nous</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour nous contacter</p>
      
      <div 
        ref={containerRef}
        className="min-h-[400px]"
        id="hubspot-contact-form-container"
      />
    </div>
  );
};

export default HubSpotContactForm;
