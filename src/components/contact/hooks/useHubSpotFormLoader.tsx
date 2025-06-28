
import { useState, useEffect } from "react";

interface UseHubSpotFormLoaderProps {
  isOpen: boolean;
  showCalendar: boolean;
  onFormSubmitted: (data: any) => void;
}

export const useHubSpotFormLoader = ({ 
  isOpen, 
  showCalendar, 
  onFormSubmitted 
}: UseHubSpotFormLoaderProps) => {
  const [formLoading, setFormLoading] = useState(true);
  const [formError, setFormError] = useState<string | null>(null);

  // Function to wait for HubSpot to load
  const waitForHubSpot = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 20;
      
      const checkHubSpot = () => {
        attempts++;
        console.log(`🔍 Tentative ${attempts} de chargement HubSpot...`);
        
        if (window.hbspt && window.hbspt.forms) {
          console.log('✅ HubSpot chargé avec succès');
          resolve();
        } else if (attempts >= maxAttempts) {
          console.error('❌ Timeout: HubSpot ne s\'est pas chargé');
          reject(new Error('HubSpot failed to load'));
        } else {
          setTimeout(checkHubSpot, 500);
        }
      };
      
      checkHubSpot();
    });
  };

  // Load HubSpot form
  const loadHubSpotForm = async () => {
    if (!isOpen || showCalendar) return;
    
    setFormLoading(true);
    setFormError(null);
    
    try {
      await waitForHubSpot();
      
      // Wait for container to be in DOM
      setTimeout(() => {
        const container = document.getElementById('hubspot-form-container');
        if (container && window.hbspt && window.hbspt.forms) {
          // Clear container before creating form
          container.innerHTML = '';
          
          console.log('📋 Création du formulaire HubSpot...');
          
          // Form configuration without callbacks to avoid TypeScript errors
          const formConfig = {
            region: "eu1",
            portalId: "144571109",
            formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
            target: "#hubspot-form-container"
          };
          
          window.hbspt.forms.create(formConfig);
          
          // Wait a bit then mark form as ready
          setTimeout(() => {
            console.log('✅ Formulaire HubSpot créé');
            setFormLoading(false);
            
            // Monitor form submission via DOM observation
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                  if (node.nodeType === Node.ELEMENT_NODE) {
                    const element = node as Element;
                    // Check if HubSpot confirmation message appears
                    if (element.classList?.contains('submitted-message') || 
                        element.textContent?.includes('Merci') ||
                        element.textContent?.includes('Thank you')) {
                      console.log('📋 Formulaire soumis détecté via DOM');
                      onFormSubmitted({ submitted: true });
                      observer.disconnect();
                    }
                  }
                });
              });
            });
            
            // Observe changes in form container
            if (container) {
              observer.observe(container, { 
                childList: true, 
                subtree: true 
              });
            }
          }, 1000);
          
        } else {
          throw new Error('Conteneur du formulaire introuvable ou HubSpot non disponible');
        }
      }, 100);
      
    } catch (error) {
      console.error('❌ Erreur lors du chargement du formulaire:', error);
      setFormError('Erreur de chargement du formulaire. Veuillez rafraîchir la page.');
      setFormLoading(false);
    }
  };

  // Load form when popup opens
  useEffect(() => {
    if (isOpen && !showCalendar) {
      loadHubSpotForm();
    }
  }, [isOpen, showCalendar]);

  return {
    formLoading,
    formError,
    loadHubSpotForm
  };
};
