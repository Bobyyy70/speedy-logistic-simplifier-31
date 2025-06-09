
import { useEffect } from 'react';

export const useHubSpot = () => {
  useEffect(() => {
    let formsScript: HTMLScriptElement | null = null;

    // Script pour les formulaires HubSpot uniquement (pas le calendrier)
    if (!document.querySelector('script[src*="js-eu1.hsforms.net"]')) {
      formsScript = document.createElement('script');
      formsScript.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
      formsScript.async = true;
      formsScript.onload = () => {
        console.log('HubSpot forms script loaded');
      };
      document.head.appendChild(formsScript);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  const createContactForm = (containerId: string) => {
    if ((window as any).hbspt?.forms) {
      setTimeout(() => {
        try {
          (window as any).hbspt.forms.create({
            region: "eu1",
            portalId: "144571109",
            formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
            target: `#${containerId}`
          });
        } catch (error) {
          console.error('Erreur lors du chargement du formulaire de contact:', error);
        }
      }, 100);
    }
  };

  const createSavForm = (containerId: string) => {
    if ((window as any).hbspt?.forms) {
      setTimeout(() => {
        try {
          (window as any).hbspt.forms.create({
            region: "eu1",
            portalId: "144571109",
            formId: "434e2703-cd85-4a7d-a84b-69d4b12f04d6",
            target: `#${containerId}`
          });
        } catch (error) {
          console.error('Erreur lors du chargement du formulaire SAV:', error);
        }
      }, 100);
    }
  };

  return { createContactForm, createSavForm };
};
