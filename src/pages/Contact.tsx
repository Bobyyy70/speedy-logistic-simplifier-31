
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, Mail, MapPin, MessageSquare, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Contact = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [savModalOpen, setSavModalOpen] = useState(false);

  // Charger les scripts HubSpot
  useEffect(() => {
    // Script pour le calendrier HubSpot
    const calendarScript = document.createElement('script');
    calendarScript.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    calendarScript.async = true;
    document.head.appendChild(calendarScript);

    // Script pour les formulaires HubSpot
    const formsScript = document.createElement('script');
    formsScript.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    formsScript.async = true;
    document.head.appendChild(formsScript);

    // Script pour le chat HubSpot
    const chatScript = document.createElement('script');
    chatScript.src = '//js-eu1.hs-scripts.com/144571109.js';
    chatScript.async = true;
    chatScript.id = 'hs-script-loader';
    document.head.appendChild(chatScript);

    // Configuration du chat HubSpot
    (window as any).hsConversationsSettings = {
      loadImmediately: true,
      enableWidgetCookieBanner: true,
      disableAttachment: false,
      widget: {
        position: {
          side: 'right',
          offset: {
            bottom: '20px',
            right: '20px'
          }
        }
      }
    };

    return () => {
      // Nettoyage des scripts
      const existingCalendarScript = document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]');
      const existingFormsScript = document.querySelector('script[src="//js-eu1.hsforms.net/forms/embed/v2.js"]');
      const existingChatScript = document.querySelector('#hs-script-loader');
      
      if (existingCalendarScript) document.head.removeChild(existingCalendarScript);
      if (existingFormsScript) document.head.removeChild(existingFormsScript);
      if (existingChatScript) document.head.removeChild(existingChatScript);
    };
  }, []);

  // Initialiser les formulaires HubSpot dans les modales
  useEffect(() => {
    if (contactModalOpen && (window as any).hbspt) {
      setTimeout(() => {
        (window as any).hbspt.forms.create({
          region: "eu1",
          portalId: "144571109",
          formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
          target: "#contact-form-container"
        });
      }, 100);
    }
  }, [contactModalOpen]);

  useEffect(() => {
    if (savModalOpen && (window as any).hbspt) {
      setTimeout(() => {
        (window as any).hbspt.forms.create({
          region: "eu1",
          portalId: "144571109",
          formId: "434e2703-cd85-4a7d-a84b-69d4b12f04d6",
          target: "#sav-form-container"
        });
      }, 100);
    }
  }, [savModalOpen]);

  return (
    <>
      <Helmet>
        <title>Contact Speed E-Log - Réservez votre consultation logistique gratuite</title>
        <meta
          name="description"
          content="Contactez Speed E-Log pour optimiser votre logistique e-commerce. Réservez une consultation gratuite ou utilisez nos formulaires de contact et SAV. Réponse sous 24h garantie."
        />
        <meta name="keywords" content="contact speed e-log, consultation logistique, service client, SAV, rendez-vous, Port-sur-Saône" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speedelog.net/contact" />
        <meta property="og:title" content="Contact Speed E-Log - Consultation logistique gratuite" />
        <meta property="og:description" content="Réservez votre consultation logistique gratuite avec Speed E-Log. Experts en solutions e-commerce pour PME." />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://speedelog.net/contact" />
        <meta property="twitter:title" content="Contact Speed E-Log - Consultation gratuite" />
        <meta property="twitter:description" content="Réservez votre consultation logistique gratuite avec Speed E-Log." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://speedelog.net/contact" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Speed E-Log",
            "description": "Page de contact pour Speed E-Log, spécialiste en logistique e-commerce",
            "url": "https://speedelog.net/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Speed E-Log",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "37 Rue de Rémaucourt",
                "addressLocality": "Port-sur-Saône",
                "postalCode": "70170",
                "addressCountry": "FR"
              },
              "telephone": "+33635584004",
              "email": "contact@speedelog.fr",
              "url": "https://speedelog.net",
              "sameAs": [
                "https://www.linkedin.com/company/speed-e-log"
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <motion.header 
            className="text-center mb-12 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
              📞 Contactez-nous
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Réservez votre{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                consultation gratuite
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discutons de vos besoins logistiques et trouvons ensemble la solution adaptée à votre e-commerce.
            </p>
          </motion.header>

          <div className="space-y-8">
            {/* Hero Calendar Section */}
            <motion.section 
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
              
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 flex items-center justify-center gap-3">
                  <Calendar className="h-8 w-8 text-blue-600" />
                  Planifiez votre rendez-vous
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Réservez un créneau de 15 minutes pour discuter de votre projet logistique avec notre équipe d'experts.
                </p>
              </div>
              
              <div className="min-h-[600px] border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <div 
                  className="meetings-iframe-container w-full h-full" 
                  data-src="https://meetings-eu1.hubspot.com/falmanzo?embed=true"
                ></div>
              </div>
            </motion.section>

            {/* CTA Buttons Section */}
            <motion.section 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div 
                className="bg-white border-2 border-slate-200 rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
                onClick={() => setContactModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-4xl mb-4 block">💬</span>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Formulaire de Contact</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  Décrivez votre projet et recevez une réponse personnalisée sous 24h
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  Nous contacter
                </Button>
              </div>

              <div 
                className="bg-white border-2 border-slate-200 rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
                onClick={() => setSavModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-4xl mb-4 block">🛠️</span>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Service Après-Vente</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  Un problème avec votre commande ? Notre équipe SAV est là pour vous aider
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  Contacter le SAV
                </Button>
              </div>
            </motion.section>

            {/* Map Section */}
            <motion.section 
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-slate-900 flex items-center justify-center gap-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  Notre Localisation
                </h2>
                <p className="text-slate-600">
                  Speed E-Log - 37 Rue de Rémaucourt, 70170 Port-sur-Saône
                </p>
              </div>
              
              <div className="h-96 border border-slate-200 rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10805.55665035175!2d6.036526308525196!3d47.69024919081746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47920f4259cab0c7%3A0x409ce34b30d1220!2s70170%20Port-sur-Sa%C3%B4ne!5e0!3m2!1sfr!2sfr!4v1681578343811!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation de Speed E-Log à Port-sur-Saône"
                  className="w-full h-full"
                />
              </div>
            </motion.section>
          </div>
        </div>

        {/* Contact Modal */}
        <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Formulaire de Contact</DialogTitle>
              <DialogDescription>
                Parlez-nous de votre projet et obtenez une réponse personnalisée sous 24h.
              </DialogDescription>
            </DialogHeader>
            <div id="contact-form-container" className="min-h-[400px]"></div>
          </DialogContent>
        </Dialog>

        {/* SAV Modal */}
        <Dialog open={savModalOpen} onOpenChange={setSavModalOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Service Après-Vente</DialogTitle>
              <DialogDescription>
                Un problème avec votre commande ? Contactez notre équipe SAV.
              </DialogDescription>
            </DialogHeader>
            <div id="sav-form-container" className="min-h-[400px]"></div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Contact;
