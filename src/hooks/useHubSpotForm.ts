
import { useEffect, useRef, useId } from 'react';
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

  useEffect(() => {
    if (!isLoaded || !isModalOpen || !containerRef.current || !window.hbspt) {
      return;
    }

    // Nettoyer le contenu existant
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Créer le formulaire avec un délai pour s'assurer que le DOM est prêt
    const timer = setTimeout(() => {
      try {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "144571109",
          formId: formId,
          target: `#${targetId}`
        });
        console.log(`Formulaire HubSpot créé avec succès: ${formId}`);
      } catch (error) {
        console.error('Erreur lors de la création du formulaire HubSpot:', error);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      // Nettoyer le contenu du formulaire à la fermeture
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [isLoaded, isModalOpen, formId, targetId]);

  return {
    containerRef,
    targetId,
    isReady: isLoaded && isModalOpen
  };
};
