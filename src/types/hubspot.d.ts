
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
        load: (
          portalId: string,
          ctaId: string,
          region: string,
          useNewLoader: string,
          target: string,
          callback: () => void,
          options: any,
          additionalOptions: any
        ) => void;
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
