
import { useEffect } from 'react';

export const useHubSpot = () => {
  useEffect(() => {
    let calendarScript: HTMLScriptElement | null = null;
    let formsScript: HTMLScriptElement | null = null;

    // Script pour le calendrier HubSpot
    if (!document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]')) {
      calendarScript = document.createElement('script');
      calendarScript.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      calendarScript.async = true;
      document.head.appendChild(calendarScript);
    }

    // Script pour les formulaires HubSpot
    if (!document.querySelector('script[src="//js-eu1.hsforms.net/forms/embed/v2.js"]')) {
      formsScript = document.createElement('script');
      formsScript.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
      formsScript.async = true;
      document.head.appendChild(formsScript);
    }

    // Configuration du chat HubSpot
    if (typeof (window as any).hsConversationsSettings === 'undefined') {
      (window as any).hsConversationsSettings = {
        loadImmediately: true,
        enableWidgetCookieBanner: true,
        disableAttachment: false,
        widget: {
          position: {
            side: 'right',
            offset: {
              bottom: '20px',
              right: '20px'
            }
          }
        }
      };
    }

    return () => {
      // Cleanup logic if needed
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
