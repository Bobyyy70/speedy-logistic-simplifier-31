
import React, { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface HubSpotQuoteFormProps {
  onFormReady?: () => void;
}

export const HubSpotQuoteForm: React.FC<HubSpotQuoteFormProps> = ({ onFormReady }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    
    const initializeForm = () => {
      console.log('Initializing HubSpot form...');
      
      // Check if HubSpot is already available
      if (window.hbspt?.forms) {
        console.log('HubSpot already loaded, creating form');
        createForm();
        return;
      }

      // Check if script is already being loaded
      const existingScript = document.querySelector('script[src*="hsforms.net"]');
      if (existingScript) {
        console.log('HubSpot script already exists, waiting for load');
        waitForHubSpot();
        return;
      }

      // Load the HubSpot script
      console.log('Loading HubSpot script');
      loadHubSpotScript();
    };

    const loadHubSpotScript = () => {
      const script = document.createElement('script');
      script.src = 'https://js-eu1.hsforms.net/forms/embed/144571109.js';
      script.defer = true;
      
      script.onload = () => {
        console.log('HubSpot script loaded successfully');
        waitForHubSpot();
      };
      
      script.onerror = () => {
        console.error('Failed to load HubSpot script');
        if (mountedRef.current) {
          setHasError(true);
          setIsLoading(false);
        }
      };
      
      document.head.appendChild(script);
    };

    const waitForHubSpot = () => {
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds with 100ms intervals
      
      const checkHubSpot = () => {
        attempts++;
        console.log(`Checking HubSpot availability, attempt ${attempts}`);
        
        if (window.hbspt?.forms) {
          console.log('HubSpot forms API available');
          createForm();
          return;
        }
        
        if (attempts >= maxAttempts) {
          console.error('HubSpot failed to load after maximum attempts');
          if (mountedRef.current) {
            setHasError(true);
            setIsLoading(false);
          }
          return;
        }
        
        setTimeout(checkHubSpot, 100);
      };
      
      checkHubSpot();
    };

    const createForm = () => {
      if (!window.hbspt?.forms || !formRef.current || !mountedRef.current) {
        console.error('Cannot create form: missing requirements');
        return;
      }

      try {
        console.log('Creating HubSpot form');
        
        // Clear any existing content
        formRef.current.innerHTML = '';
        
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '144571109',
          formId: 'ebf2ad52-915e-4bfa-b4c0-a2ff8480054f',
          target: formRef.current,
          onFormReady: () => {
            console.log('HubSpot form ready');
            if (mountedRef.current) {
              setIsLoading(false);
              onFormReady?.();
            }
          }
        });
      } catch (error) {
        console.error('Error creating HubSpot form:', error);
        if (mountedRef.current) {
          setHasError(true);
          setIsLoading(false);
        }
      }
    };

    initializeForm();

    return () => {
      mountedRef.current = false;
    };
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
