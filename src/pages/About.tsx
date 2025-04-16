
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionValuesSection } from "@/components/about/MissionValuesSection";
import { HistorySection } from "@/components/about/HistorySection";
import { LocationSection } from "@/components/about/LocationSection";
import { AboutCTA } from "@/components/about/AboutCTA";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-orange-50/50 via-white to-orange-50/50 dark:from-slate-900 dark:via-slate-950 dark:to-orange-950/20">
      <Helmet>
        <title>À Propos de Speed E-Log | Votre Partenaire Logistique</title>
        <meta 
          name="description" 
          content="Découvrez Speed E-Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence."
        />
        <meta property="og:title" content="À Propos de Speed E-Log | Votre Partenaire Logistique" />
        <meta 
          property="og:description" 
          content="Découvrez Speed E-Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence."
        />
      </Helmet>

      <AboutHero />
      <MissionValuesSection />
      <HistorySection />
      <LocationSection />
      <TestimonialsSection />
      <AboutCTA />
    </div>
  );
};

export default About;
