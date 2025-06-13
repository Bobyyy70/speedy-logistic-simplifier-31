
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

    console.log(`Tentative de création du formulaire HubSpot: ${formId}`);
    
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

    // Créer le formulaire immédiatement si l'API est prête
    if (window.hbspt && window.hbspt.forms) {
      createForm();
    } else {
      // Système de retry si l'API n'est pas encore prête
      let retryCount = 0;
      const maxRetries = 20; // 10 secondes max (20 * 500ms)
      
      const retryCreateForm = () => {
        if (window.hbspt && window.hbspt.forms) {
          createForm();
        } else if (retryCount < maxRetries) {
          retryCount++;
          console.log(`Retry ${retryCount} pour créer le formulaire ${formId}`);
          setTimeout(retryCreateForm, 500);
        } else {
          console.error(`Échec de la création du formulaire ${formId} après ${maxRetries} tentatives`);
        }
      };

      retryCreateForm();
    }

    return () => {
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
