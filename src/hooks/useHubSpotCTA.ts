import { useCallback } from 'react';

export const useHubSpotCTA = (ctaId: string = '248429698260') => {
  const triggerCTA = useCallback(() => {
    console.log(`🎯 Déclenchement du CTA HubSpot ${ctaId}`);
    
    // Essayer plusieurs méthodes pour déclencher le CTA
    try {
      // Méthode 1: Rechercher le bouton CTA par classe CSS
      const ctaTrigger = document.querySelector(`.hs-cta-trigger-button-${ctaId}`);
      if (ctaTrigger) {
        (ctaTrigger as HTMLElement).click();
        console.log(`✅ CTA ${ctaId} déclenché avec succès (méthode 1)`);
        return true;
      }

      // Méthode 2: Rechercher par attributs HubSpot
      const ctaNode = document.querySelector(`[id*="hs-cta-${ctaId}"]`);
      if (ctaNode) {
        (ctaNode as HTMLElement).click();
        console.log(`✅ CTA ${ctaId} déclenché avec succès (méthode 2)`);
        return true;
      }

      // Méthode 3: Déclencher l'événement directement si HubSpot est disponible
      if (window.hbspt) {
        // Déclencher l'ouverture du calendrier via l'événement personnalisé
        const event = new CustomEvent('openCalendarAfterForm');
        window.dispatchEvent(event);
        console.log(`✅ Événement calendrier déclenché pour CTA ${ctaId}`);
        return true;
      }

      console.warn(`⚠️ Aucune méthode disponible pour CTA ${ctaId}`);
      return false;
      
    } catch (error) {
      console.error(`❌ Erreur lors du déclenchement du CTA ${ctaId}:`, error);
      return false;
    }
  }, [ctaId]);

  return { triggerCTA };
};