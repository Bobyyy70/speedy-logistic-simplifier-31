
import React from "react";
import { HubSpotIframeForm } from "./HubSpotIframeForm";

interface HubSpotContactFormProps {
  isModalOpen?: boolean;
}

export const HubSpotContactForm = ({ isModalOpen = true }: HubSpotContactFormProps) => {
  return (
    <HubSpotIframeForm
      portalId="144571109"
      formId="ebf2ad52-915e-4bfa-b4c0-a2ff8480054f"
      region="eu1"
      title="Contactez-nous"
      description="Remplissez ce formulaire pour nous contacter"
      isOpen={isModalOpen}
    />
  );
};

export default HubSpotContactForm;
