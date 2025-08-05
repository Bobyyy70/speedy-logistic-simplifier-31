
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
  const [isBlocked, setIsBlocked] = useState(false);
  
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
          console.error('Script HubSpot bloqué par le navigateur');
          reportSecurityEvent('hubspot_blocked_by_browser', { scriptUrl: config.scriptUrl });
          setIsBlocked(true);
          setError('Le formulaire est bloqué par votre navigateur');
          setIsLoading(false);
        };
        
        // Détection de timeout pour script bloqué
        setTimeout(() => {
          if (isLoading && !scriptLoadedRef.current && !window.hbspt) {
            console.warn('Timeout: Script HubSpot probablement bloqué');
            setIsBlocked(true);
            setError('Le formulaire est bloqué par votre navigateur');
            setIsLoading(false);
          }
        }, 5000);
        
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
      <div className="w-full p-6 border border-orange-200 bg-orange-50 rounded-lg">
        <div className="text-center">
          <p className="text-orange-800 font-medium mb-2">{error}</p>
          {isBlocked && (
            <div className="space-y-3 mt-4">
              <p className="text-sm text-orange-700">
                Votre navigateur bloque les formulaires externes pour votre sécurité.
              </p>
              <div className="bg-white p-4 rounded border border-orange-200">
                <h4 className="font-medium text-orange-800 mb-2">Solutions :</h4>
                <ul className="text-sm text-orange-700 space-y-1 text-left">
                  <li>• Désactivez temporairement le blocage des publicités</li>
                  <li>• Autorisez hsforms.net dans vos paramètres</li>
                  <li>• Contactez-nous directement par email</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a 
                  href="mailto:contact@speedelog.fr" 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  📧 Nous contacter
                </a>
                <a 
                  href="tel:+33123456789" 
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  📞 Nous appeler
                </a>
              </div>
            </div>
          )}
        </div>
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
