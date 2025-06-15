
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingChatButton } from "../contact/FloatingChatButton";
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
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://js-eu1.hs-scripts.com https://js-eu1.hsforms.net https://js.hs-analytics.net https://js.usemessages.com https://js.hs-banner.com https://static.hsappstatic.net https://cdn.gpteng.co; connect-src 'self' https://*.hubspot.com https://*.hsforms.com https://*.hs-analytics.net https://api.hubapi.com https://meetings-eu1.hubspot.com https://maps.googleapis.com https://www.google.com; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https://*.hsforms.com https://*.hubspot.com; font-src 'self' https: data:; frame-src 'self' https://*.hubspot.com https://meetings-eu1.hubspot.com https://www.google.com https://maps.google.com; worker-src 'self' blob:; child-src 'self' https://*.hubspot.com https://www.google.com; object-src 'none';" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />

        {/* HubSpot Tracking Code et Widget Chat - Global */}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/144571109.js"></script>
        
        {/* CSS personnalisé pour masquer le branding HubSpot - Global */}
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
        `}</style>
      </Helmet>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* Chat flottant global */}
      <FloatingChatButton />
    </div>
  );
};
