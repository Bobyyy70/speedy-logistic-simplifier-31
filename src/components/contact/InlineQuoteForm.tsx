import React, { useEffect, useRef } from "react";

interface InlineQuoteFormProps {
  className?: string;
  title?: string;
  description?: string;
}

export const InlineQuoteForm: React.FC<InlineQuoteFormProps> = ({ 
  className = "",
  title = "Demander un devis personnalisé",
  description = "Remplissez ce formulaire pour recevoir un devis adapté à vos besoins logistiques."
}) => {
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
      if (formRef.current && window.hbspt?.forms) {
        try {
          window.hbspt.forms.create({
            region: 'eu1',
            portalId: '144571109',
            formId: 'ebf2ad52-915e-4bfa-b4c0-a2ff8480054f',
            target: formRef.current
          });
        } catch (error) {
          console.error('Failed to create HubSpot form:', error);
        }
      }
    };

    loadHubSpotForm();
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
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