
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
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { ROICalculatorCTA } from "@/components/sections/ROICalculatorCTA";
import { motion } from "framer-motion";

// Optimized animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05 
    }
  }
};

const Index = () => {
  const { trackPageView, trackInteraction } = usePersonalization();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView('/');
  }, [trackPageView]);

  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundGradientAnimation
        gradientBackgroundStart="#ffffff"
        gradientBackgroundEnd="#f8fafc"
        firstColor="18, 113, 255"
        secondColor="80, 70, 230"
        thirdColor="100, 220, 255"
        fourthColor="120, 119, 198"
        fifthColor="180, 180, 50"
        pointerColor="140, 100, 255"
        size="60%"
        blendingValue="normal"
        interactive={false}
        className="absolute inset-0 z-0 opacity-5"
        height="200%"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="relative overflow-x-hidden z-10"
      >
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
        
        {/* Main Content Sections - Simplified animations */}
        <div className="relative z-10">
          <LogisticsFeatureSection />
          <ChallengesSection />
          <HowItWorksSection />
          <WhyUsSection />
          <LogisticsPerformanceSection />
          <TestimonialsSection />
          <ROICalculatorCTA />
          <ContactCTA />
        </div>
      </motion.div>
      
      <AdvancedSEO />
      <AIChatbot onLeadQualified={(score) => trackInteraction(`chatbot_lead_${score}`)} />
    </div>
  );
}

export default Index;
