
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingChatButton } from "../contact/FloatingChatButton";
import { CustomCookieBanner } from "../cookies/CustomCookieBanner";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll vers le haut à chaque changement de route
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Charger les CTAs HubSpot si pas déjà fait
    if (window.hbspt && window.hbspt.cta) {
      window.hbspt.cta.load();
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen site-background">
      <Helmet>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://speedelog.fr" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Scripts HubSpot globaux */}
        <script src="//js-eu1.hs-scripts.com/144571109.js" type="text/javascript" async defer></script>
        
        {/* CSS personnalisé pour masquer le branding HubSpot */}
        <style>{`
          /* Masquer le branding HubSpot du widget chat */
          #hubspot-messages-iframe-container .VizExIcon,
          #hubspot-messages-iframe-container [data-test-id="chat-widget-header"] .VizExIcon,
          iframe[title*="HubSpot"] + .VizExIcon,
          .hubspot-link,
          [href*="hubspot.com"] {
            display: none !important;
          }

          /* Personnaliser les couleurs du widget chat */
          #hubspot-messages-iframe-container {
            --primary-color: #2563eb;
            --secondary-color: #1d4ed8;
          }

          /* Masquer le logo "Powered by HubSpot" */
          iframe[title*="HubSpot"] ~ div[class*="branding"],
          iframe[title*="HubSpot"] ~ div[class*="powered"],
          .hubspot-widget-footer,
          .widget-footer,
          [class*="powered-by"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }

          /* Style pour le CTA global */
          .global-hubspot-cta {
            display: inline-block;
          }
          
          .global-hubspot-cta img {
            max-height: 40px;
            width: auto;
            border-radius: 8px;
            transition: transform 0.2s ease;
          }
          
          .global-hubspot-cta:hover img {
            transform: scale(1.05);
          }
        `}</style>

        <script type="text/javascript">
          {`
            // Configuration HubSpot globale
            window.hsConversationsSettings = {
              loadImmediately: false
            };
            
            // Charger les CTAs HubSpot quand disponible
            window.addEventListener('load', function() {
              var checkHubSpot = setInterval(function() {
                if (window.hbspt && window.hbspt.cta) {
                  clearInterval(checkHubSpot);
                  window.hbspt.cta.load(144571109, '248269354213', {
                    "useNewLoader":"true",
                    "region":"eu1"
                  });
                }
              }, 500);
            });
          `}
        </script>
      </Helmet>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* Chat flottant global */}
      <FloatingChatButton />
      
      {/* Bannière de cookies globale */}
      <CustomCookieBanner />
    </div>
  );
};
