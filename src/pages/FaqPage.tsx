import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BeamsBackgroundDemo } from "@/components/ui/beams-background-demo";
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
      {/* Fond de rayons animés appliqué à toute la page */}
      <BeamsBackgroundDemo />
      
      <Helmet>
        <title>FAQ - Questions Fréquentes Logistique | Speed E-Log</title>
        <meta name="description" content="Trouvez les réponses à vos questions sur nos services logistiques pour e-commerce : types de produits gérés, transport, intégration, suivi et plus encore." />
        <meta property="og:title" content="FAQ - Questions Fréquentes Logistique | Speed E-Log" />
        <meta property="og:description" content="Trouvez les réponses à vos questions sur nos services logistiques pour e-commerce : types de produits gérés, transport, intégration, suivi et plus encore." />
      </Helmet>
      
      <motion.div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 relative overflow-hidden min-h-[300px] py-12" 
        initial={{
          opacity: 0,
          y: 20
        }} 
        animate={{
          opacity: 1,
          y: 0
        }} 
        transition={{
          duration: 0.5
        }}
      >
        {/* Fond de rayons animés avec intensité augmentée */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <BeamsBackgroundDemo />
        </div>
        <div className="inline-block px-3 py-1 text-sm rounded-3xl bg-orange-100 relative z-10">FAQ</div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl relative z-10">
          Questions <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">Fréquentes</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto relative z-10">
          Trouvez ici les réponses aux questions les plus couramment posées sur nos services de logistique e-commerce.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative z-10">
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
        
        <div className="text-center mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
