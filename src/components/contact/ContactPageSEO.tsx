
import React from "react";
import { Helmet } from "react-helmet-async";

export const ContactPageSEO = () => {
  return (
    <Helmet>
      <title>Contact Speed E-Log - Réservez votre consultation logistique gratuite</title>
      <meta name="description" content="Contactez Speed E-Log pour optimiser votre logistique e-commerce. Réservez une consultation gratuite, utilisez nos formulaires de contact et SAV. Réponse sous 24h garantie. Rendez-vous au 37 Rue de Rémaucourt, Port-sur-Saône." />
      <meta name="keywords" content="contact speed e-log, consultation logistique, service client, SAV, rendez-vous, Port-sur-Saône, 37 rue rémaucourt, formulaire contact, calendrier" />
      <meta name="geo.region" content="FR-70" />
      <meta name="geo.placename" content="Port-sur-Saône" />
      <meta name="geo.position" content="47.690249;6.042856" />
      <meta name="ICBM" content="47.690249, 6.042856" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://speedelog.net/contact" />
      <meta property="og:title" content="Contact Speed E-Log - Consultation logistique gratuite" />
      <meta property="og:description" content="Réservez votre consultation logistique gratuite avec Speed E-Log. Experts en solutions e-commerce pour PME à Port-sur-Saône." />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:image" content="https://speedelog.net/lovable-uploads/5c1b4538-57b0-4f38-af9e-dda22195de74.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://speedelog.net/contact" />
      <meta property="twitter:title" content="Contact Speed E-Log - Consultation gratuite" />
      <meta property="twitter:description" content="Réservez votre consultation logistique gratuite avec Speed E-Log." />
      <meta property="twitter:image" content="https://speedelog.net/lovable-uploads/5c1b4538-57b0-4f38-af9e-dda22195de74.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://speedelog.net/contact" />
      
      {/* Script principal HubSpot */}
      <script src="//js-eu1.hs-scripts.com/144571109.js" type="text/javascript" async defer></script>
      
      {/* Script HubSpot Meetings Embed */}
      <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" async defer></script>
      
      <script type="text/javascript">
        {`
          // Configuration HubSpot
          window.hsConversationsSettings = {
            loadImmediately: false
          };
          
          // Charger les CTAs HubSpot quand disponible
          window.addEventListener('load', function() {
            var checkHubSpot = setInterval(function() {
              if (window.hbspt && window.hbspt.cta) {
                clearInterval(checkHubSpot);
                window.hbspt.cta.load();
              }
            }, 500);
          });
          
          // Écouter les événements de soumission de formulaire HubSpot
          window.addEventListener('message', function(event) {
            if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
              console.log('Formulaire HubSpot soumis, ouverture du calendrier...');
              // Attendre un peu puis ouvrir le calendrier
              setTimeout(function() {
                const calendarEvent = new CustomEvent('openCalendarAfterForm');
                window.dispatchEvent(calendarEvent);
              }, 1000);
            }
          });
          
          // Alternative: écouter les événements globaux HubSpot
          window.addEventListener('load', function() {
            // Attendre que HubSpot soit chargé
            var checkHubSpot = setInterval(function() {
              if (window.hbspt) {
                clearInterval(checkHubSpot);
                console.log('HubSpot loaded, setting up form callback listeners');
                
                // Écouter les soumissions de formulaire via l'API HubSpot
                if (window.hbspt.forms) {
                  // Surcharger la méthode create pour ajouter automatiquement le callback
                  var originalCreate = window.hbspt.forms.create;
                  window.hbspt.forms.create = function(config) {
                    var originalCallback = config.onFormSubmitted;
                    config.onFormSubmitted = function(form) {
                      console.log('Form submitted via HubSpot callback');
                      if (originalCallback) {
                        originalCallback(form);
                      }
                      // Ouvrir le calendrier automatiquement
                      setTimeout(function() {
                        const calendarEvent = new CustomEvent('openCalendarAfterForm');
                        window.dispatchEvent(calendarEvent);
                      }, 1000);
                    };
                    return originalCreate.call(this, config);
                  };
                }
              }
            }, 500);
          });
        `}
      </script>
      
      {/* Schema.org JSON-LD avec données enrichies */}
      <script type="application/ld+json">
        {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Speed E-Log",
        "description": "Page de contact pour Speed E-Log, spécialiste en logistique e-commerce",
        "url": "https://speedelog.net/contact",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Speed E-Log",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "37 Rue de Rémaucourt",
            "addressLocality": "Port-sur-Saône",
            "postalCode": "70170",
            "addressRegion": "Bourgogne-Franche-Comté",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 47.690249,
            "longitude": 6.042856
          },
          "telephone": "+33635584004",
          "email": "contact@speedelog.net",
          "url": "https://speedelog.net",
          "openingHours": "Mo-Fr 09:00-18:00",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33635584004",
            "contactType": "customer service",
            "availableLanguage": "French"
          },
          "sameAs": ["https://www.linkedin.com/company/speed-e-log"],
          "areaServed": {
            "@type": "Country",
            "name": "France"
          },
          "serviceType": "Logistique e-commerce"
        }
      })}
      </script>
    </Helmet>
  );
};
