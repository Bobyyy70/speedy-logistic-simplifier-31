
import React, { useEffect } from "react";

export const HubSpotContactForm = () => {
  useEffect(() => {
    console.log('HubSpotContactForm: Initialisation...');
    
    // Attendre que HubSpot soit chargé
    const initializeForm = () => {
      if (window.hbspt && window.hbspt.forms) {
        console.log('HubSpotContactForm: HubSpot détecté, création du formulaire...');
        try {
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "144571109",
            formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
            target: "#contact-form-container"
          });
          console.log('HubSpotContactForm: Formulaire contact créé avec succès');
        } catch (error) {
          console.error('HubSpotContactForm: Erreur lors de la création du formulaire:', error);
        }
      } else {
        console.log('HubSpotContactForm: HubSpot pas encore chargé, nouvelle tentative...');
        setTimeout(initializeForm, 500);
      }
    };

    // Démarrer l'initialisation après un court délai
    setTimeout(initializeForm, 1000);
  }, []);

  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Contactez-nous</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour nous contacter</p>
      
      <div id="contact-form-container"></div>
    </div>
  );
};

export default HubSpotContactForm;
