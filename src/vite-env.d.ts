
/// <reference types="vite/client" />

// Déclarations globales pour HubSpot
declare global {
  interface Window {
    HubSpotConversations?: any;
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormSubmitted?: (form: any) => void;
        }) => void;
      };
      meetings?: {
        create: (config: {
          portalId: string;
          meetingId: string;
          target: string;
        }) => void;
      };
      cta?: {
        load: () => void;
      };
    };
    hsConversationsSettings?: any;
    openHubSpotForm?: () => void;
  }
}

export {};
