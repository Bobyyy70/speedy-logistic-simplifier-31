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

// Required environment variables validation
const requiredEnvVars = [
  'VITE_HUBSPOT_PORTAL_ID',
  'VITE_HUBSPOT_REGION',
  'VITE_HUBSPOT_QUOTE_FORM_ID'
];

// Log missing environment variables in production (non-blocking)
if (isProduction) {
  const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);
  if (missingVars.length > 0) {
    console.warn(`⚠️ Missing environment variables (using defaults): ${missingVars.join(', ')}`);
  }
}

// Get configuration from environment variables with fallbacks for development
export const getHubSpotConfig = (): HubSpotConfig => {
  const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID || (isDevelopment ? '144571109' : '');
  const region = import.meta.env.VITE_HUBSPOT_REGION || (isDevelopment ? 'eu1' : '');
  const quoteFormId = import.meta.env.VITE_HUBSPOT_QUOTE_FORM_ID || (isDevelopment ? 'ebf2ad52-915e-4bfa-b4c0-a2ff8480054f' : '');
  
  // Build forms API URL based on portal ID and region
  const formsApiUrl = import.meta.env.VITE_HUBSPOT_FORMS_API_URL || 
    `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`;
  
  // Build meetings URL based on region
  const meetingsUrl = import.meta.env.VITE_HUBSPOT_MEETINGS_URL || 
    (isDevelopment ? 'https://meetings-eu1.hubspot.com/falmanzo?embed=true' : '');

  return {
    portalId,
    region,
    formsApiUrl,
    chatWidgetEnabled: import.meta.env.VITE_HUBSPOT_CHAT_ENABLED !== 'false',
    meetingsUrl,
    forms: {
      quote: quoteFormId,
      contact: import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID || 'contact-form-id',
      newsletter: import.meta.env.VITE_HUBSPOT_NEWSLETTER_FORM_ID || 'newsletter-form-id'
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

// Environment validation and security logging (development only)
if (isDevelopment && import.meta.env.VITE_DEBUG_MODE !== 'false') {
  const config = getHubSpotConfig();
  const hasEnvironmentOverrides = {
    portalId: !!import.meta.env.VITE_HUBSPOT_PORTAL_ID,
    region: !!import.meta.env.VITE_HUBSPOT_REGION,
    formsApiUrl: !!import.meta.env.VITE_HUBSPOT_FORMS_API_URL,
    chatEnabled: import.meta.env.VITE_HUBSPOT_CHAT_ENABLED !== undefined,
    meetingsUrl: !!import.meta.env.VITE_HUBSPOT_MEETINGS_URL,
    quoteFormId: !!import.meta.env.VITE_HUBSPOT_QUOTE_FORM_ID
  };

  console.log('HubSpot Configuration:', {
    environment: 'development',
    configLoaded: !!(config.portalId && config.region && config.forms.quote),
    hasEnvironmentOverrides,
    securityNote: 'Using development fallbacks - configure environment variables for production'
  });

  // Security warning if sensitive data detected in development
  if (!hasEnvironmentOverrides.portalId || !hasEnvironmentOverrides.quoteFormId) {
    console.warn('⚠️ Security Notice: Using hardcoded HubSpot values in development. Set environment variables for production.');
  }
}