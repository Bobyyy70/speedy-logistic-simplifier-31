
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingChatButton } from "../contact/FloatingChatButton";
import { IdleHydrator } from "@/components/performance/IdleHydrator";

import { BreadcrumbSEO } from "@/components/ui/breadcrumb-seo";
import { Helmet } from "react-helmet-async";
import { generateMetadata, seoPages } from "@/lib/seo";
import { getHubSpotConfig } from "@/lib/hubspot-config";
import { CriticalResourcePreloader } from "@/components/performance/CriticalResourcePreloader";
import { SeoAuditWidget } from "@/components/seo/SeoAuditWidget";
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

  // Defer HubSpot loading until user interaction to reduce initial JS execution
  useEffect(() => {
    if (!import.meta.env.PROD) return; // avoid in dev
    const { portalId, region } = getHubSpotConfig();
    const scriptId = 'hs-script-loader';
    if (!portalId || !region) return;
    if (document.getElementById(scriptId)) return;

    let hubspotLoaded = false;
    let idleCallback: number;
    
    const inject = () => {
      if (hubspotLoaded || document.getElementById(scriptId)) return;
      hubspotLoaded = true;
      
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.id = scriptId;
      s.async = true;
      s.defer = true;
      s.src = `https://js-${region}.hs-scripts.com/${portalId}.js`;
      s.onload = () => console.log("HubSpot script loaded");
      s.onerror = () => console.error("Failed to load HubSpot script");
      document.body.appendChild(s);
    };

    // Load on user interaction or after extended idle time
    const handleUserInteraction = () => {
      inject();
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    const onLoad = () => {
      // @ts-ignore - requestIdleCallback may not exist on Window type
      const ric = window.requestIdleCallback as any;
      if (typeof ric === 'function') {
        idleCallback = ric(inject, { timeout: 8000 }); // Increased timeout
      } else {
        setTimeout(inject, 5000); // Increased delay
      }
      
      // Also listen for user interactions to load earlier if needed
      document.addEventListener('scroll', handleUserInteraction, { passive: true, once: true });
      document.addEventListener('click', handleUserInteraction, { once: true });
      document.addEventListener('touchstart', handleUserInteraction, { passive: true, once: true });
      document.addEventListener('keydown', handleUserInteraction, { once: true });
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }

    return () => {
      if (idleCallback && typeof (window as any).cancelIdleCallback === 'function') {
        (window as any).cancelIdleCallback(idleCallback);
      }
      window.removeEventListener('load', onLoad);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen site-background">
      <CriticalResourcePreloader />
      <Helmet>
        <html lang="fr" />
        <meta charSet="utf-8" />
        
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
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="fr" href={metadata.canonical} />
        <link rel="alternate" hrefLang="fr-FR" href={metadata.canonical} />
        <link rel="alternate" hrefLang="x-default" href={metadata.canonical} />
        
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
          Array.isArray(metadata.structuredData) 
            ? metadata.structuredData.map((schema, index) => (
                <script key={index} type="application/ld+json">
                  {JSON.stringify(schema)}
                </script>
              ))
            : (
                <script type="application/ld+json">
                  {JSON.stringify(metadata.structuredData)}
                </script>
              )
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

          /* Empêcher la bannière cookies de pousser le contenu */
          #hs-eu-cookie-confirmation,
          .hs-cookie-notification,
          [id*="cookie"] [class*="banner"],
          [class*="cookie"] [class*="banner"] {
            position: fixed !important;
            bottom: 0 !important;
            top: auto !important;
            left: 0; right: 0;
            width: 100% !important;
            z-index: 2147483647 !important;
          }
        `}</style>
      </Helmet>

      <Header />
      <main className="flex-1">
        <BreadcrumbSEO />
        {children}
      </main>
      <IdleHydrator>
        <Footer />
      </IdleHydrator>
      
      {/* Chat flottant global (monté après idle) */}
      <IdleHydrator>
        <FloatingChatButton />
      </IdleHydrator>

      {import.meta.env.DEV && <SeoAuditWidget />}
      
      {/* Gestion des cookies: HubSpot (production) et bannière custom (dev) gérés dans le Footer */}
    </div>
  );
};
