import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FeaturedSnippetAnswer } from "@/components/seo/FeaturedSnippetAnswer";

const logisticsFaq = [
  {
    question: "Quels types de produits pouvez-vous gérer ?",
    answer: "Nous gérons des produits non fragiles, non périssables, sans température dirigée, et dont le poids ne dépasse pas 30 kg.",
    fullAnswer: "Nous sommes particulièrement adaptés aux produits à forte rotation ou exclusifs comme les compléments alimentaires, cosmétiques, accessoires de mode, etc.",
    type: "direct" as const
  },
  {
    question: "Quel est le délai moyen de préparation des commandes ?",
    answer: "Les commandes reçues avant 14h sont préparées le jour même, avec un taux de réussite de 98% sous 24h.",
    fullAnswer: "Notre objectif est de préparer toute commande reçue avant 14h le jour même. Plus de 98% de nos commandes sont expédiées dans les 24 heures suivant leur réception.",
    type: "direct" as const
  },
  {
    question: "Proposez-vous des services d'emballage personnalisé ?",
    answer: "Oui, nous offrons des solutions d'emballage sur-mesure pour valoriser votre marque.",
    fullAnswer: "Nous pouvons inclure vos matériaux promotionnels, cartes de remerciement, packaging spécifique, ou tout autre élément de personnalisation.",
    type: "list" as const,
    items: [
      "Emballages aux couleurs de votre marque",
      "Insertion de cartes de remerciement personnalisées",
      "Matériaux promotionnels (flyers, échantillons)",
      "Packaging premium pour offrir une expérience client unique"
    ]
  }
];

export const ServicesFaq: React.FC = () => {
  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": logisticsFaq.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 md:py-24 bg-blue-50/50 dark:bg-slate-900/50">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Questions fréquentes sur nos services logistiques
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes concernant nos services de logistique e-commerce
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full bg-white dark:bg-slate-900/60 rounded-lg shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden">
            {logisticsFaq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-slate-200 dark:border-slate-700/70 last:border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-medium px-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 px-6">
                    <FeaturedSnippetAnswer
                      question={item.question}
                      answer={item.answer}
                      type={item.type}
                      items={item.items}
                    />
                    {item.fullAnswer && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                        {item.fullAnswer}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
