
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
  const [isHubSpotLoaded, setIsHubSpotLoaded] = React.useState(false);
  const [loadAttempts, setLoadAttempts] = React.useState(0);

  useEffect(() => {
    const checkHubSpot = () => {
      if (window.hbspt) {
        console.log(`✅ HubSpot détecté pour CTA ${ctaId}`);
        setIsHubSpotLoaded(true);
        
        // Injecter le CTA dans le DOM
        setTimeout(() => {
          const wrapper = document.getElementById(`hs-cta-wrapper-${ctaId}`);
          if (wrapper && !wrapper.querySelector('.hs-cta-embed')) {
            wrapper.innerHTML = `
              <span class="hs-cta-wrapper" data-hs-cos-general-type="widget" data-hs-cos-type="cta">
                <span class="hs-cta-node hs-cta-${ctaId}" id="hs-cta-${ctaId}" data-hs-cos-general-type="widget" data-hs-cos-type="cta">
                  <a href="https://cta-redirect.hubspot.com/${portalId}/${ctaId}" target="_blank" rel="noopener">
                    <img class="hs-cta-img" id="hs-cta-img-${ctaId}" style="border-width:0px;" src="https://no-cache.hubspot.com/cta/default/${portalId}/${ctaId}.png" alt=""/>
                  </a>
                </span>
              </span>
            `;
          }
        }, 100);
        
        return true;
      }
      return false;
    };

    // Vérification immédiate
    if (checkHubSpot()) return;

    // Sinon essayer périodiquement
    const interval = setInterval(() => {
      setLoadAttempts(prev => prev + 1);
      
      if (checkHubSpot() || loadAttempts >= 10) {
        clearInterval(interval);
        if (loadAttempts >= 10) {
          console.warn(`⚠️ Timeout HubSpot pour CTA ${ctaId} - utilisation du fallback`);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [ctaId, portalId, loadAttempts]);

  // Fallback si HubSpot ne charge pas
  if (!isHubSpotLoaded && loadAttempts >= 10) {
    return (
      <div className={className}>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-3"
          onClick={() => {
            // Déclencher l'ouverture du calendrier directement
            const event = new CustomEvent('openCalendarAfterForm');
            window.dispatchEvent(event);
          }}
        >
          {children}
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Conteneur pour le CTA HubSpot */}
      <div className="hs-cta-wrapper" id={`hs-cta-wrapper-${ctaId}`}>
        {!isHubSpotLoaded && (
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-3"
            disabled
          >
            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
            Chargement...
          </button>
        )}
      </div>
    </div>
  );
};
