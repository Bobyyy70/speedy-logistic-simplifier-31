
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactHeader } from "@/components/contact/ContactHeader";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
      <Helmet>
        <title>Contact & Devis Logistique E-commerce | Speed E-Log</title>
        <meta name="description" content="Contactez Speed E-Log pour un devis personnalisé ou des informations sur nos services logistiques pour e-commerce. Notre équipe vous répond dans les plus brefs délais." />
        <meta property="og:title" content="Contact & Devis Logistique E-commerce | Speed E-Log" />
        <meta property="og:description" content="Contactez Speed E-Log pour un devis personnalisé ou des informations sur nos services logistiques pour e-commerce. Notre équipe vous répond dans les plus brefs délais." />
      </Helmet>
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
            Contactez <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">Speed E-Log</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discutons de vos besoins logistiques et trouvons ensemble la meilleure solution pour votre e-commerce.
          </p>
        </div>
        
        <div className="grid items-start justify-center gap-8 md:gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>;
};

export default Contact;
