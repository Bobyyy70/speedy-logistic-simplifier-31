import { useCallback } from 'react';

export const useHubSpotCTA = (ctaId: string = '248429698260') => {
  const triggerCTA = useCallback(() => {
    console.log(`🎯 Déclenchement du CTA HubSpot ${ctaId}`);
    
    if (window.hbspt && window.hbspt.cta) {
      try {
        // Rechercher le bouton CTA par classe CSS
        const ctaTrigger = document.querySelector(`.hs-cta-trigger-button-${ctaId}`);
        if (ctaTrigger) {
          // Déclencher le clic sur le CTA
          (ctaTrigger as HTMLElement).click();
          console.log(`✅ CTA ${ctaId} déclenché avec succès`);
          return true;
        } else {
          console.warn(`⚠️ Bouton CTA ${ctaId} non trouvé dans le DOM`);
        }
      } catch (error) {
        console.error(`❌ Erreur lors du déclenchement du CTA ${ctaId}:`, error);
      }
    } else {
      console.warn(`⚠️ HubSpot CTA API non disponible pour ${ctaId}`);
    }
    
    return false;
  }, [ctaId]);

  return { triggerCTA };
};