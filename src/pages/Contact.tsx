import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CalendarSection } from "@/components/contact/CalendarSection";
import { MapSection } from "@/components/contact/MapSection";
import { FloatingChatButton } from "@/components/contact/FloatingChatButton";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
const Contact = () => {
  return <>
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
        
        {/* Scripts pour HubSpot - Chat et Meetings */}
        <script src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" type="text/javascript" async></script>
        
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

        {/* HubSpot Tracking Code et Widget Chat */}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/144571109.js"></script>
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <motion.header className="text-center mb-12 pt-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
              📞 Contactez-nous
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Réservez votre{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                consultation gratuite
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Discutons de vos besoins logistiques et trouvons ensemble la solution adaptée à votre e-commerce.
            </p>
            
            {/* Informations pratiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              
              <div className="flex items-center justify-center gap-2 text-slate-600">
                
                
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-600">
                
                
              </div>
              
            </div>
          </motion.header>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section d'introduction SEO */}
            <motion.section className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">
                  Votre Partenaire Logistique E-commerce en Bourgogne-Franche-Comté
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">🎯 Consultation personnalisée</h3>
                    <p className="text-slate-600 mb-4">
                      Lors de notre entretien de 15 minutes, nous analysons vos volumes, vos contraintes et vos objectifs 
                      pour vous proposer une solution logistique sur-mesure.
                    </p>
                    <h3 className="font-semibold text-slate-900 mb-3">📦 Expertise e-commerce PME</h3>
                    <p className="text-slate-600">
                      Spécialisés dans l'accompagnement des petites et moyennes entreprises, nous comprenons 
                      vos enjeux de croissance et vos contraintes budgétaires.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">🚀 Service client réactif</h3>
                    <p className="text-slate-600 mb-4">
                      Notre équipe est disponible du lundi au vendredi de 9h à 18h. 
                      Utilisez le chat en bas à droite pour une réponse immédiate !
                    </p>
                    <h3 className="font-semibold text-slate-900 mb-3">💡 Des questions ?</h3>
                    <p className="text-slate-600">
                      Consultez notre <a href="/faq" className="text-blue-600 hover:text-blue-800 underline">page FAQ</a> pour 
                      trouver rapidement des réponses aux questions les plus courantes sur nos services.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Hero Calendar Section */}
            <CalendarSection />

            {/* Map Section */}
            <MapSection />
          </div>
        </div>
        
        {/* Chatbot flottant */}
        <FloatingChatButton />
      </div>
    </>;
};
export default Contact;