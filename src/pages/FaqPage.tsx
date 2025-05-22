
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// FAQ data array
const faqs = [
  {
    question: "Quels types de produits gérez-vous ?",
    answer: "Nous sommes spécialisés dans les produits non fragiles, non périssables, sans température dirigée, et dont le poids ne dépasse pas 30 kg. Nous sommes particulièrement adaptés aux produits à forte rotation ou exclusifs comme les compléments alimentaires, cosmétiques, accessoires, textile, etc."
  },
  {
    question: "Comment sont calculés les frais de transport ?",
    answer: "Les frais de transport sont variables en fonction des transporteurs, des destinations, du poids et du volume des colis. Nous avons négocié des tarifs avantageux avec nos partenaires transporteurs que nous répercutons à nos clients. Un devis détaillé vous sera fourni en fonction de votre activité."
  },
  {
    question: "Quel est l'engagement contractuel minimum ?",
    answer: "Nous privilégions la flexibilité avec des engagements adaptés à vos besoins, généralement de 3 à 12 mois. Notre objectif est d'établir un partenariat durable plutôt que de vous lier par des contrats contraignants."
  },
  {
    question: "Quelles plateformes e-commerce sont compatibles avec votre système ?",
    answer: "Nous nous intégrons avec la plupart des principales plateformes e-commerce : Shopify, WooCommerce, Prestashop, Magento, ainsi que les marketplaces comme Amazon ou Cdiscount. Si vous utilisez une solution spécifique, nous pouvons généralement nous y adapter via notre API."
  },
  {
    question: "Comment s'effectue le suivi des stocks et des commandes ?",
    answer: "Vous bénéficiez d'un accès à notre portail client où vous pouvez suivre en temps réel vos niveaux de stock, l'état de vos commandes et générer des rapports. Notre système met automatiquement à jour votre plateforme e-commerce pour refléter les niveaux de stock actuels."
  },
  {
    question: "Comment gérez-vous les retours clients ?",
    answer: "Nous traitons les retours avec le même soin que les expéditions. Chaque retour est réceptionné, contrôlé et, selon vos instructions, remis en stock, mis de côté ou recyclé. Vous êtes notifié à chaque étape du processus via notre plateforme."
  },
  {
    question: "Quelles sont vos zones de livraison ?",
    answer: "Nous assurons la livraison en France métropolitaine, dans les DOM-TOM, en Europe et à l'international. Nous adaptons les solutions de transport en fonction de votre destination pour optimiser les coûts et délais."
  },
  {
    question: "Comment se déroule l'intégration initiale avec Speed E-Log ?",
    answer: "L'intégration se fait en plusieurs étapes : analyse de vos besoins, configuration de notre système pour votre catalogue, mise en place des intégrations techniques, réception de vos stocks, et formation à notre plateforme. Un chef de projet dédié vous accompagne tout au long du processus."
  },
  {
    question: "Proposez-vous des solutions d'assurance pour mes produits ?",
    answer: "Oui, nous disposons d'une assurance professionnelle couvrant les produits stockés dans notre entrepôt. Des options d'assurance complémentaires peuvent être proposées selon la valeur de vos produits."
  }
];

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative py-12 min-h-screen">
      {/* Fond plus subtil avec un dégradé léger au lieu des animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-blue-50/30 dark:from-slate-900/80 dark:via-slate-900 dark:to-blue-900/10 -z-10" />
      
      <Helmet>
        <title>FAQ - Questions Fréquentes Logistique | Speed E-Log</title>
        <meta name="description" content="Trouvez les réponses à vos questions sur nos services logistiques pour e-commerce : types de produits gérés, transport, intégration, suivi et plus encore." />
        <meta property="og:title" content="FAQ - Questions Fréquentes Logistique | Speed E-Log" />
        <meta property="og:description" content="Trouvez les réponses à vos questions sur nos services logistiques pour e-commerce : types de produits gérés, transport, intégration, suivi et plus encore." />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <motion.div className="flex flex-col items-center justify-center text-center mb-12" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">FAQ</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Questions <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">Fréquentes</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trouvez ici les réponses aux questions les plus couramment posées sur nos services de logistique e-commerce.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full bg-white dark:bg-slate-900/60 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-slate-200 dark:border-slate-700/70 last:border-0">
                  <AccordionTrigger className="text-left font-semibold px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center p-6 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900/40 rounded-xl border border-blue-100 dark:border-blue-900/30 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-3">Vous ne trouvez pas la réponse à votre question ?</h3>
            <p className="mb-5 text-slate-600 dark:text-slate-300">Notre équipe est à votre disposition pour répondre à toutes vos interrogations.</p>
            
            <Button 
              variant="blue" 
              size="lg" 
              className="rounded-full px-8 transition-all"
              asChild
            >
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
