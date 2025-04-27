
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MissionValues } from "@/components/sections/about/MissionValues";
import { OurHistory } from "@/components/sections/about/OurHistory";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-100/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950">
      <Helmet>
        <title>À Propos de Speed E-Log | Votre Partenaire Logistique</title>
        <meta name="description" content="Découvrez Speed E-Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence." />
        <meta property="og:title" content="À Propos de Speed E-Log | Votre Partenaire Logistique" />
        <meta property="og:description" content="Découvrez Speed E-Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence." />
      </Helmet>

      <AboutHero />
      <MissionValues />
      <OurHistory />
      <TestimonialsSection />
      <AboutCTA />
    </div>
  );
};

export default About;
