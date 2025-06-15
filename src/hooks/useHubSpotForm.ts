
import { useEffect, useRef } from 'react';

interface UseHubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  isOpen: boolean;
}

export const useHubSpotForm = ({ portalId, formId, region = 'eu1', isOpen }: UseHubSpotFormProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formCreated = useRef(false);

  useEffect(() => {
    if (!isOpen || !containerRef.current) {
      formCreated.current = false;
      return;
    }

    const createForm = () => {
      if (!window.hbspt || !window.hbspt.forms || formCreated.current) {
        return;
      }

      try {
        // Nettoyer le conteneur avant de créer le formulaire
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
          
          window.hbspt.forms.create({
            region,
            portalId,
            formId,
            target: `#${containerRef.current.id}`
          });
          
          formCreated.current = true;
          console.log(`✅ Formulaire HubSpot créé: ${formId}`);
        }
      } catch (error) {
        console.error('❌ Erreur création formulaire HubSpot:', error);
        
        // Fallback avec message d'erreur
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="padding: 2rem; text-align: center; border: 2px dashed #e2e8f0; background: #f8fafc; border-radius: 0.5rem;">
              <p style="color: #64748b; margin-bottom: 1rem;">Impossible de charger le formulaire</p>
              <a href="mailto:contact@speedelog.net" style="color: #3b82f6; text-decoration: underline;">
                Contactez-nous directement par email
              </a>
            </div>
          `;
        }
      }
    };

    // Vérifier si HubSpot est disponible
    if (window.hbspt && window.hbspt.forms) {
      createForm();
    } else {
      // Attendre que HubSpot se charge
      const checkHubSpot = setInterval(() => {
        if (window.hbspt && window.hbspt.forms) {
          clearInterval(checkHubSpot);
          createForm();
        }
      }, 100);

      // Timeout après 10 secondes
      setTimeout(() => {
        clearInterval(checkHubSpot);
        if (!formCreated.current && containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="padding: 2rem; text-align: center; border: 2px dashed #e2e8f0; background: #f8fafc; border-radius: 0.5rem;">
              <p style="color: #64748b; margin-bottom: 1rem;">Timeout - Formulaire non disponible</p>
              <a href="mailto:contact@speedelog.net" style="color: #3b82f6; text-decoration: underline;">
                Contactez-nous par email
              </a>
            </div>
          `;
        }
      }, 10000);

      return () => clearInterval(checkHubSpot);
    }

    // Nettoyage quand le modal se ferme
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      formCreated.current = false;
    };
  }, [isOpen, portalId, formId, region]);

  return containerRef;
};
