import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FeaturedSnippetAnswer } from "@/components/seo/FeaturedSnippetAnswer";
import { DefinitionBlock } from "@/components/seo/DefinitionBlock";
import { BreadcrumbSEO } from "@/components/seo/BreadcrumbSEO";
import { QualityBadge } from "@/components/seo/QualityBadge";

// Enhanced FAQ data with direct answers and structured formats
const faqs = [
  {
    question: "Quels types de produits gérez-vous ?",
    answer: "Nous gérons des produits non fragiles, non périssables, sans température dirigée, et dont le poids ne dépasse pas 30 kg.",
    fullAnswer: "Nous sommes spécialisés dans les produits non fragiles, non périssables, sans température dirigée, et dont le poids ne dépasse pas 30 kg. Nous sommes particulièrement adaptés aux produits à forte rotation comme les compléments alimentaires, cosmétiques, accessoires, vêtements, articles de sport, produits high-tech légers, etc.",
    type: "list" as const,
    items: [
      "Compléments alimentaires et produits de bien-être",
      "Cosmétiques et produits de beauté",
      "Accessoires et bijoux",
      "Vêtements et textiles",
      "Articles de sport et fitness",
      "Produits high-tech légers (moins de 30 kg)"
    ]
  },
  {
    question: "Comment sont calculés les frais de transport ?",
    answer: "Les frais de transport dépendent de 4 facteurs principaux : le transporteur choisi, la destination, le poids et le volume des colis.",
    fullAnswer: "Les frais de transport sont variables en fonction des transporteurs, des destinations, du poids et du volume des colis. Nous avons négocié des tarifs avantageux avec nos partenaires transporteurs que nous répercutons à nos clients. Un devis détaillé vous sera fourni en fonction de votre activité.",
    type: "list" as const,
    items: [
      "Choix du transporteur (Colissimo, Chronopost, DPD, etc.)",
      "Zone de destination (France, Europe, International)",
      "Poids du colis (tarification par tranche)",
      "Volume et dimensions du colis"
    ]
  },
  {
    question: "Quel est l'engagement contractuel minimum ?",
    answer: "Nous proposons des engagements flexibles de 3 à 12 mois adaptés à vos besoins.",
    fullAnswer: "Nous privilégions la flexibilité avec des engagements adaptés à vos besoins, généralement de 3 à 12 mois. Notre objectif est d'établir un partenariat durable plutôt que de vous lier par des contrats contraignants. Nous comprenons que les besoins logistiques évoluent avec votre croissance.",
    type: "direct" as const
  },
  {
    question: "Quelles plateformes e-commerce sont compatibles avec votre système ?",
    answer: "Nous sommes compatibles avec toutes les principales plateformes : Shopify, WooCommerce, PrestaShop, Magento, et les marketplaces comme Amazon et Cdiscount.",
    fullAnswer: "Nous nous intégrons avec la plupart des principales plateformes e-commerce : Shopify, WooCommerce, Prestashop, Magento, ainsi que les marketplaces comme Amazon ou Cdiscount. Si vous utilisez une solution spécifique, nous pouvons généralement nous y adapter via notre API.",
    type: "list" as const,
    items: [
      "Shopify et Shopify Plus",
      "WooCommerce (WordPress)",
      "PrestaShop",
      "Magento / Adobe Commerce",
      "Marketplaces : Amazon, Cdiscount, Fnac",
      "Intégration API personnalisée disponible"
    ]
  },
  {
    question: "Comment s'effectue le suivi des stocks et des commandes ?",
    answer: "Vous disposez d'un tableau de bord en temps réel pour suivre vos stocks, commandes et générer des rapports.",
    fullAnswer: "Vous bénéficiez d'un accès à notre outil avec lequel vous pouvez suivre en temps réel vos niveaux de stock, l'état de vos commandes et générer des rapports. Notre système met automatiquement à jour votre plateforme e-commerce pour refléter les niveaux de stock actuels.",
    type: "list" as const,
    items: [
      "Suivi en temps réel des niveaux de stock",
      "Traçabilité complète de chaque commande",
      "Synchronisation automatique avec votre e-commerce",
      "Rapports et analytics détaillés",
      "Alertes pour les stocks faibles"
    ]
  },
  {
    question: "Comment gérez-vous les retours clients ?",
    answer: "Chaque retour est réceptionné, contrôlé et traité selon vos instructions (remise en stock, mise de côté ou recyclage).",
    fullAnswer: "Nous traitons les retours avec le même soin que les expéditions. Chaque retour est réceptionné, contrôlé et, selon vos instructions, remis en stock, mis de côté ou recyclé. Vous êtes notifié à chaque étape du processus via notre plateforme.",
    type: "steps" as const,
    items: [
      "Réception du colis retourné dans notre entrepôt",
      "Contrôle qualité et vérification de l'état du produit",
      "Notification client avec photo et rapport",
      "Traitement selon vos instructions (remise en stock, SAV, recyclage)"
    ]
  },
  {
    question: "Quelles sont vos zones de livraison ?",
    answer: "Nous livrons en France métropolitaine, DOM-TOM, Europe et à l'international.",
    fullAnswer: "Nous assurons la livraison en France métropolitaine, dans les DOM-TOM, en Europe et à l'international. Nous adaptons les solutions de transport en fonction de votre destination pour optimiser les coûts et délais.",
    type: "list" as const,
    items: [
      "France métropolitaine (24-48h)",
      "DOM-TOM (3-7 jours)",
      "Europe (2-5 jours)",
      "International (selon destination)"
    ]
  },
  {
    question: "Comment se déroule l'intégration initiale avec Speed E-Log ?",
    answer: "L'intégration suit un processus en 5 étapes guidées par notre équipe.",
    fullAnswer: "L'intégration se fait en plusieurs étapes : analyse de vos besoins, configuration de notre système pour votre catalogue, mise en place des intégrations techniques, réception de vos stocks. Notre équipe vous accompagne tout au long du processus.",
    type: "steps" as const,
    items: [
      "Analyse de vos besoins logistiques et de votre catalogue produits",
      "Configuration de notre système et création de vos fiches produits",
      "Mise en place des intégrations techniques avec votre plateforme e-commerce",
      "Réception et mise en stock de vos produits dans notre entrepôt",
      "Formation à l'outil et lancement de votre première commande"
    ]
  },
];

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Enhanced FAQ Schema with direct answers
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="relative py-12 pt-24 md:pt-28 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-900/90 -z-10" />
      
      <Helmet>
        <title>FAQ - Questions Fréquentes Logistique | Speed E-Log</title>
        <meta name="description" content="La réponse est : Trouvez toutes les réponses à vos questions sur nos services logistiques e-commerce : types de produits, transport, intégration, suivi en temps réel et zones de livraison." />
        <meta property="og:title" content="FAQ - Questions Fréquentes Logistique | Speed E-Log" />
        <meta property="og:description" content="Trouvez les réponses à vos questions sur nos services logistiques pour e-commerce : types de produits gérés, transport, intégration, suivi et plus encore." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4">
        <BreadcrumbSEO 
          items={[
            { label: "Accueil", href: "/" },
            { label: "FAQ" }
          ]}
        />

        <motion.div className="flex flex-col items-center justify-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">FAQ</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Questions <span className="text-blue-600 dark:text-blue-500">Fréquentes</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <strong className="text-blue-600 dark:text-blue-400">La réponse est :</strong> Trouvez ici les réponses aux questions les plus couramment posées sur nos services de logistique e-commerce.
          </p>
        </motion.div>

        {/* Quality Badges Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <QualityBadge type="precision" value="99,98%" label="Taux de précision" />
          <QualityBadge type="clients" value="500+" label="E-commerçants accompagnés" />
          <QualityBadge type="experience" value="10+ ans" label="D'expertise logistique" />
        </motion.div>

        {/* Definitions Section */}
        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <DefinitionBlock
            term="le fulfillment"
            definition="le processus complet de gestion des commandes e-commerce, de la réception des produits en entrepôt jusqu'à leur livraison au client final"
            additionalInfo="Le fulfillment inclut le stockage, la préparation des commandes (picking), l'emballage, l'expédition et la gestion des retours."
          />
          
          <DefinitionBlock
            term="un 3PL (Third-Party Logistics)"
            definition="un prestataire logistique externe qui gère tout ou partie de la chaîne d'approvisionnement pour le compte d'une entreprise e-commerce"
            additionalInfo="Externaliser vers un 3PL permet aux e-commerçants de se concentrer sur leur cœur de métier (marketing, produits, service client) tout en bénéficiant d'une expertise logistique professionnelle."
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full bg-white dark:bg-slate-900/60 rounded-lg shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden">
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
                  <AccordionContent className="px-6 py-4">
                    <FeaturedSnippetAnswer
                      question={faq.question}
                      answer={faq.answer}
                      type={faq.type}
                      items={faq.items}
                    />
                    {faq.fullAnswer && faq.fullAnswer !== faq.answer && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                        {faq.fullAnswer}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3">Vous ne trouvez pas la réponse à votre question ?</h3>
            <p className="mb-5 text-slate-600 dark:text-slate-300">Notre équipe est à votre disposition pour répondre à toutes vos interrogations.</p>
            
            <Button 
              variant="blue" 
              size="lg" 
              className="rounded-md px-8 transition-all hover:shadow-lg"
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
