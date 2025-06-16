
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ContactFaqSection = () => {
  const faqs = [
    {
      question: "Quels sont vos délais de réponse ?",
      answer: "Nous nous engageons à répondre à toute demande sous 24h en jours ouvrés. Pour les urgences, notre équipe SAV est disponible via le chat en direct."
    },
    {
      question: "Dans quelles zones géographiques intervenez-vous ?",
      answer: "Speed E-Log couvre l'ensemble du territoire français et peut s'adapter à vos besoins européens. Basés en Bourgogne-Franche-Comté, nous optimisons la logistique pour toute la France."
    },
    {
      question: "Comment se déroule le processus d'onboarding ?",
      answer: "Après notre première consultation, nous évaluons vos besoins, proposons une solution sur-mesure, puis mettons en place votre infrastructure logistique en 2-3 semaines."
    },
    {
      question: "Quels types de produits gérez-vous ?",
      answer: "Nous gérons tous types de produits e-commerce : textile, électronique, cosmétiques, alimentaire non-périssable, objets déco, etc. Chaque solution est adaptée à vos spécificités."
    },
    {
      question: "Vos tarifs sont-ils transparents ?",
      answer: "Absolument ! Nos devis sont standardisés sans frais cachés. Vous connaissez le coût exact de chaque service avant de vous engager."
    },
    {
      question: "Proposez-vous un suivi en temps réel ?",
      answer: "Oui, notre plateforme vous permet de suivre vos stocks, commandes et expéditions en temps réel avec des rapports détaillés."
    }
  ];

  return (
    <motion.section 
      className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">
          Questions Fréquentes
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Retrouvez les réponses aux questions les plus courantes sur nos services de logistique e-commerce
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium text-slate-900">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
};
