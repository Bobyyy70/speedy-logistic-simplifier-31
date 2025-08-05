
import React, { useEffect, useRef } from "react";
import { getHubSpotConfig, hubSpotUtils } from "@/lib/hubspot-config";

interface HubSpotQuoteFormProps {
  onFormReady?: () => void;
}

export const HubSpotQuoteForm: React.FC<HubSpotQuoteFormProps> = ({ onFormReady }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const config = getHubSpotConfig();

  useEffect(() => {
    const loadHubSpotForm = async () => {
      // Check if script is already loaded
      if (scriptLoadedRef.current || hubSpotUtils.isHubSpotLoaded()) {
        createForm();
        return;
      }

      try {
        // Load the HubSpot script using configuration
        const script = document.createElement('script');
        script.src = hubSpotUtils.getScriptUrl(config);
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

    const createForm = async () => {
      if (formRef.current) {
        try {
          await hubSpotUtils.createForm(config.forms.quote, formRef.current, config);
          onFormReady?.();
        } catch (error) {
          console.error('Failed to create HubSpot form:', error);
        }
      }
    };

    loadHubSpotForm();
  }, [onFormReady, config]);

  return (
    <div className="w-full">
      <div 
        ref={formRef}
        className="hs-form-frame w-full"
        data-region={config.region}
        data-form-id={config.forms.quote}
        data-portal-id={config.portalId}
      />
    </div>
  );
};
