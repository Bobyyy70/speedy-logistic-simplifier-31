import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "Quels types de produits pouvez-vous stocker ?",
      answer:
        "Nous pouvons stocker une large gamme de produits, des vêtements aux produits électroniques, en passant par les cosmétiques et les accessoires. Nous ne prenons pas en charge les produits dangereux, périssables ou nécessitant des conditions de stockage très spécifiques. Contactez-nous pour discuter de vos besoins particuliers.",
    },
    {
      question: "Comment s'intègre votre service avec ma boutique en ligne ?",
      answer:
        "Nous proposons des intégrations transparentes avec les principales plateformes e-commerce comme Shopify, WooCommerce, Magento et PrestaShop. Notre API permet également des intégrations personnalisées avec d'autres systèmes. Une fois connecté, les commandes sont automatiquement transmises à notre système pour traitement.",
    },
    {
      question: "Quels sont vos délais de traitement des commandes ?",
      answer:
        "Nous traitons généralement les commandes le jour même lorsqu'elles sont reçues avant 14h les jours ouvrables. Pour les commandes à volume élevé ou pendant les périodes de pointe, nous garantissons un traitement sous 24-48h. Des options de traitement prioritaire sont disponibles sur demande.",
    },
    {
      question: "Comment sont calculés vos tarifs ?",
      answer:
        "Nos tarifs sont basés sur plusieurs facteurs : l'espace de stockage utilisé, le nombre de commandes traitées, les services à valeur ajoutée demandés et le volume d'expédition. Nous proposons des forfaits adaptés aux différentes tailles d'entreprises, avec une tarification transparente sans frais cachés.",
    },
    {
      question: "Proposez-vous des services d'emballage personnalisé ?",
      answer:
        "Oui, nous offrons plusieurs options d'emballage personnalisé, incluant l'utilisation de vos propres boîtes, l'ajout de matériel promotionnel, de notes personnalisées ou d'emballages cadeaux. Ces services peuvent être configurés par défaut ou spécifiés commande par commande.",
    },
    {
      question: "Comment gérez-vous les retours ?",
      answer:
        "Notre processus de gestion des retours comprend la réception, l'inspection, et le reconditionnement des articles retournés. Nous pouvons remettre les produits en stock, les mettre de côté pour inspection ou les traiter selon vos instructions spécifiques. Un rapport détaillé vous est fourni pour chaque retour traité.",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed max-w-[700px] mx-auto">
            Tout ce que vous devez savoir sur notre service de logistique e-commerce
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
