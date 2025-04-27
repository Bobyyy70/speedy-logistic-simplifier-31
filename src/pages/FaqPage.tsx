import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";
import { motion } from "framer-motion";

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="bg-gradient-to-br from-blue-100/90 via-white to-green-200/90 dark:from-slate-900 dark:via-slate-950 dark:to-green-800/90 py-12">
      <Helmet>
        <title>FAQ - Questions Fréquentes Logistique | Speed E-Log</title>
        <meta name="description" content="Trouvez les réponses à vos questions sur nos services logistiques pour e-commerce : types de produits gérés, transport, intégration, suivi et plus encore." />
        <meta property="og:title" content="FAQ - Questions Fréquentes Logistique | Speed E-Log" />
        <meta property="og:description" content="Trouvez les réponses à vos questions sur nos services logistiques pour e-commerce : types de produits gérés, transport, intégration, suivi et plus encore." />
      </Helmet>
      
      <motion.div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <div className="inline-block px-3 py-1 text-sm rounded-3xl bg-orange-100">FAQ</div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl">
          Questions Fréquentes
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trouvez ici les réponses aux questions les plus couramment posées sur nos services de logistique e-commerce.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: index * 0.05
        }}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>)}
        </Accordion>

        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} className="mt-8 md:mt-12 text-center p-6 bg-gradient-to-r from-blue-100/90 via-white to-green-200/90 dark:from-slate-900 dark:via-slate-950 dark:to-green-800/90 rounded-3xl">
          <p>Vous ne trouvez pas la réponse à votre question ?</p>
          <Link to="/contact" className="text-primary hover:underline font-medium">
            Contactez-nous directement
          </Link>
        </motion.div>
      </div>
    </div>;
};

export default FaqPage;
