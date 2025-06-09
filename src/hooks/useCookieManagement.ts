
import { useState, useEffect } from 'react';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

interface CookieManagementHook {
  hasConsent: boolean;
  isInIframe: boolean;
  shouldShowCustomBanner: boolean;
  isHubSpotBlocked: boolean;
  isProduction: boolean;
  getConsent: () => CookieConsent | null;
  updateConsent: (consent: Partial<CookieConsent>) => void;
  resetConsent: () => void;
}

export const useCookieManagement = (): CookieManagementHook => {
  const [hasConsent, setHasConsent] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  const [isHubSpotBlocked, setIsHubSpotBlocked] = useState(false);
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    // Détecter l'environnement
    const inIframe = window !== window.top;
    const isLovablePreview = window.location.hostname.includes('lovable');
    const isProd = !isLovablePreview && !window.location.hostname.includes('localhost');
    
    setIsInIframe(inIframe);
    setIsProduction(isProd);

    // Vérifier le consentement existant
    const consent = getConsent();
    setHasConsent(!!consent);

    // Détecter si HubSpot est bloqué (plus conservateur)
    setTimeout(() => {
      const hubspotWorking = !!(window as any)._hsp && (window as any)._hsp.length >= 0;
      const cookiesBlocked = inIframe || document.cookie === '' || !document.cookie.includes('hubspotutk');
      setIsHubSpotBlocked(!hubspotWorking || cookiesBlocked);
    }, 2000);

    console.log('🍪 Cookie Management:', {
      inIframe,
      isProduction: isProd,
      hasConsent: !!consent,
      domain: window.location.hostname
    });
  }, []);

  const getConsent = (): CookieConsent | null => {
    try {
      const stored = localStorage.getItem('cookie-consent');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  };

  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    const existing = getConsent() || {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: 0
    };

    const updated = {
      ...existing,
      ...newConsent,
      timestamp: Date.now()
    };

    localStorage.setItem('cookie-consent', JSON.stringify(updated));
    setHasConsent(true);

    // Appliquer les préférences à HubSpot
    if ((window as any)._hsp) {
      (window as any)._hsp.push(['setPrivacyConsent', { 
        analyticsConsent: updated.analytics 
      }]);
      
      if (updated.analytics) {
        (window as any)._hsp.push(['trackPageView']);
      }
    }

    console.log('✅ Consentement mis à jour:', updated);
  };

  const resetConsent = () => {
    localStorage.removeItem('cookie-consent');
    setHasConsent(false);
    console.log('🔄 Consentement réinitialisé');
  };

  // Logique d'affichage : custom banner seulement si HubSpot est bloqué
  const shouldShowCustomBanner = !hasConsent && isHubSpotBlocked;

  return {
    hasConsent,
    isInIframe,
    shouldShowCustomBanner,
    isHubSpotBlocked,
    isProduction,
    getConsent,
    updateConsent,
    resetConsent
  };
};
