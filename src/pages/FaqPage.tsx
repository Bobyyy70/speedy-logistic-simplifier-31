
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";
import { motion } from "framer-motion";

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Quels types de produits gérez-vous ?",
      answer: "Nous sommes spécialisés dans les produits non fragiles, non périssables, sans température dirigée et pesant moins de 30kg (poids réel ou volumétrique). Idéal pour les produits à forte rotation comme les compléments alimentaires, cosmétiques, accessoires, etc."
    },
    {
      question: "Comment fonctionne la tarification du transport ?",
      answer: "Les frais de transport dépendent du poids, des dimensions, de la destination et du niveau de service choisi (standard, express, point relais). Nous vous fournissons un devis personnalisé basé sur vos besoins spécifiques, en sélectionnant toujours l'option la plus compétitive parmi nos partenaires."
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
      question: "Quels sont les délais de préparation et d'expédition typiques ?",
      answer: "Nos délais standards sont de 24h pour la préparation des commandes reçues avant 12h. L'expédition dépend ensuite du transporteur choisi (24-48h en France métropolitaine pour les services standards). Des options express sont disponibles pour des livraisons en J+1."
    },
    {
      question: "Quelles zones géographiques couvrez-vous ?",
      answer: "Nous expédions principalement en France métropolitaine et en Europe. Pour les expéditions internationales plus lointaines, nous proposons des solutions au cas par cas avec nos partenaires transporteurs spécialisés."
    },
    {
      question: "Comment se déroule le processus d'intégration ?",
      answer: "Le processus est simple : après validation de votre devis, nous créons votre compte, configurons les intégrations techniques avec votre plateforme, et organisons la réception de vos produits. Un accompagnement personnalisé est prévu à chaque étape pour assurer une transition en douceur."
    },
    {
      question: "Proposez-vous des assurances pour les produits stockés ?",
      answer: "Oui, tous les produits stockés dans notre entrepôt sont couverts par notre assurance professionnelle. Des options d'assurance supplémentaires sont disponibles pour les produits à forte valeur."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-100/40 dark:from-slate-900 dark:via-green-950/20 dark:to-blue-950/30 py-16">
      <Helmet>
        <title>FAQ - Questions Fréquentes Logistique | Speed E-Log</title>
        <meta 
          name="description" 
          content="Trouvez les réponses à vos questions sur nos services logistiques pour e-commerce : types de produits gérés, transport, intégration, suivi et plus encore."
        />
        <meta property="og:title" content="FAQ - Questions Fréquentes Logistique | Speed E-Log" />
        <meta 
          property="og:description" 
          content="Trouvez les réponses à vos questions sur nos services logistiques pour e-commerce : types de produits gérés, transport, intégration, suivi et plus encore."
        />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm dark:bg-slate-800">
            FAQ
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl">
            Questions Fréquentes
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trouvez ici les réponses aux questions les plus couramment posées sur nos services de logistique e-commerce.
          </p>
        </motion.div>
  
        <div className="max-w-3xl mx-auto bg-white/80 dark:bg-slate-800/50 p-6 rounded-lg shadow-sm border border-green-100/70 dark:border-green-900/30">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
  
          <motion.div 
            className="mt-8 md:mt-12 text-center text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p>Vous ne trouvez pas la réponse à votre question ?</p>
            <Link to="/contact" className="text-primary hover:underline font-medium">
              Contactez-nous directement
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
