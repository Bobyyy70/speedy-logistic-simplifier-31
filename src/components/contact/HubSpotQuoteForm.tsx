
import React, { useEffect, useRef, useState } from "react";
import { useSecurityMonitoring } from "@/hooks/use-security-monitoring";

interface HubSpotQuoteFormProps {
  onFormReady?: () => void;
}

export const HubSpotQuoteForm: React.FC<HubSpotQuoteFormProps> = ({ onFormReady }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Security monitoring
  const { reportSecurityEvent } = useSecurityMonitoring({
    enableDeviceFingerprinting: true,
    enablePerformanceMonitoring: true
  });

  // Configuration spécifique fournie par l'utilisateur
  const config = {
    portalId: "144571109",
    region: "eu1",
    formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
    scriptUrl: "https://js-eu1.hsforms.net/forms/embed/144571109.js"
  };

  useEffect(() => {
    const loadHubSpotForm = async () => {
      // Vérifier si le script est déjà chargé
      if (scriptLoadedRef.current || (window.hbspt && typeof window.hbspt.forms === 'object')) {
        createForm();
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        // Charger le script HubSpot optimisé
        const script = document.createElement('script');
        script.src = config.scriptUrl;
        script.defer = true;
        script.setAttribute('data-expected', 'hubspot-script');
        script.onload = () => {
          scriptLoadedRef.current = true;
          reportSecurityEvent('hubspot_script_loaded', { scriptUrl: config.scriptUrl });
          createForm();
        };
        script.onerror = () => {
          const errorMsg = 'Échec du chargement du formulaire HubSpot';
          console.error(errorMsg);
          reportSecurityEvent('hubspot_script_load_failed', { scriptUrl: config.scriptUrl });
          setError(errorMsg);
          setIsLoading(false);
        };
        
        // Éviter les doublons de script
        if (!document.querySelector(`script[src="${config.scriptUrl}"]`)) {
          document.head.appendChild(script);
        } else {
          createForm();
        }
      } catch (error) {
        console.error('Erreur lors du chargement du formulaire HubSpot:', error);
        setError('Erreur lors du chargement du formulaire');
        setIsLoading(false);
      }
    };

    const createForm = async () => {
      if (formRef.current && window.hbspt?.forms) {
        try {
          // Vider le conteneur de manière sécurisée avant de créer le nouveau formulaire
          while (formRef.current.firstChild) {
            formRef.current.removeChild(formRef.current.firstChild);
          }
          
          window.hbspt.forms.create({
            region: config.region,
            portalId: config.portalId,
            formId: config.formId,
            target: formRef.current
          });
          
          setIsLoading(false);
          reportSecurityEvent('hubspot_form_created', { formId: config.formId });
          onFormReady?.();
        } catch (error) {
          console.error('Échec de la création du formulaire HubSpot:', error);
          reportSecurityEvent('hubspot_form_creation_failed', { formId: config.formId, error: String(error) });
          setError('Erreur lors de la création du formulaire');
          setIsLoading(false);
        }
      }
    };

    loadHubSpotForm();
  }, [onFormReady]);

  if (error) {
    return (
      <div className="w-full p-4 text-center text-destructive">
        <p>{error}</p>
        <p className="text-sm text-muted-foreground mt-2">
          Veuillez rafraîchir la page ou nous contacter directement.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {isLoading && (
        <div className="w-full p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement du formulaire...</p>
        </div>
      )}
      <div 
        ref={formRef}
        className="hs-form-frame w-full"
        data-region={config.region}
        data-form-id={config.formId}
        data-portal-id={config.portalId}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};
