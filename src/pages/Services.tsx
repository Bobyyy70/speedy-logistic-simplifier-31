
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Services as ServicesSection } from "@/components/home/Services";
import { LogisticsPerformanceSection } from "@/components/sections/LogisticsPerformanceSection";
import { AnimatedButton } from "@/components/ui/moving-border";
import { Helmet } from "react-helmet-async";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Helmet>
        <title>Services Logistiques E-commerce | Speed E-Log</title>
        <meta name="description" content="Découvrez nos services logistiques e-commerce: réception, stockage, préparation de commandes, expédition et gestion des retours. Solutions pour PME." />
        <meta property="og:title" content="Services Logistiques E-commerce | Speed E-Log" />
        <meta property="og:description" content="Découvrez nos services logistiques e-commerce: réception, stockage, préparation de commandes, expédition et gestion des retours. Solutions pour PME." />
      </Helmet>
      
      <div className="w-full py-12 md:py-16 px-4 bg-gradient-to-r from-blue-100/90 via-white to-green-200/90 dark:from-slate-900 dark:via-slate-950 dark:to-green-800/90">
        <div className="container mx-auto relative">
          <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-orange-100/20 dark:bg-orange-900/20" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-4 md:mb-6">
            Nos Services <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">Logistiques</span>
          </h1>
          <p className="text-base md:text-lg text-center text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto">
            Des solutions complètes et sur mesure pour gérer efficacement votre chaîne logistique.
            Nous vous aidons à vous concentrer sur votre cœur de métier.
          </p>
          <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-orange-100/10 dark:bg-orange-900/10" />
        </div>
      </div>
      
      <div className="relative bg-gradient-to-l from-blue-100/90 via-white to-green-200/90 dark:from-slate-900 dark:via-slate-950 dark:to-green-800/90">
        <ServicesSection />
        <div className="absolute top-1/2 right-4 w-8 h-8 rounded-full bg-orange-100/30 dark:bg-orange-900/30" />
      </div>

      <div className="relative bg-gradient-to-r from-blue-100/90 via-white to-green-200/90 dark:from-slate-900 dark:via-slate-950 dark:to-green-800/90">
        <LogisticsPerformanceSection />
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-orange-100/20 dark:bg-orange-900/20" />
      </div>
      
      <section className="container mx-auto mt-8 md:mt-16 lg:mt-20 text-center px-4 pb-12 md:pb-16 relative">
        <div className="absolute top-0 left-1/2 w-10 h-10 rounded-full bg-orange-100/20 dark:bg-orange-900/20" />
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-3 md:mb-4">
          Prêt à externaliser votre logistique ?
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-5 md:mb-6 max-w-xl mx-auto">
          Discutons de vos besoins spécifiques et voyons comment Speed E-Log peut vous aider à simplifier vos opérations et à vous concentrer sur votre croissance.
        </p>
        <AnimatedButton 
          asChild
          className="shadow-lg hover:shadow-orange-200/20 dark:hover:shadow-orange-900/20 px-5 py-3"
        >
          <Link to="/contact">Demander un Devis Personnalisé</Link>
        </AnimatedButton>
      </section>
    </div>
  );
};

export default Services;
