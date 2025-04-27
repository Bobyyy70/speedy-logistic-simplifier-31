
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Services as ServicesSection } from "@/components/home/Services";
import { LogisticsPerformanceSection } from "@/components/sections/LogisticsPerformanceSection";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto py-16 px-4 bg-gradient-to-r from-blue-100/90 via-white to-green-200/90 dark:from-slate-900 dark:via-slate-950 dark:to-green-800/90 relative">
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-orange-100/20 dark:bg-orange-900/20" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-6">
          Nos Services Logistiques pour E-commerce
        </h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Des solutions complètes et sur mesure pour gérer efficacement votre chaîne logistique.
          Nous vous aidons à vous concentrer sur votre cœur de métier.
        </p>
        <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-orange-100/10 dark:bg-orange-900/10" />
      </div>
      
      <div className="relative bg-gradient-to-l from-blue-100/90 via-white to-green-200/90 dark:from-slate-900 dark:via-slate-950 dark:to-green-800/90">
        <ServicesSection />
        <div className="absolute top-1/2 right-4 w-8 h-8 rounded-full bg-orange-100/30 dark:bg-orange-900/30" />
      </div>

      <div className="relative bg-gradient-to-r from-blue-100/90 via-white to-green-200/90 dark:from-slate-900 dark:via-slate-950 dark:to-green-800/90">
        <LogisticsPerformanceSection />
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-orange-100/20 dark:bg-orange-900/20" />
      </div>
      
      <section className="container mx-auto mt-12 md:mt-16 lg:mt-20 text-center px-4 pb-16 relative">
        <div className="absolute top-0 left-1/2 w-10 h-10 rounded-full bg-orange-100/20 dark:bg-orange-900/20" />
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Prêt à externaliser votre logistique ?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Discutons de vos besoins spécifiques et voyons comment Speed E-Log peut vous aider à simplifier vos opérations et à vous concentrer sur votre croissance.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-gradient-to-br from-blue-600 via-orange-400/20 to-green-500 hover:from-blue-700 hover:via-orange-500/30 hover:to-green-600 rounded-3xl shadow-lg hover:shadow-orange-200/20 dark:hover:shadow-orange-900/20 transition-all duration-300"
        >
          <Link to="/contact">Demander un Devis Personnalisé</Link>
        </Button>
      </section>
    </div>
  );
};

export default Services;
