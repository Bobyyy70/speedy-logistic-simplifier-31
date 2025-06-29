
import React from "react";

interface GlobalHubSpotCTAProps {
  className?: string;
}

export const GlobalHubSpotCTA: React.FC<GlobalHubSpotCTAProps> = ({ className = "" }) => {
  return (
    <span className={`hs-cta-wrapper global-hubspot-cta ${className}`} id="hs-cta-wrapper-248269354213">
      <span className="hs-cta-node hs-cta-248269354213" id="hs-cta-248269354213">
        <div id="hs-cta-ie-element"></div>
        <a href="https://cta-redirect.hubspot.com/cta/redirect/144571109/248269354213" 
           target="_blank" 
           rel="noopener noreferrer"
           className="hs-cta-trigger-button hs-cta-trigger-button-248269354213">
          <img className="hs-cta-img" 
               id="hs-cta-img-248269354213" 
               style={{borderWidth: 0}} 
               src="https://no-cache.hubspot.com/cta/default/144571109/248269354213.png" 
               alt="Réserver ma consultation gratuite" />
        </a>
      </span>
    </span>
  );
};
