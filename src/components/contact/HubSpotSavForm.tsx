
import React, { useEffect } from "react";

export const HubSpotSavForm = () => {
  useEffect(() => {
    console.log('HubSpotSavForm: Initialisation...');
    
    // Attendre que HubSpot soit chargé
    const initializeForm = () => {
      if (window.hbspt && window.hbspt.forms) {
        console.log('HubSpotSavForm: HubSpot détecté, création du formulaire...');
        try {
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "144571109",
            formId: "434e2703-cd85-4a7d-a84b-69d4b12f04d6",
            target: "#sav-form-container"
          });
          console.log('HubSpotSavForm: Formulaire SAV créé avec succès');
        } catch (error) {
          console.error('HubSpotSavForm: Erreur lors de la création du formulaire:', error);
        }
      } else {
        console.log('HubSpotSavForm: HubSpot pas encore chargé, nouvelle tentative...');
        setTimeout(initializeForm, 500);
      }
    };

    // Démarrer l'initialisation après un court délai
    setTimeout(initializeForm, 1000);
  }, []);

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Service Après-Vente</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour toute demande SAV</p>
      
      <div id="sav-form-container"></div>
    </div>
  );
};

export default HubSpotSavForm;
