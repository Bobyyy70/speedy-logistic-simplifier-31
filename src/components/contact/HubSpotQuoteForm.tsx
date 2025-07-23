
import React, { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface HubSpotQuoteFormProps {
  onFormReady?: () => void;
}

export const HubSpotQuoteForm: React.FC<HubSpotQuoteFormProps> = ({ onFormReady }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadHubSpotForm = async () => {
      setIsLoading(true);
      setHasError(false);

      // Check if script is already loaded
      if (scriptLoadedRef.current || window.hbspt?.forms) {
        createForm();
        return;
      }

      try {
        // Load the HubSpot script
        const script = document.createElement('script');
        script.src = 'https://js-eu1.hsforms.net/forms/embed/144571109.js';
        script.defer = true;
        script.onload = () => {
          scriptLoadedRef.current = true;
          createForm();
        };
        script.onerror = () => {
          console.error('Failed to load HubSpot form script');
          setHasError(true);
          setIsLoading(false);
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading HubSpot form:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    const createForm = () => {
      if (window.hbspt?.forms && formRef.current) {
        // Clear any existing content
        formRef.current.innerHTML = '';
        
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '144571109',
          formId: 'ebf2ad52-915e-4bfa-b4c0-a2ff8480054f',
          target: formRef.current,
          onFormReady: () => {
            setIsLoading(false);
            onFormReady?.();
          }
        });
      }
    };

    loadHubSpotForm();
  }, [onFormReady]);

  if (hasError) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-center p-8">
        <div className="space-y-4">
          <p className="text-slate-600">
            Une erreur est survenue lors du chargement du formulaire.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[300px] relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-10">
          <div className="flex items-center space-x-2 text-slate-600">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Chargement du formulaire...</span>
          </div>
        </div>
      )}
      
      <div 
        ref={formRef}
        className={`hs-form-frame w-full transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        data-region="eu1" 
        data-form-id="ebf2ad52-915e-4bfa-b4c0-a2ff8480054f" 
        data-portal-id="144571109"
      />
    </div>
  );
};
