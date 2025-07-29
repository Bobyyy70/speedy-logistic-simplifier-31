
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ServicesHero } from "@/components/services/ServicesHero";
import { KeyBenefits } from "@/components/services/KeyBenefits";
import { Services as ServicesSection } from "@/components/home/Services";
import { LogisticsPerformanceSection } from "@/components/sections/LogisticsPerformanceSection";
import { MapFeature } from "@/components/ui/MapFeature";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { ServicesCta } from "@/components/services/ServicesCta";

const Services: React.FC = () => {
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
      
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Key Benefits Section */}
      <KeyBenefits />
      
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
      <ServicesFaq />
      
      {/* CTA Section */}
      <ServicesCta />
    </div>
  );
};

export default Services;
