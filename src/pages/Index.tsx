
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { LogisticsFeatureSection } from "@/components/sections/LogisticsFeatureSection";
import { LogisticsPerformanceSection } from "@/components/sections/LogisticsPerformanceSection";
import { LazyMotionDiv } from "@/components/ui/lazy-motion";
import { CriticalResourcePreloader } from "@/components/performance/CriticalResourcePreloader";

// Animation variants pour les transitions entre sections
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1 
    }
  }
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <CriticalResourcePreloader />
      {/* Removed duplicate BackgroundGradientAnimation - only one in HeroSection */}

      <div className="relative overflow-x-hidden z-10">
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
        
        {/* Hero Section - No lazy loading for above-fold content */}
        <HeroSection />
        
        {/* Main Content Sections - Lazy loaded */}
        <LazyMotionDiv variants={sectionVariants}>
          <LogisticsFeatureSection />
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <ChallengesSection />
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <HowItWorksSection />
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <WhyUsSection />
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <LogisticsPerformanceSection />
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <TestimonialsSection />
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <ContactCTA />
        </LazyMotionDiv>
      </div>
    </div>
  );
}

export default Index;
