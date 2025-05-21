
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const logisticsFaq = [
  {
    question: "Quels types de produits pouvez-vous gérer ?",
    answer: "Nous gérons des produits non fragiles, non périssables, sans température dirigée, et dont le poids ne dépasse pas 30 kg. Nous sommes particulièrement adaptés aux produits à forte rotation ou exclusifs."
  },
  {
    question: "Quel est le délai moyen de préparation des commandes ?",
    answer: "Notre objectif est de préparer toute commande reçue avant 14h le jour même. Plus de 98% de nos commandes sont expédiées dans les 24 heures suivant leur réception."
  },
  {
    question: "Proposez-vous des services d'emballage personnalisé ?",
    answer: "Oui, nous offrons des solutions d'emballage personnalisées pour valoriser votre marque. Nous pouvons inclure vos matériaux promotionnels, cartes de remerciement ou packaging spécifique."
  }
];

export const ServicesFaq: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
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
          <Accordion type="single" collapsible className="w-full">
            {logisticsFaq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-slate-200 dark:border-slate-700/50">
                  <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
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
