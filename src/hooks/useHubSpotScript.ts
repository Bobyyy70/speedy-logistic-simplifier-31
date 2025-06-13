
import { useEffect, useState } from 'react';

const HUBSPOT_SCRIPT_ID = 'hubspot-forms-script';
const HUBSPOT_SCRIPT_URL = 'https://js-eu1.hsforms.net/forms/embed/144571109.js';

export const useHubSpotScript = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fonction pour vérifier si l'API HubSpot est complètement disponible
    const checkHubSpotAPI = () => {
      return window.hbspt && window.hbspt.forms && typeof window.hbspt.forms.create === 'function';
    };

    // Si l'API est déjà disponible
    if (checkHubSpotAPI()) {
      console.log('HubSpot API déjà disponible');
      setIsLoaded(true);
      return;
    }

    // Vérifier si le script est déjà en cours de chargement
    const existingScript = document.getElementById(HUBSPOT_SCRIPT_ID);
    if (existingScript) {
      if (existingScript.hasAttribute('data-loaded')) {
        // Attendre que l'API soit disponible avec un polling
        const pollForAPI = () => {
          if (checkHubSpotAPI()) {
            setIsLoaded(true);
            setIsLoading(false);
          } else {
            setTimeout(pollForAPI, 100);
          }
        };
        pollForAPI();
      } else {
        // Script en cours de chargement
        setIsLoading(true);
        const handleLoad = () => {
          // Attendre que l'API soit disponible après le chargement du script
          const pollForAPI = () => {
            if (checkHubSpotAPI()) {
              console.log('HubSpot API maintenant disponible après chargement');
              setIsLoaded(true);
              setIsLoading(false);
            } else {
              setTimeout(pollForAPI, 100);
            }
          };
          pollForAPI();
        };
        existingScript.addEventListener('load', handleLoad);
        return () => existingScript.removeEventListener('load', handleLoad);
      }
      return;
    }

    // Injecter le script
    console.log('Injection du script HubSpot');
    setIsLoading(true);
    const script = document.createElement('script');
    script.id = HUBSPOT_SCRIPT_ID;
    script.src = HUBSPOT_SCRIPT_URL;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log('Script HubSpot chargé, vérification de l\'API...');
      script.setAttribute('data-loaded', 'true');
      
      // Polling pour attendre que l'API soit disponible
      const pollForAPI = () => {
        if (checkHubSpotAPI()) {
          console.log('HubSpot API maintenant disponible');
          setIsLoaded(true);
          setIsLoading(false);
        } else {
          console.log('API pas encore prête, nouvelle tentative...');
          setTimeout(pollForAPI, 100);
        }
      };
      
      // Délai initial pour laisser le temps à HubSpot de s'initialiser
      setTimeout(pollForAPI, 200);
    };

    script.onerror = () => {
      console.error('Erreur lors du chargement du script HubSpot');
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      // Ne pas supprimer le script au unmount pour éviter de le recharger
    };
  }, []);

  return { isLoaded, isLoading };
};
