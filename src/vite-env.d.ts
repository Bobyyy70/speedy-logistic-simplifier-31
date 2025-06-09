
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
        }) => void;
      };
    };
    hsConversationsSettings?: any;
  }
}

export {};
