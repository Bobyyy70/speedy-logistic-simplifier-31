
import React, { useEffect, useRef } from "react";

interface HubSpotQuoteFormProps {
  onFormReady?: () => void;
}

export const HubSpotQuoteForm: React.FC<HubSpotQuoteFormProps> = ({ onFormReady }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // 🔍 [DEBUG] Log initial state
    console.log("🔍 [DEBUG] HubSpotQuoteForm mounting...");
    console.log("🔍 [DEBUG] Initial window.hbspt state:", window.hbspt);
    console.log("🔍 [DEBUG] Form ref:", formRef.current);

    const loadHubSpotForm = async () => {
      // Check if script is already loaded
      if (scriptLoadedRef.current || window.hbspt?.forms) {
        console.log("🔍 [DEBUG] HubSpot already loaded, creating form...");
        createForm();
        return;
      }

      try {
        console.log("🔍 [DEBUG] Loading HubSpot script...");
        // Load the HubSpot script
        const script = document.createElement('script');
        script.src = 'https://js-eu1.hsforms.net/forms/embed/144571109.js';
        script.defer = true;
        script.onload = () => {
          console.log("✅ [DEBUG] HubSpot script loaded successfully");
          scriptLoadedRef.current = true;
          createForm();
        };
        script.onerror = () => {
          console.error('❌ [DEBUG] Failed to load HubSpot form script');
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error('❌ [DEBUG] Error loading HubSpot form:', error);
      }
    };

    const createForm = () => {
      console.log("🔍 [DEBUG] Attempting to create HubSpot form...");
      console.log("🔍 [DEBUG] window.hbspt.forms available:", !!window.hbspt?.forms);
      console.log("🔍 [DEBUG] formRef.current available:", !!formRef.current);
      
      if (window.hbspt?.forms && formRef.current) {
        console.log("🔍 [DEBUG] Creating form with config:", {
          region: 'eu1',
          portalId: '144571109',
          formId: 'ebf2ad52-915e-4bfa-b4c0-a2ff8480054f',
          target: formRef.current
        });
        
        try {
          window.hbspt.forms.create({
            region: 'eu1',
            portalId: '144571109',
            formId: 'ebf2ad52-915e-4bfa-b4c0-a2ff8480054f',
            target: formRef.current
          });
          console.log("✅ [DEBUG] HubSpot form created successfully");
          onFormReady?.();
        } catch (formError) {
          console.error("❌ [DEBUG] Error creating HubSpot form:", formError);
        }
      } else {
        console.error("❌ [DEBUG] Cannot create form - missing dependencies:", {
          hbsptForms: !!window.hbspt?.forms,
          formRef: !!formRef.current
        });
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
      {/* 🔍 [DEBUG] Visual indicator */}
      <div className="text-xs text-gray-500 mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
        🔍 DEBUG: HubSpot form container (vérifiez la console pour les logs)
      </div>
    </div>
  );
};
