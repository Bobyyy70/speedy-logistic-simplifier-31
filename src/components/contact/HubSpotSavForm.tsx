
import React from "react";
import { HubSpotIframeForm } from "./HubSpotIframeForm";

interface HubSpotSavFormProps {
  isModalOpen?: boolean;
}

export const HubSpotSavForm = ({ isModalOpen = true }: HubSpotSavFormProps) => {
  return (
    <HubSpotIframeForm
      portalId="144571109"
      formId="434e2703-cd85-4a7d-a84b-69d4b12f04d6"
      region="eu1"
      title="Service Après-Vente"
      description="Remplissez ce formulaire pour toute demande SAV"
      isOpen={isModalOpen}
    />
  );
};

export default HubSpotSavForm;
