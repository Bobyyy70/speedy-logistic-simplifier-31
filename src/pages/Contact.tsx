
import React from "react";
import { Helmet } from "react-helmet-async";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import CalendarWidget from "@/components/contact/CalendarWidget";

const Contact = () => {
  // Removed the useEffect with window.scrollTo(0, 0) to prevent scrolling issues

  return (
    <div className="site-background">
      <Helmet>
        <title>Contact & Devis Logistique E-commerce | Speed E-Log</title>
        <meta name="description" content="Contactez Speed E-Log pour un devis personnalisé ou des informations sur nos services logistiques pour e-commerce. Notre équipe vous répond dans les plus brefs délais." />
        <meta property="og:title" content="Contact & Devis Logistique E-commerce | Speed E-Log" />
        <meta property="og:description" content="Contactez Speed E-Log pour un devis personnalisé ou des informations sur nos services logistiques pour e-commerce. Notre équipe vous répond dans les plus brefs délais." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
            Contactez <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">Speed E-Log</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discutons de vos besoins logistiques et trouvons ensemble la meilleure solution pour votre e-commerce.
          </p>
        </div>
        
        {/* Calendar Widget - Full width with expanded view on interaction */}
        <div className="mb-8 overflow-visible relative">
          <CalendarWidget />
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form - Left column */}
          <div>
            <ContactForm />
          </div>
          
          {/* Contact Info & Map - Right column */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
