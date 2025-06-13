
import { useEffect, useState } from 'react';

const HUBSPOT_SCRIPT_ID = 'hubspot-forms-script';
const HUBSPOT_SCRIPT_URL = 'https://js-eu1.hsforms.net/forms/embed/144571109.js';

export const useHubSpotScript = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Vérifier si le script est déjà chargé
    if (window.hbspt && window.hbspt.forms) {
      setIsLoaded(true);
      return;
    }

    // Vérifier si le script est déjà en cours de chargement
    const existingScript = document.getElementById(HUBSPOT_SCRIPT_ID);
    if (existingScript) {
      if (existingScript.hasAttribute('data-loaded')) {
        setIsLoaded(true);
      } else {
        // Script en cours de chargement, attendre qu'il se charge
        setIsLoading(true);
        const handleLoad = () => {
          setIsLoaded(true);
          setIsLoading(false);
        };
        existingScript.addEventListener('load', handleLoad);
        return () => existingScript.removeEventListener('load', handleLoad);
      }
      return;
    }

    // Injecter le script
    setIsLoading(true);
    const script = document.createElement('script');
    script.id = HUBSPOT_SCRIPT_ID;
    script.src = HUBSPOT_SCRIPT_URL;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      script.setAttribute('data-loaded', 'true');
      setIsLoaded(true);
      setIsLoading(false);
    };

    script.onerror = () => {
      console.error('Erreur lors du chargement du script HubSpot');
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      // Ne pas supprimer le script au unmount pour éviter de le recharger
      // Il sera réutilisé par d'autres composants
    };
  }, []);

  return { isLoaded, isLoading };
};
