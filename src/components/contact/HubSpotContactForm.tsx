
import React, { useEffect, useId, useRef } from "react";

interface HubSpotContactFormProps {
  isModalOpen?: boolean;
}

export const HubSpotContactForm = ({ isModalOpen = true }: HubSpotContactFormProps) => {
  const uniqueId = useId();
  const formId = `hubspot-contact-form-${uniqueId.replace(/:/g, '-')}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const isFormLoaded = useRef(false);

  useEffect(() => {
    if (!isModalOpen || isFormLoaded.current) return;

    const initializeForm = () => {
      if (window.hbspt && window.hbspt.forms && containerRef.current) {
        console.log('🔄 Initialisation forcée du formulaire Contact');
        
        // Nettoyer le container avant de créer le formulaire
        containerRef.current.innerHTML = '';
        
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "144571109",
          formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
          target: `#${formId}`,
          onFormReady: () => {
            console.log('✅ Formulaire Contact chargé');
            isFormLoaded.current = true;
          },
          onFormSubmit: () => {
            console.log('📤 Formulaire Contact soumis');
          }
        });
      }
    };

    // Tentative immédiate
    if (window.hbspt && window.hbspt.forms) {
      initializeForm();
    } else {
      // Attendre que HubSpot soit chargé
      let attempts = 0;
      const checkInterval = setInterval(() => {
        attempts++;
        if (window.hbspt && window.hbspt.forms) {
          initializeForm();
          clearInterval(checkInterval);
        } else if (attempts > 15) {
          console.error('❌ Impossible de charger HubSpot Forms pour Contact');
          clearInterval(checkInterval);
        }
      }, 1000);

      return () => clearInterval(checkInterval);
    }
  }, [isModalOpen, formId]);

  // Reset du formulaire quand la modal se ferme
  useEffect(() => {
    if (!isModalOpen) {
      isFormLoaded.current = false;
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    }
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Contactez-nous</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour nous contacter</p>
      
      <div 
        id={formId}
        ref={containerRef}
        className="min-h-[400px]"
      >
        <div className="flex items-center justify-center h-20">
          <div className="text-muted-foreground">Chargement du formulaire...</div>
        </div>
      </div>
    </div>
  );
};

export default HubSpotContactForm;
