
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
  getConsent: () => CookieConsent | null;
  updateConsent: (consent: Partial<CookieConsent>) => void;
  resetConsent: () => void;
}

export const useCookieManagement = (): CookieManagementHook => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Vérifier le consentement existant
    const consent = getConsent();
    setHasConsent(!!consent);

    console.log('🍪 Cookie Management initialisé:', {
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

    // Appliquer les préférences à HubSpot si disponible
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

  // Logique simple : afficher la bannière si pas de consentement
  const shouldShowBanner = !hasConsent;

  return {
    hasConsent,
    shouldShowBanner,
    getConsent,
    updateConsent,
    resetConsent
  };
};
