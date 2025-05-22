
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactFAQLink } from "@/components/contact/ContactFAQLink";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Speed E-Log - Logistique E-commerce pour PME</title>
        <meta
          name="description"
          content="Contactez Speed E-Log pour discuter de vos besoins en logistique e-commerce. Demandez un devis personnalisé ou posez vos questions."
        />
      </Helmet>

      <div className="relative min-h-screen pt-24 pb-16">
        {/* Fond avec gradient subtil */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-slate-50 dark:from-slate-900 dark:to-slate-900/90 -z-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {/* En-tête de la page */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                Contactez-nous
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Discutons de vos <span className="text-blue-600 dark:text-blue-500">besoins logistiques</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet.
              </p>
            </div>
            
            {/* Contenu principal avec grille responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Colonne gauche - Formulaire */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-slate-900/80 rounded-xl shadow-md border border-slate-100 dark:border-slate-800/30 p-6"
              >
                <ContactHeader />
                <ContactForm />
                <ContactFAQLink />
              </motion.div>
              
              {/* Colonne droite - Informations de contact */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <ContactInfo />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
