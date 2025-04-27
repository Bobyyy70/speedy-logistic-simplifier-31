
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Services as ServicesSection } from "@/components/home/Services";
import { LogisticsPerformanceSection } from "@/components/sections/LogisticsPerformanceSection";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-200 dark:from-green-800 dark:to-blue-900">
      <div className="container mx-auto py-16 px-4 bg-gradient-to-r from-blue-200 to-green-200 dark:from-blue-900 dark:to-green-800">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-6">
          Nos Services Logistiques pour E-commerce
        </h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Des solutions complètes et sur mesure pour gérer efficacement votre chaîne logistique.
          Nous vous aidons à vous concentrer sur votre cœur de métier.
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-green-200 to-blue-200 dark:from-green-800 dark:to-blue-900">
        <ServicesSection />
      </div>

      <div className="bg-gradient-to-r from-blue-200 to-green-200 dark:from-blue-900 dark:to-green-800">
        <LogisticsPerformanceSection />
      </div>
      
      <section className="container mx-auto mt-12 md:mt-16 lg:mt-20 text-center px-4 pb-16 bg-gradient-to-r from-green-200 to-blue-200 dark:from-green-800 dark:to-blue-900">
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
