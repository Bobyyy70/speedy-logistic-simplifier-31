
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

  // Diagnostics détaillés
  const logDiagnostics = () => {
    console.log('🔍 Diagnostics HubSpot:', {
      windowHbspt: !!window.hbspt,
      hbsptForms: !!(window.hbspt && window.hbspt.forms),
      hbsptCreate: !!(window.hbspt && window.hbspt.forms && window.hbspt.forms.create),
      scriptsInHead: document.querySelectorAll('script[src*="hs-scripts"]').length,
      formsScripts: document.querySelectorAll('script[src*="hsforms"]').length,
      isOpen,
      showCalendar
    });
  };

  // Function to wait for HubSpot to load with better error handling
  const waitForHubSpot = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 30; // Augmenté à 30 tentatives
      
      const checkHubSpot = () => {
        attempts++;
        console.log(`🔍 Tentative ${attempts}/${maxAttempts} de chargement HubSpot...`);
        
        // Diagnostics à chaque tentative
        if (attempts % 5 === 0) {
          logDiagnostics();
        }
        
        if (window.hbspt && window.hbspt.forms && typeof window.hbspt.forms.create === 'function') {
          console.log('✅ HubSpot chargé avec succès après', attempts, 'tentatives');
          logDiagnostics();
          resolve();
        } else if (attempts >= maxAttempts) {
          console.error('❌ Timeout: HubSpot ne s\'est pas chargé après', maxAttempts, 'tentatives');
          logDiagnostics();
          reject(new Error(`HubSpot failed to load after ${maxAttempts} attempts`));
        } else {
          setTimeout(checkHubSpot, 800); // Augmenté l'intervalle à 800ms
        }
      };
      
      checkHubSpot();
    });
  };

  // Load HubSpot form with improved error handling
  const loadHubSpotForm = async () => {
    if (!isOpen || showCalendar) {
      console.log('🚫 Chargement annulé:', { isOpen, showCalendar });
      return;
    }
    
    console.log('🚀 Début du chargement du formulaire HubSpot');
    setFormLoading(true);
    setFormError(null);
    
    try {
      // Attendre que HubSpot soit disponible
      await waitForHubSpot();
      
      // Attendre que le container soit disponible
      let containerAttempts = 0;
      const maxContainerAttempts = 10;
      
      const waitForContainer = () => {
        return new Promise<HTMLElement>((resolve, reject) => {
          const checkContainer = () => {
            containerAttempts++;
            const container = document.getElementById('hubspot-form-container');
            
            console.log(`📦 Vérification container ${containerAttempts}/${maxContainerAttempts}:`, !!container);
            
            if (container) {
              resolve(container);
            } else if (containerAttempts >= maxContainerAttempts) {
              reject(new Error('Container not found'));
            } else {
              setTimeout(checkContainer, 200);
            }
          };
          checkContainer();
        });
      };

      const container = await waitForContainer();
      
      // Clear container before creating form
      container.innerHTML = '';
      console.log('📋 Container vidé, création du formulaire...');
      
      // Configuration du formulaire avec IDs vérifiés
      const formConfig = {
        region: "eu1",
        portalId: "144571109", // À vérifier dans votre compte HubSpot
        formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f", // À vérifier dans votre compte HubSpot
        target: "#hubspot-form-container",
        onFormReady: () => {
          console.log('✅ Formulaire HubSpot prêt');
          setFormLoading(false);
        },
        onFormSubmit: (form: any) => {
          console.log('📤 Formulaire en cours de soumission...', form);
        },
        onFormSubmitted: (form: any) => {
          console.log('✅ Formulaire soumis avec succès!', form);
          onFormSubmitted({ submitted: true, form });
        }
      };
      
      console.log('🔧 Configuration du formulaire:', formConfig);
      
      // Créer le formulaire
      window.hbspt.forms.create(formConfig);
      
      // Timeout de sécurité si onFormReady n'est pas appelé
      setTimeout(() => {
        if (formLoading) {
          console.log('⚠️ Timeout de sécurité - marquage du formulaire comme prêt');
          setFormLoading(false);
        }
      }, 5000);
      
    } catch (error) {
      console.error('❌ Erreur lors du chargement du formulaire:', error);
      logDiagnostics();
      
      let errorMessage = 'Erreur de chargement du formulaire.';
      
      if (error instanceof Error) {
        if (error.message.includes('failed to load')) {
          errorMessage = 'Le service HubSpot n\'est pas disponible. Veuillez réessayer dans quelques instants.';
        } else if (error.message.includes('Container not found')) {
          errorMessage = 'Erreur technique du formulaire. Veuillez rafraîchir la page.';
        }
      }
      
      setFormError(errorMessage);
      setFormLoading(false);
    }
  };

  // Load form when popup opens
  useEffect(() => {
    if (isOpen && !showCalendar) {
      console.log('📋 Déclenchement du chargement du formulaire');
      loadHubSpotForm();
    }
  }, [isOpen, showCalendar]);

  // Diagnostics au montage du composant
  useEffect(() => {
    if (isOpen) {
      setTimeout(logDiagnostics, 1000);
    }
  }, [isOpen]);

  return {
    formLoading,
    formError,
    loadHubSpotForm
  };
};
