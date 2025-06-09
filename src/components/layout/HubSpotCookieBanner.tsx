
import React, { useEffect, useState } from 'react';

export const HubSpotCookieBanner: React.FC = () => {
  const [isHubSpotLoaded, setIsHubSpotLoaded] = useState(false);

  useEffect(() => {
    // Vérifier si HubSpot est chargé
    const checkHubSpot = () => {
      if ((window as any)._hsp || (window as any).hbspt) {
        console.log('HubSpot detecté:', { _hsp: !!(window as any)._hsp, hbspt: !!(window as any).hbspt });
        setIsHubSpotLoaded(true);
      } else {
        console.log('HubSpot pas encore chargé, nouvelle vérification dans 1s...');
        setTimeout(checkHubSpot, 1000);
      }
    };

    // Démarrer la vérification
    checkHubSpot();

    // Écouter l'événement de chargement HubSpot si disponible
    const handleHubSpotLoad = () => {
      console.log('Événement HubSpot load détecté');
      setIsHubSpotLoaded(true);
    };

    window.addEventListener('hsLoaded', handleHubSpotLoad);

    return () => {
      window.removeEventListener('hsLoaded', handleHubSpotLoad);
    };
  }, []);

  const handleShowBanner = () => {
    console.log('Tentative d\'affichage de la bannière de cookies...');
    
    try {
      // Méthode 1: Via _hsp (recommandée)
      if ((window as any)._hsp) {
        console.log('Utilisation de _hsp.push pour afficher la bannière');
        const _hsp = (window as any)._hsp = (window as any)._hsp || [];
        _hsp.push(['showBanner']);
        return;
      }

      // Méthode 2: Via hbspt (alternative)
      if ((window as any).hbspt && (window as any).hbspt.privacy) {
        console.log('Utilisation de hbspt.privacy pour afficher la bannière');
        (window as any).hbspt.privacy.showBanner();
        return;
      }

      console.warn('HubSpot n\'est pas encore chargé. Veuillez attendre quelques secondes et réessayer.');
      
      // Retry après un délai si HubSpot n'est pas encore chargé
      setTimeout(() => {
        if ((window as any)._hsp) {
          const _hsp = (window as any)._hsp = (window as any)._hsp || [];
          _hsp.push(['showBanner']);
        }
      }, 2000);

    } catch (error) {
      console.error('Erreur lors de l\'affichage de la bannière de cookies:', error);
    }
  };

  return (
    <button
      type="button"
      id="hs_show_banner_button"
      onClick={handleShowBanner}
      className="bg-[#425b76] border border-[#425b76] rounded-sm px-4 py-2.5 text-white text-sm font-normal leading-normal text-left hover:bg-[#3a4f66] transition-colors duration-200"
      title={isHubSpotLoaded ? "Afficher les paramètres des cookies" : "HubSpot en cours de chargement..."}
    >
      Paramètres des cookies
      {!isHubSpotLoaded && (
        <span className="ml-2 text-xs opacity-70">(chargement...)</span>
      )}
    </button>
  );
};
