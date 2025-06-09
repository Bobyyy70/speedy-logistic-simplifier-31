
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
  getConsent: () => CookieConsent | null;
  updateConsent: (consent: Partial<CookieConsent>) => void;
  resetConsent: () => void;
}

export const useCookieManagement = (): CookieManagementHook => {
  const [hasConsent, setHasConsent] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  const [isHubSpotBlocked, setIsHubSpotBlocked] = useState(false);

  useEffect(() => {
    // Détecter si on est dans un iframe
    const inIframe = window !== window.top;
    setIsInIframe(inIframe);

    // Vérifier le consentement existant
    const consent = getConsent();
    setHasConsent(!!consent);

    // Détecter si HubSpot est bloqué
    setTimeout(() => {
      const hubspotWorking = !!(window as any)._hsp && (window as any)._hsp.length >= 0;
      const cookiesBlocked = document.cookie === '' || !document.cookie.includes('hubspotutk');
      setIsHubSpotBlocked(!hubspotWorking || cookiesBlocked);
    }, 2000);

    console.log('🍪 Cookie Management:', {
      inIframe,
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

  const shouldShowCustomBanner = !hasConsent && (isInIframe || isHubSpotBlocked);

  return {
    hasConsent,
    isInIframe,
    shouldShowCustomBanner,
    isHubSpotBlocked,
    getConsent,
    updateConsent,
    resetConsent
  };
};
