
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CalendarSection } from "@/components/contact/CalendarSection";
import { MapSection } from "@/components/contact/MapSection";
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
        
        {/* Scripts pour HubSpot Meetings uniquement */}
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
              Comment pouvons-nous{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                vous aider ?
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Choisissez le moyen de contact qui vous convient le mieux. Notre équipe est là pour vous accompagner.
            </p>
          </motion.header>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section des moyens de contact */}
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
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Colonne gauche - Actions principales */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                        📞 <span className="ml-2">Prise de rendez-vous</span>
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Planifiez votre consultation gratuite de 15 minutes pour analyser vos besoins logistiques. 
                        Nos experts vous accompagnent dans votre projet e-commerce.
                      </p>
                      <div className="text-sm text-blue-700 font-medium">
                        → Consultation personnalisée et sans engagement
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                        💬 <span className="ml-2">Support client via chat</span>
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Notre équipe SAV est disponible via le chat en bas à droite de votre écran. 
                        Réponse sous 2 heures pendant les heures d'ouverture.
                      </p>
                      <div className="text-sm text-green-700 font-medium">
                        → Idéal pour le SAV et les questions techniques
                      </div>
                    </div>
                  </div>

                  {/* Colonne droite - Informations pratiques */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                        🕒 <span className="ml-2">Horaires de disponibilité</span>
                      </h3>
                      <p className="text-slate-600 mb-3">
                        <strong>Lundi au vendredi : 9h - 18h</strong>
                      </p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Chat en direct disponible</li>
                        <li>• Consultations téléphoniques</li>
                        <li>• Réponse emails sous 24h</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                        ❓ <span className="ml-2">Questions fréquentes</span>
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Consultez notre <a href="/faq" className="text-purple-600 hover:text-purple-800 underline font-medium">page FAQ</a> pour 
                        les réponses aux questions courantes, ou contactez-nous directement via le chat 
                        pour des questions spécifiques à votre situation.
                      </p>
                      <div className="text-sm text-purple-700 font-medium">
                        → Gain de temps assuré
                      </div>
                    </div>
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
      </div>
    </>;
};

export default Contact;
