
import React from "react";

interface HubSpotContactFormProps {
  isModalOpen?: boolean;
}

export const HubSpotContactForm = ({ isModalOpen = true }: HubSpotContactFormProps) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Contactez-nous</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour nous contacter</p>
      
      <div 
        className="hs-form-frame min-h-[400px]"
        data-hs-src-iframe="true"
        data-target="#hubspot-contact-form"
        data-hs-form-portal-id="144571109"
        data-hs-form-id="ebf2ad52-915e-4bfa-b4c0-a2ff8480054f"
        data-hs-form-region="eu1"
      >
        <div className="flex items-center justify-center h-20">
          <div className="text-muted-foreground">Chargement du formulaire...</div>
        </div>
      </div>
    </div>
  );
};

export default HubSpotContactForm;
