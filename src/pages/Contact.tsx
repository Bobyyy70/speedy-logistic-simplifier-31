
import React from "react";
import { CalendarSection } from "@/components/contact/CalendarSection";
import { MapSection } from "@/components/contact/MapSection";
import { HubSpotChatConfig } from "@/components/contact/HubSpotChatConfig";
import { ContactPageSEO } from "@/components/contact/ContactPageSEO";
import { ContactPageHeader } from "@/components/contact/ContactPageHeader";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";

const Contact = () => {
  return (
    <>
      {/* HubSpot Chat Configuration */}
      <HubSpotChatConfig 
        welcomeMessage="💬 Bonjour ! Prêt à optimiser votre logistique ? Parlons-en !"
        awayMessage="Nous reviendrons vers vous rapidement ! Décrivez votre projet logistique."
        theme="light"
        position="bottom-right"
      />

      {/* SEO and Scripts */}
      <ContactPageSEO />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <ContactPageHeader />

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section des moyens de contact */}
            <ContactInfoSection />

            {/* Hero Calendar Section avec formulaire de pré-qualification */}
            <CalendarSection />

            {/* Map Section */}
            <MapSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
