
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: HTMLElement;
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
