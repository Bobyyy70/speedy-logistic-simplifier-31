
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingChatButton } from "../contact/FloatingChatButton";
import { CustomCookieBanner } from "../cookies/CustomCookieBanner";
import { Helmet } from "react-helmet-async";
import { generateMetadata, seoPages } from "@/lib/seo";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Generate SEO metadata based on current route
  const pageData = seoPages[location.pathname];
  const metadata = generateMetadata(pageData, location.pathname);

  useEffect(() => {
    // Scroll vers le haut à chaque changement de route
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen site-background">
      <Helmet>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="language" content={metadata.language} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={metadata.canonical} />
        
        {/* Geo Tags */}
        <meta name="geo.region" content={metadata.geo.region} />
        <meta name="geo.placename" content={metadata.geo.placename} />
        <meta name="geo.position" content={metadata.geo.position} />
        <meta name="ICBM" content={metadata.geo.position} />
        
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        
        {/* Mobile & PWA */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data */}
        {metadata.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(metadata.structuredData)}
          </script>
        )}
        
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
        `}</style>
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
