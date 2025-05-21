
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Services as ServicesSection } from "@/components/home/Services";
import { LogisticsPerformanceSection } from "@/components/sections/LogisticsPerformanceSection";
import { Helmet } from "react-helmet-async";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MapFeature } from "@/components/ui/MapFeature";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; 
import { Package, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Nouveau composant pour les boutons stylisés
const PrimaryActionButton = ({ to, children, className = "", secondary = false }: { 
  to: string; 
  children: React.ReactNode; 
  className?: string;
  secondary?: boolean;
}) => {
  if (secondary) {
    return (
      <Link to={to} className={className}>
        <Button 
          variant="outline" 
          size="lg" 
          className="flex items-center gap-2 group"
        >
          {children}
        </Button>
      </Link>
    );
  }
  
  return (
    <Link to={to} className={className}>
      <Button 
        variant="blue" 
        size="lg" 
        className="flex items-center gap-2"
      >
        {children}
      </Button>
    </Link>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="w-full">
      <Helmet>
        <title>Services Logistiques E-commerce | Speed E-Log</title>
        <meta name="description" content="Découvrez nos services logistiques e-commerce: réception, stockage, préparation de commandes, expédition et gestion des retours. Solutions pour PME." />
        <meta property="og:title" content="Services Logistiques E-commerce | Speed E-Log" />
        <meta property="og:description" content="Découvrez nos services logistiques e-commerce: réception, stockage, préparation de commandes, expédition et gestion des retours. Solutions pour PME." />
      </Helmet>
      
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="min-h-[65vh] h-auto py-16 md:py-24" keepExistingBackground={true}>
        <div className="container mx-auto relative px-4 flex flex-col items-center justify-center h-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6">
              Fulfilment e-commerce : <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">la solution logistique</span> complète pour votre boutique en ligne
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto">
              Des solutions sur mesure pour gérer efficacement votre chaîne logistique.
              <span className="block mt-2">Concentrez-vous sur votre cœur de métier, nous nous occupons du reste.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryActionButton to="/contact">
                Demander un devis
              </PrimaryActionButton>
              
              <PrimaryActionButton to="#services" secondary>
                En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </PrimaryActionButton>
            </div>
          </motion.div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]"></div>
            <div className="w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-[80px] absolute -top-20 right-[20%]"></div>
          </div>
        </div>
      </AuroraBackground>
      
      {/* Key Benefits Section */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-slate-50/30 dark:to-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Gagnez en efficacité", 
                description: "Optimisez votre chaîne logistique et réduisez vos coûts opérationnels avec nos solutions d'automatisation.",
                icon: <Package className="w-10 h-10 text-blue-600" />
              },
              { 
                title: "Scaling flexible", 
                description: "Notre infrastructure s'adapte à votre croissance, que ce soit pour gérer des pics saisonniers ou une expansion continue.",
                icon: <Truck className="w-10 h-10 text-blue-600" />
              },
              { 
                title: "Transparence totale", 
                description: "Suivez vos stocks et commandes en temps réel avec nos outils de reporting avancés et notre grille tarifaire sans surprise.",
                icon: <CheckCircle2 className="w-10 h-10 text-blue-600" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl inline-block mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Services Section */}
      <div className="relative">
        <ServicesSection />
      </div>

      {/* Logistics Performance */}
      <div className="relative bg-gradient-to-b from-transparent to-slate-50/30 dark:to-slate-900/30 py-10">
        <LogisticsPerformanceSection />
      </div>
      
      {/* Map Feature Section */}
      <MapFeature 
        title="Une logistique adaptée à votre marché"
        description="Notre réseau logistique s'adapte à votre stratégie commerciale. Que vous cibliez le marché français ou international, nous disposons des solutions et partenaires pour vous accompagner efficacement dans votre déploiement."
        mapDots={[
          {
            start: { lat: 47.6, lng: 6.18, label: "Port-sur-Saône" },
            end: { lat: 48.8566, lng: 2.3522, label: "Paris" }
          },
          {
            start: { lat: 47.6, lng: 6.18 },
            end: { lat: 43.2965, lng: 5.3698, label: "Marseille" }
          },
          {
            start: { lat: 47.6, lng: 6.18 },
            end: { lat: 52.5200, lng: 13.4050, label: "Berlin" }
          }
        ]}
      />
      
      {/* FAQ Section */}
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
      
      {/* CTA Section */}
      <section className="container mx-auto mt-8 md:mt-16 lg:mt-20 text-center px-4 py-16 md:py-24 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Prêt à transformer votre logistique e-commerce ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Discutons de vos besoins spécifiques et voyons comment Speed E-Log peut vous aider à simplifier vos opérations et à vous concentrer sur votre croissance.
          </p>
          <Button 
            variant="blue" 
            size="2xl" 
            className="mx-auto shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 px-8 py-3 rounded-full"
            asChild
          >
            <Link to="/contact">Demander un Devis Personnalisé <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
