
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: HTMLElement | string;
        }) => void;
      };
      meetings?: {
        create: (config: {
          portalId: string;
          meetingId: string;
          target: string;
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
    hsConversationsSettings?: any;
    _hsp?: any[];
  }
}

export {};
