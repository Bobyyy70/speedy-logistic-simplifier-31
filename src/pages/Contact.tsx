
import React, { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Contactez-nous</h1>
          <p className="text-lg text-center mb-12">
            Vous avez des questions sur nos services logistiques ? N'hésitez pas à nous contacter pour obtenir un devis personnalisé ou discuter de vos besoins spécifiques.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-xl font-semibold mb-4">Vous avez d'autres questions ?</h2>
            <p className="mb-6">Consultez notre <Link to="/faq" className="text-primary hover:underline">FAQ</Link> ou contactez-nous directement.</p>
            <Button asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
