import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { Services } from "@/components/home/Services";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";
import { LogisticsFeatureSection } from "@/components/sections/LogisticsFeatureSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent">
      <Helmet>
        <title>Speed E-Log | Logistique E-commerce Simplifiée pour PME</title>
        <meta 
          name="description" 
          content="Externalisez votre logistique e-commerce avec Speed E-Log. Services fiables et transparents pour PME. Obtenez un devis personnalisé." 
        />
        <meta property="og:title" content="Speed E-Log | Logistique E-commerce Simplifiée pour PME" />
        <meta 
          property="og:description" 
          content="Externalisez votre logistique e-commerce avec Speed E-Log. Services fiables et transparents pour PME. Obtenez un devis personnalisé." 
        />
      </Helmet>
      <HeroSection />
      <LogisticsFeatureSection />
      <ChallengesSection />
      <Services />
      <HowItWorksSection />
      <WhyUsSection />
      <TestimonialsSection />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </div>
  );
}

export default Index;
