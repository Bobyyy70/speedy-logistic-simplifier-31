
import React, { useEffect, useState } from 'react';
import { useCookieManagement } from '@/hooks/useCookieManagement';

export const HubSpotCookieBanner: React.FC = () => {
  const [isHubSpotLoaded, setIsHubSpotLoaded] = useState(false);
  const { isInIframe, isHubSpotBlocked, isProduction } = useCookieManagement();

  useEffect(() => {
    let checkAttempts = 0;
    const maxAttempts = 10;

    const checkHubSpot = () => {
      checkAttempts++;
      const hasHsp = !!(window as any)._hsp;
      const hasHbspt = !!(window as any).hbspt;
      const hasPrivacy = !!(window as any).hbspt?.privacy;
      
      if (hasHsp || (hasHbspt && hasPrivacy)) {
        setIsHubSpotLoaded(true);
        
        // Essayer d'afficher la bannière automatiquement en production seulement
        if (isProduction && !document.cookie.includes('__hs_cookie_cat_pref') && !isInIframe) {
          setTimeout(() => {
            tryShowBanner();
          }, 500);
        }
      } else if (checkAttempts < maxAttempts) {
        setTimeout(checkHubSpot, 1000);
      }
    };

    checkHubSpot();
  }, [isInIframe, isProduction]);

  const tryShowBanner = () => {
    if (isInIframe) return false;
    
    try {
      if ((window as any)._hsp) {
        (window as any)._hsp.push(['showBanner']);
        return true;
      }

      if ((window as any).hbspt?.privacy?.showBanner) {
        (window as any).hbspt.privacy.showBanner();
        return true;
      }

      return false;
    } catch (error) {
      console.error('Erreur lors de l\'affichage de la bannière:', error);
      return false;
    }
  };

  const handleShowBanner = () => {
    const success = tryShowBanner();
    
    if (!success) {
      if (isInIframe) {
        alert(
          'Vous êtes dans l\'environnement de prévisualisation.\n' +
          'La bannière de cookies HubSpot sera disponible en production.'
        );
      } else {
        alert(
          'La bannière de cookies HubSpot n\'est pas disponible.\n' +
          'Vérifiez la configuration dans votre compte HubSpot.'
        );
      }
    }
  };

  const resetCookies = () => {
    const cookiesToRemove = [
      '__hs_cookie_cat_pref',
      'hubspotutk',
      '__hstc',
      '__hssc',
      '__hssrc'
    ];
    
    cookiesToRemove.forEach(cookie => {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
    });
    
    localStorage.removeItem('cookie-consent');
    
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // En production, afficher seulement le bouton principal
  if (isProduction) {
    return (
      <button
        type="button"
        onClick={handleShowBanner}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        title="Paramètres des cookies"
      >
        Gestion des cookies
      </button>
    );
  }

  // En développement, afficher l'interface complète
  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={handleShowBanner}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        title={isInIframe ? "Test bannière (iframe détectée)" : "Paramètres des cookies HubSpot"}
      >
        {isInIframe ? "Test HubSpot (iframe)" : "Gestion des cookies"}
        {!isHubSpotLoaded && (
          <span className="ml-1 text-xs opacity-70">(chargement...)</span>
        )}
      </button>
      
      <button
        type="button"
        onClick={resetCookies}
        className="text-xs text-red-600 hover:text-red-700 transition-colors"
        title="Reset cookies pour tester (dev uniquement)"
      >
        Reset
      </button>
    </div>
  );
};
