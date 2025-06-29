
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
        
        {/* Script CTA HubSpot */}
        <script src="//js-eu1.hsforms.net/forms/v2.js" type="text/javascript" async defer></script>
        
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

          /* Styles pour les CTAs HubSpot */
          .hs-cta-wrapper {
            display: inline-block;
          }
          
          .hs-cta-node {
            background: linear-gradient(to right, #2563eb, #1d4ed8) !important;
            color: white !important;
            font-weight: bold !important;
            box-shadow: 0 25px 50px -12px rgba(47, 104, 243, 0.25) !important;
            transition: all 0.3s ease !important;
            height: 56px !important;
            border-radius: 9999px !important;
            padding: 16px 48px !important;
            font-size: 18px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: pointer !important;
            border: none !important;
            text-decoration: none !important;
          }
          
          .hs-cta-node:hover {
            transform: translateY(-2px);
            box-shadow: 0 32px 64px -12px rgba(47, 104, 243, 0.35) !important;
          }
        `}</style>

        <script type="text/javascript">
          {`
            // Configuration HubSpot globale
            window.hsConversationsSettings = {
              loadImmediately: false
            };

            // Initialiser les CTAs une fois HubSpot chargé
            window.addEventListener('load', function() {
              console.log('🚀 Initialisation des CTAs HubSpot...');
              
              var checkHubSpot = setInterval(function() {
                if (window.hbspt && window.hbspt.cta) {
                  clearInterval(checkHubSpot);
                  console.log('✅ HubSpot CTA API disponible');
                  
                  // Charger tous les CTAs
                  try {
                    window.hbspt.cta.load('144571109', '248429698260', {
                      region: 'eu1',
                      useNewLoader: 'true'
                    });
                    console.log('✅ CTA principal chargé');
                  } catch (error) {
                    console.error('❌ Erreur chargement CTA:', error);
                  }
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
