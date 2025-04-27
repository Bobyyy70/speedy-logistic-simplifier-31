
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

  return (
    <div className="bg-gradient-to-br from-blue-100/90 via-white to-green-200/90 dark:from-slate-900 dark:via-slate-950 dark:to-green-800/90">
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
      
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nous <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">Contacter</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet logistique.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
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
