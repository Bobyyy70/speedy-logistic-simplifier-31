
import { useState, useEffect } from 'react';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

interface CookieManagementHook {
  hasConsent: boolean;
  shouldShowBanner: boolean;
  shouldShowCustomBanner: boolean;
  isInIframe: boolean;
  isHubSpotBlocked: boolean;
  isProduction: boolean;
  getConsent: () => CookieConsent | null;
  updateConsent: (consent: Partial<CookieConsent>) => void;
  resetConsent: () => void;
}

export const useCookieManagement = (): CookieManagementHook => {
  const [hasConsent, setHasConsent] = useState(false);

  // Detect environment
  const isInIframe = window !== window.parent;
  const isProduction = window.location.hostname === 'speedelog.fr' || window.location.hostname === 'www.speedelog.fr';
  const isHubSpotBlocked = false; // Can be enhanced later if needed

  useEffect(() => {
    // Vérifier le consentement existant
    const consent = getConsent();
    setHasConsent(!!consent);

    // Cookie management initialized (removed for TBT optimization)
  }, [isProduction, isInIframe]);

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

    // Appliquer les préférences à HubSpot si disponible
    if ((window as any)._hsp) {
      (window as any)._hsp.push(['setPrivacyConsent', { 
        analyticsConsent: updated.analytics 
      }]);
      
      if (updated.analytics) {
        (window as any)._hsp.push(['trackPageView']);
      }
    }

    // Consent updated (removed for TBT optimization)
  };

  const resetConsent = () => {
    localStorage.removeItem('cookie-consent');
    setHasConsent(false);
    // Consent reset (removed for TBT optimization)
  };

  // Logique simple : afficher la bannière si pas de consentement
  const shouldShowBanner = !hasConsent;
  const shouldShowCustomBanner = !hasConsent;

  return {
    hasConsent,
    shouldShowBanner,
    shouldShowCustomBanner,
    isInIframe,
    isHubSpotBlocked,
    isProduction,
    getConsent,
    updateConsent,
    resetConsent
  };
};
