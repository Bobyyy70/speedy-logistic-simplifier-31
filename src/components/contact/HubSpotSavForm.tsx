
import React, { useEffect, useId, useRef } from "react";

interface HubSpotSavFormProps {
  isModalOpen?: boolean;
}

export const HubSpotSavForm = ({ isModalOpen = true }: HubSpotSavFormProps) => {
  const uniqueId = useId();
  const formId = `hubspot-sav-form-${uniqueId.replace(/:/g, '-')}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const isFormLoaded = useRef(false);

  useEffect(() => {
    if (!isModalOpen || isFormLoaded.current) return;

    const initializeForm = () => {
      if (window.hbspt && window.hbspt.forms && containerRef.current) {
        console.log('🔄 Initialisation forcée du formulaire SAV');
        
        // Nettoyer le container avant de créer le formulaire
        containerRef.current.innerHTML = '';
        
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "144571109",
          formId: "434e2703-cd85-4a7d-a84b-69d4b12f04d6",
          target: `#${formId}`,
          onFormReady: () => {
            console.log('✅ Formulaire SAV chargé');
            isFormLoaded.current = true;
          },
          onFormSubmit: () => {
            console.log('📤 Formulaire SAV soumis');
          }
        });
      }
    };

    // Tentative immédiate
    if (window.hbspt && window.hbspt.forms) {
      initializeForm();
    } else {
      // Attendre que HubSpot soit chargé avec retry
      let attempts = 0;
      const checkInterval = setInterval(() => {
        attempts++;
        console.log(`🔍 Tentative ${attempts} de chargement HubSpot SAV`);
        
        if (window.hbspt && window.hbspt.forms) {
          console.log('✅ HubSpot API détectée pour SAV');
          initializeForm();
          clearInterval(checkInterval);
        } else if (attempts > 10) {
          console.error('❌ Impossible de charger HubSpot Forms pour SAV après 10 tentatives');
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
      <h2 className="text-xl font-semibold mb-2">Service Après-Vente</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour toute demande SAV</p>
      
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

export default HubSpotSavForm;
