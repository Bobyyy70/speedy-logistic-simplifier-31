
import { useEffect, useState } from 'react';

const HUBSPOT_SCRIPT_ID = 'hubspot-forms-script';
const HUBSPOT_SCRIPT_URL = 'https://js-eu1.hsforms.net/forms/embed/144571109.js';

export const useHubSpotScript = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fonction pour vérifier si l'API HubSpot est complètement disponible
    const checkHubSpotAPI = () => {
      return window.hbspt && 
             window.hbspt.forms && 
             typeof window.hbspt.forms.create === 'function';
    };

    // Si l'API est déjà disponible
    if (checkHubSpotAPI()) {
      console.log('HubSpot API déjà disponible');
      setIsLoaded(true);
      return;
    }

    // Vérifier si le script existe déjà
    const existingScript = document.getElementById(HUBSPOT_SCRIPT_ID);
    if (existingScript) {
      console.log('Script HubSpot déjà présent, attente de l\'API...');
      setIsLoading(true);
      
      // Polling agressif pour l'API
      const pollInterval = setInterval(() => {
        if (checkHubSpotAPI()) {
          console.log('HubSpot API maintenant disponible (script existant)');
          setIsLoaded(true);
          setIsLoading(false);
          clearInterval(pollInterval);
        }
      }, 50); // Check toutes les 50ms
      
      // Timeout après 15 secondes
      setTimeout(() => {
        if (!checkHubSpotAPI()) {
          console.error('Timeout: HubSpot API non disponible après 15s');
          setIsLoading(false);
          clearInterval(pollInterval);
        }
      }, 15000);
      
      return () => clearInterval(pollInterval);
    }

    // Injecter le script
    console.log('Injection du script HubSpot');
    setIsLoading(true);
    
    const script = document.createElement('script');
    script.id = HUBSPOT_SCRIPT_ID;
    script.src = HUBSPOT_SCRIPT_URL;
    script.async = true;
    script.defer = true;

    let pollInterval: NodeJS.Timeout;

    script.onload = () => {
      console.log('Script HubSpot chargé, attente de l\'API...');
      
      // Polling agressif après chargement du script
      pollInterval = setInterval(() => {
        if (checkHubSpotAPI()) {
          console.log('HubSpot API maintenant disponible après chargement');
          setIsLoaded(true);
          setIsLoading(false);
          clearInterval(pollInterval);
        }
      }, 50); // Check toutes les 50ms
      
      // Timeout après 15 secondes
      setTimeout(() => {
        if (!checkHubSpotAPI()) {
          console.error('Timeout: HubSpot API non disponible après chargement du script');
          setIsLoading(false);
          clearInterval(pollInterval);
        }
      }, 15000);
    };

    script.onerror = () => {
      console.error('Erreur lors du chargement du script HubSpot');
      setIsLoading(false);
      if (pollInterval) clearInterval(pollInterval);
    };

    document.head.appendChild(script);

    return () => {
      if (pollInterval) clearInterval(pollInterval);
    };
  }, []);

  return { isLoaded, isLoading };
};
