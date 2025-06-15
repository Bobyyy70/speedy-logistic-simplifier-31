
import React from "react";

interface HubSpotIframeFormProps {
  portalId: string;
  formId: string;
  region?: string;
  title: string;
  description: string;
  isOpen?: boolean;
}

export const HubSpotIframeForm = ({ 
  portalId, 
  formId, 
  region = "eu1", 
  title, 
  description,
  isOpen = true 
}: HubSpotIframeFormProps) => {
  if (!isOpen) {
    return null;
  }

  // URL correcte pour les formulaires HubSpot
  const iframeUrl = `https://share-${region}.hsforms.com/${portalId}/${formId}`;

  console.log('🔗 URL iframe HubSpot:', iframeUrl);

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="min-h-[500px] border rounded-lg overflow-hidden">
        <iframe
          src={iframeUrl}
          width="100%"
          height="500"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title={title}
          style={{ border: 'none' }}
          onLoad={() => {
            console.log('✅ Formulaire HubSpot chargé avec succès');
          }}
          onError={(e) => {
            console.error('❌ Erreur de chargement du formulaire HubSpot:', e);
          }}
        />
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Problème avec le formulaire ? {" "}
          <a 
            href="mailto:contact@speedelog.net" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Contactez-nous directement
          </a>
        </p>
      </div>
    </div>
  );
};
