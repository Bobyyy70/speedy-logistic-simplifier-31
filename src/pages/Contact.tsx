
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ContactModal } from "@/components/contact/ContactModal";
import { SavModal } from "@/components/contact/SavModal";
import { CalendarSection } from "@/components/contact/CalendarSection";
import { CtaButtonsSection } from "@/components/contact/CtaButtonsSection";
import { MapSection } from "@/components/contact/MapSection";

const Contact = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [savModalOpen, setSavModalOpen] = useState(false);

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
            <CalendarSection />

            {/* CTA Buttons Section */}
            <CtaButtonsSection 
              onContactClick={() => setContactModalOpen(true)}
              onSavClick={() => setSavModalOpen(true)}
            />

            {/* Map Section */}
            <MapSection />
          </div>
        </div>

        {/* Contact Modal */}
        <ContactModal 
          open={contactModalOpen} 
          onOpenChange={setContactModalOpen} 
        />

        {/* SAV Modal */}
        <SavModal 
          open={savModalOpen} 
          onOpenChange={setSavModalOpen} 
        />
      </div>
    </>
  );
};

export default Contact;
