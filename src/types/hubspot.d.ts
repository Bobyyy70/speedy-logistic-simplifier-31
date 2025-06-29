
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: () => void;
          onFormSubmit?: (form: any) => void;
          onFormSubmitted?: (form: any) => void;
          onFormDefinitionFetchError?: (error: any) => void;
          onFormRender?: () => void;
        }) => void;
      };
      cta: {
        load: (portalId: string, ctaId: string, options?: {
          region?: string;
          useNewLoader?: string;
        }) => void;
      };
    };
    HubSpotConversations?: {
      widget: {
        open: () => void;
        close: () => void;
        toggle: () => void;
      };
    };
    _hsp?: any[];
  }
}

export {};
