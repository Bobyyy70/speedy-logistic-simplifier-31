// HubSpot configuration with environment variable support
// This replaces hardcoded values with configurable environment variables

interface HubSpotConfig {
  portalId: string;
  region: string;
  formsApiUrl: string;
  chatWidgetEnabled: boolean;
  meetingsUrl: string;
  forms: {
    quote: string;
    contact: string;
    newsletter: string;
  };
}

// Environment-based configuration
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

// Default configuration (fallback values)
const DEFAULT_CONFIG: HubSpotConfig = {
  portalId: '144571109',
  region: 'eu1',
  formsApiUrl: 'https://js-eu1.hsforms.net/forms/embed/144571109.js',
  chatWidgetEnabled: true,
  meetingsUrl: 'https://meetings-eu1.hubspot.com/falmanzo?embed=true',
  forms: {
    quote: 'ebf2ad52-915e-4bfa-b4c0-a2ff8480054f',
    contact: 'contact-form-id', // To be configured
    newsletter: 'newsletter-form-id' // To be configured
  }
};

// Get configuration from environment variables or use defaults
export const getHubSpotConfig = (): HubSpotConfig => {
  // In production, these should come from environment variables
  // For now, we use the defaults but structure it for easy migration
  return {
    portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID || DEFAULT_CONFIG.portalId,
    region: import.meta.env.VITE_HUBSPOT_REGION || DEFAULT_CONFIG.region,
    formsApiUrl: import.meta.env.VITE_HUBSPOT_FORMS_API_URL || DEFAULT_CONFIG.formsApiUrl,
    chatWidgetEnabled: import.meta.env.VITE_HUBSPOT_CHAT_ENABLED !== 'false',
    meetingsUrl: import.meta.env.VITE_HUBSPOT_MEETINGS_URL || DEFAULT_CONFIG.meetingsUrl,
    forms: {
      quote: import.meta.env.VITE_HUBSPOT_QUOTE_FORM_ID || DEFAULT_CONFIG.forms.quote,
      contact: import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID || DEFAULT_CONFIG.forms.contact,
      newsletter: import.meta.env.VITE_HUBSPOT_NEWSLETTER_FORM_ID || DEFAULT_CONFIG.forms.newsletter
    }
  };
};

// Utility functions for common HubSpot operations
export const hubSpotUtils = {
  // Build the HubSpot script URL
  getScriptUrl: (config: HubSpotConfig = getHubSpotConfig()) => {
    return `https://js-${config.region}.hsforms.net/forms/embed/${config.portalId}.js`;
  },

  // Check if HubSpot is available
  isHubSpotLoaded: () => {
    return typeof window !== 'undefined' && 
           window.hbspt && 
           typeof window.hbspt.forms === 'object';
  },

  // Check if HubSpot chat is available
  isChatAvailable: () => {
    return typeof window !== 'undefined' && 
           window.HubSpotConversations && 
           typeof window.HubSpotConversations.widget === 'object';
  },

  // Create a form with error handling
  createForm: async (formId: string, targetElement: HTMLElement, config: HubSpotConfig = getHubSpotConfig()) => {
    if (!hubSpotUtils.isHubSpotLoaded()) {
      throw new Error('HubSpot forms library not loaded');
    }

    try {
      window.hbspt.forms.create({
        region: config.region,
        portalId: config.portalId,
        formId: formId,
        target: targetElement
      });
    } catch (error) {
      console.error('Failed to create HubSpot form:', error);
      throw error;
    }
  },

  // Open chat widget with error handling
  openChat: () => {
    if (hubSpotUtils.isChatAvailable()) {
      try {
        window.HubSpotConversations.widget.open();
        return true;
      } catch (error) {
        console.error('Failed to open HubSpot chat:', error);
        return false;
      }
    }
    return false;
  }
};

// Environment validation (run in development)
if (isDevelopment) {
  console.log('HubSpot Configuration:', {
    environment: 'development',
    config: getHubSpotConfig(),
    hasEnvironmentOverrides: {
      portalId: !!import.meta.env.VITE_HUBSPOT_PORTAL_ID,
      region: !!import.meta.env.VITE_HUBSPOT_REGION,
      formsApiUrl: !!import.meta.env.VITE_HUBSPOT_FORMS_API_URL,
      chatEnabled: import.meta.env.VITE_HUBSPOT_CHAT_ENABLED !== undefined,
      meetingsUrl: !!import.meta.env.VITE_HUBSPOT_MEETINGS_URL
    }
  });
}