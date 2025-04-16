
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactHeader } from "@/components/contact/ContactHeader";

const Contact = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12 md:py-16 lg:py-20 px-4">
      <Helmet>
        <title>Contact & Devis Logistique E-commerce | Speed E-Log</title>
        <meta 
          name="description" 
          content="Contactez Speed E-Log pour un devis personnalisé ou des informations sur nos services logistiques pour e-commerce. Notre équipe vous répond dans les plus brefs délais."
        />
        <meta property="og:title" content="Contact & Devis Logistique E-commerce | Speed E-Log" />
        <meta 
          property="og:description" 
          content="Contactez Speed E-Log pour un devis personnalisé ou des informations sur nos services logistiques pour e-commerce. Notre équipe vous répond dans les plus brefs délais."
        />
      </Helmet>
      
      <div className="max-w-5xl mx-auto">
        <ContactHeader />
        
        <div className="grid items-start justify-center gap-8 md:gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
