
import React, { useEffect, useRef } from "react";

interface HubSpotQuoteFormProps {
  onFormReady?: () => void;
}

export const HubSpotQuoteForm: React.FC<HubSpotQuoteFormProps> = ({ onFormReady }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const loadHubSpotForm = async () => {
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
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading HubSpot form:', error);
      }
    };

    const createForm = () => {
      if (window.hbspt?.forms && formRef.current) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '144571109',
          formId: 'ebf2ad52-915e-4bfa-b4c0-a2ff8480054f',
          target: formRef.current
        });
        onFormReady?.();
      }
    };

    loadHubSpotForm();
  }, [onFormReady]);

  return (
    <div className="w-full">
      <div 
        ref={formRef}
        className="hs-form-frame w-full"
        data-region="eu1" 
        data-form-id="ebf2ad52-915e-4bfa-b4c0-a2ff8480054f" 
        data-portal-id="144571109"
      />
    </div>
  );
};
