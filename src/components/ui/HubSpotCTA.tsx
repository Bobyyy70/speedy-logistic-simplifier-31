
import React, { useEffect } from "react";

interface HubSpotCTAProps {
  ctaId: string;
  portalId?: string;
  className?: string;
  children?: React.ReactNode;
}

export const HubSpotCTA: React.FC<HubSpotCTAProps> = ({ 
  ctaId, 
  portalId = "144571109", 
  className = "",
  children 
}) => {
  const uniqueId = `hs-cta-${ctaId}-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    const loadCTA = () => {
      console.log(`🎯 Tentative de chargement CTA ${ctaId}...`);
      
      if (window.hbspt && window.hbspt.cta) {
        try {
          window.hbspt.cta.load(
            portalId,           // portalId
            ctaId,              // ctaId
            "eu1",              // region
            "true",             // useNewLoader
            `#${uniqueId}`,     // target
            () => {             // callback
              console.log(`✅ CTA ${ctaId} chargé avec succès`);
            },
            {},                 // options
            {}                  // additionalOptions
          );
        } catch (error) {
          console.error(`❌ Erreur lors du chargement du CTA ${ctaId}:`, error);
        }
      } else {
        console.warn(`⚠️ HubSpot CTA API non disponible pour ${ctaId}`);
      }
    };

    // Charger immédiatement si HubSpot est disponible
    if (window.hbspt && window.hbspt.cta) {
      loadCTA();
    } else {
      // Sinon attendre que HubSpot soit chargé
      let attempts = 0;
      const maxAttempts = 20;
      
      const checkHubSpot = setInterval(() => {
        attempts++;
        console.log(`🔄 Tentative ${attempts}/${maxAttempts} de chargement HubSpot pour CTA ${ctaId}`);
        
        if (window.hbspt && window.hbspt.cta) {
          clearInterval(checkHubSpot);
          loadCTA();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkHubSpot);
          console.error(`❌ Impossible de charger HubSpot après ${maxAttempts} tentatives pour CTA ${ctaId}`);
        }
      }, 500);

      return () => clearInterval(checkHubSpot);
    }
  }, [ctaId, portalId, uniqueId]);

  return (
    <div className={className}>
      {/* Conteneur pour le CTA HubSpot */}
      <span className="hs-cta-wrapper" id={`hs-cta-wrapper-${ctaId}`}>
        <span 
          className={`hs-cta-node hs-cta-${ctaId}`} 
          id={uniqueId}
          data-hs-cos-general-type="widget" 
          data-hs-cos-type="cta"
        >
          {children}
        </span>
      </span>
    </div>
  );
};
