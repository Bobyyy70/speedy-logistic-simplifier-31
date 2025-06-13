
import { useEffect, useRef, useId, useCallback } from 'react';
import { useHubSpotScript } from './useHubSpotScript';

interface UseHubSpotFormProps {
  formId: string;
  isModalOpen: boolean;
}

export const useHubSpotForm = ({ formId, isModalOpen }: UseHubSpotFormProps) => {
  const { isLoaded } = useHubSpotScript();
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();
  const targetId = `hubspot-form-${formId}-${uniqueId.replace(/:/g, '-')}`;
  const formCreatedRef = useRef(false);

  const createForm = useCallback(() => {
    if (!containerRef.current || !window.hbspt || !window.hbspt.forms || formCreatedRef.current) {
      return;
    }

    console.log(`Création du formulaire HubSpot: ${formId}`);
    
    // Nettoyer le contenu existant
    containerRef.current.innerHTML = '';

    try {
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "144571109",
        formId: formId,
        target: `#${targetId}`
      });
      formCreatedRef.current = true;
      console.log(`Formulaire HubSpot créé avec succès: ${formId}`);
    } catch (error) {
      console.error('Erreur lors de la création du formulaire HubSpot:', error);
    }
  }, [formId, targetId]);

  useEffect(() => {
    if (!isLoaded || !isModalOpen) {
      return;
    }

    // Reset du flag si le modal se rouvre
    if (isModalOpen && formCreatedRef.current) {
      formCreatedRef.current = false;
    }

    // Délai minimal pour s'assurer que le DOM est prêt
    const createFormWithDelay = () => {
      if (window.hbspt && window.hbspt.forms) {
        createForm();
      } else {
        // Retry immédiat toutes les 100ms pendant 10 secondes max
        let retryCount = 0;
        const maxRetries = 100; // 10 secondes (100 * 100ms)
        
        const retryInterval = setInterval(() => {
          if (window.hbspt && window.hbspt.forms) {
            createForm();
            clearInterval(retryInterval);
          } else if (retryCount >= maxRetries) {
            console.error(`Échec de la création du formulaire ${formId} après ${maxRetries} tentatives`);
            clearInterval(retryInterval);
          }
          retryCount++;
        }, 100);

        return () => clearInterval(retryInterval);
      }
    };

    // Petit délai pour laisser le temps au DOM de se mettre à jour
    const timeoutId = setTimeout(createFormWithDelay, 100);

    return () => {
      clearTimeout(timeoutId);
      // Cleanup à la fermeture du modal
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      formCreatedRef.current = false;
    };
  }, [isLoaded, isModalOpen, createForm]);

  return {
    containerRef,
    targetId,
    isReady: isLoaded && isModalOpen
  };
};
