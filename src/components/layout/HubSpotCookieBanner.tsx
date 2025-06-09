
import React, { useEffect, useState } from 'react';
import { useCookieManagement } from '@/hooks/useCookieManagement';

export const HubSpotCookieBanner: React.FC = () => {
  const [isHubSpotLoaded, setIsHubSpotLoaded] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string>('');
  const { isInIframe, isHubSpotBlocked, shouldShowCustomBanner } = useCookieManagement();

  useEffect(() => {
    let checkAttempts = 0;
    const maxAttempts = 15; // Augmenté pour plus de chances

    const checkHubSpot = () => {
      checkAttempts++;
      const hasHsp = !!(window as any)._hsp;
      const hasHbspt = !!(window as any).hbspt;
      const hasPrivacy = !!(window as any).hbspt?.privacy;
      
      console.log(`🔍 Tentative ${checkAttempts}/${maxAttempts} - HubSpot Status:`, {
        _hsp: hasHsp,
        hbspt: hasHbspt,
        privacy: hasPrivacy,
        cookies: document.cookie.includes('hubspotutk'),
        iframe: isInIframe,
        domain: window.location.hostname
      });

      setDebugInfo(`${checkAttempts}/${maxAttempts}: _hsp=${hasHsp}, hbspt=${hasHbspt}, iframe=${isInIframe}`);

      if (hasHsp || (hasHbspt && hasPrivacy)) {
        console.log('✅ HubSpot est prêt !');
        setIsHubSpotLoaded(true);
        setDebugInfo('HubSpot chargé');
        
        // Essayer d'afficher la bannière automatiquement
        if (!document.cookie.includes('__hs_cookie_cat_pref') && !isInIframe) {
          console.log('🍪 Tentative d\'affichage automatique de la bannière...');
          setTimeout(() => {
            tryShowBanner();
          }, 500);
        }
      } else if (checkAttempts < maxAttempts) {
        setTimeout(checkHubSpot, 1000);
      } else {
        console.warn('⚠️ HubSpot n\'a pas pu être chargé après', maxAttempts, 'tentatives');
        setDebugInfo('Échec du chargement HubSpot');
      }
    };

    checkHubSpot();

    // Écouter les événements HubSpot
    const handleHubSpotReady = (event: any) => {
      console.log('📢 Événement HubSpot détecté:', event.type);
      setIsHubSpotLoaded(true);
    };

    window.addEventListener('hsLoaded', handleHubSpotReady);
    window.addEventListener('hsFormReady', handleHubSpotReady);

    return () => {
      window.removeEventListener('hsLoaded', handleHubSpotReady);
      window.removeEventListener('hsFormReady', handleHubSpotReady);
    };
  }, [isInIframe]);

  const tryShowBanner = () => {
    console.log('🎯 Tentative d\'affichage de la bannière de cookies...');
    
    if (isInIframe) {
      console.log('⚠️ Affichage de bannière bloqué dans iframe');
      return false;
    }
    
    try {
      // Méthode 1: Via _hsp.push (recommandée)
      if ((window as any)._hsp) {
        console.log('📤 Utilisation de _hsp.push([\'showBanner\'])');
        (window as any)._hsp.push(['showBanner']);
        return true;
      }

      // Méthode 2: Via hbspt.privacy.showBanner
      if ((window as any).hbspt?.privacy?.showBanner) {
        console.log('📤 Utilisation de hbspt.privacy.showBanner()');
        (window as any).hbspt.privacy.showBanner();
        return true;
      }

      // Méthode 3: Forcer via reset + reload
      if ((window as any).hbspt?.privacy) {
        console.log('📤 Tentative de reset + reload de la bannière');
        document.cookie = '__hs_cookie_cat_pref=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        setTimeout(() => {
          if ((window as any).hbspt?.privacy?.showBanner) {
            (window as any).hbspt.privacy.showBanner();
          }
        }, 100);
        return true;
      }

      console.warn('❌ Aucune méthode HubSpot disponible pour afficher la bannière');
      return false;

    } catch (error) {
      console.error('💥 Erreur lors de l\'affichage de la bannière:', error);
      return false;
    }
  };

  const handleShowBanner = () => {
    const success = tryShowBanner();
    
    if (!success) {
      // Afficher un message informatif selon le contexte
      if (isInIframe) {
        alert(
          'ℹ️ Information bannière de cookies\n\n' +
          'Vous êtes actuellement dans l\'environnement de prévisualisation.\n' +
          'La bannière de cookies HubSpot ne peut pas s\'afficher dans ce contexte.\n\n' +
          '✅ En production sur votre domaine, la bannière fonctionnera normalement.\n\n' +
          'Vous pouvez tester avec la bannière alternative disponible sur cette page.'
        );
      } else {
        alert(
          'La bannière de cookies HubSpot n\'est pas disponible.\n\n' +
          'Vérifiez que :\n' +
          '1. La bannière de cookies est activée dans HubSpot\n' +
          '2. Les paramètres GDPR sont configurés\n' +
          '3. Votre région est configurée pour l\'Europe\n\n' +
          'Consultez la console pour plus de détails.'
        );
      }
    }
  };

  const resetCookies = () => {
    console.log('🔄 Reset des cookies HubSpot...');
    
    // Supprimer tous les cookies HubSpot
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
    
    // Reset du localStorage aussi
    localStorage.removeItem('cookie-consent');
    
    setTimeout(() => {
      console.log('🔄 Rechargement de la page...');
      window.location.reload();
    }, 100);
  };

  // Message contextuel selon l'environnement
  const getButtonTitle = () => {
    if (!isHubSpotLoaded) return "HubSpot en cours de chargement...";
    if (isInIframe) return "Test bannière (iframe détectée)";
    if (shouldShowCustomBanner) return "HubSpot bloqué - bannière alternative disponible";
    return "Afficher les paramètres des cookies";
  };

  const getButtonText = () => {
    if (isInIframe) return "Test cookies (iframe)";
    return "Paramètres des cookies";
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        id="hs_show_banner_button"
        onClick={handleShowBanner}
        className="bg-[#425b76] border border-[#425b76] rounded-sm px-4 py-2.5 text-white text-sm font-normal leading-normal text-left hover:bg-[#3a4f66] transition-colors duration-200"
        title={getButtonTitle()}
      >
        {getButtonText()}
        {!isHubSpotLoaded && (
          <span className="ml-2 text-xs opacity-70">(chargement...)</span>
        )}
        {isInIframe && (
          <span className="ml-2 text-xs opacity-70">🖼️</span>
        )}
      </button>
      
      {process.env.NODE_ENV === 'development' && (
        <button
          type="button"
          onClick={resetCookies}
          className="bg-red-600 border border-red-600 rounded-sm px-2 py-1 text-white text-xs hover:bg-red-700 transition-colors"
          title="Reset cookies pour tester (dev uniquement)"
        >
          Reset cookies
        </button>
      )}
      
      {process.env.NODE_ENV === 'development' && debugInfo && (
        <span className="text-xs text-slate-400 max-w-xs truncate" title={debugInfo}>
          {debugInfo}
        </span>
      )}
    </div>
  );
};
