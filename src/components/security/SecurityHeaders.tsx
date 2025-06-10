
import { Helmet } from "react-helmet-async";

/**
 * Composant pour ajouter les en-têtes de sécurité via meta tags
 * Protection contre XSS, clickjacking, et autres attaques
 */
export const SecurityHeaders = () => {
  return (
    <Helmet>
      {/* Content Security Policy pour prévenir XSS */}
      <meta 
        httpEquiv="Content-Security-Policy" 
        content="default-src 'self'; 
                 script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://js.hubspot.com https://js.hs-scripts.com https://js.hs-analytics.net; 
                 style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
                 font-src 'self' https://fonts.gstatic.com; 
                 img-src 'self' data: https: blob:; 
                 connect-src 'self' https://api.hubapi.com https://*.supabase.co wss://*.supabase.co; 
                 frame-src 'self' https://calendar.google.com https://app.hubspot.com; 
                 object-src 'none'; 
                 base-uri 'self';" 
      />
      
      {/* Protection contre le clickjacking */}
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      
      {/* Prévention du MIME-sniffing */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      
      {/* Protection XSS intégrée du navigateur */}
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Forcer HTTPS en production */}
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
      
      {/* Contrôle du referrer */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};
