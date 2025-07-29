
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AIChatbot } from "@/components/ai/AIChatbot";
import { AdvancedSEO } from "@/components/seo/AdvancedSEO";
import { usePersonalization } from "@/hooks/use-personalization";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { LogisticsFeatureSection } from "@/components/sections/LogisticsFeatureSection";
import { LogisticsPerformanceSection } from "@/components/sections/LogisticsPerformanceSection";
import { ROICalculatorCTA } from "@/components/sections/ROICalculatorCTA";

const Index = () => {
  const { trackPageView, trackInteraction } = usePersonalization();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView('/');
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-white relative">{/* Remove all animations and simplify */}
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
        <meta name="keywords" content="logistique e-commerce, externalisation logistique, 3PL, fulfillment, préparation commandes, PME logistique" />
      </Helmet>
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content Sections - No animations */}
      <LogisticsFeatureSection />
      <ChallengesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <LogisticsPerformanceSection />
      <TestimonialsSection />
      <ROICalculatorCTA />
      <ContactCTA />
      
      <AdvancedSEO />
      <AIChatbot onLeadQualified={(score) => trackInteraction(`chatbot_lead_${score}`)} />
    </div>
  );
}

export default Index;
