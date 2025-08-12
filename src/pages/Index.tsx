import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { LazyMotionDiv } from "@/components/ui/lazy-motion";
import { LazyInView } from "@/components/performance/LazyInView";
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
    <div className="min-h-screen relative">
      
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
          <meta name="robots" content="index, follow" />
        </Helmet>
        
        {/* Hero Section - No lazy loading for above-fold content */}
        <div className="bg-white">
          <HeroSection />
        </div>
        <div className="h-8 bg-gradient-to-b from-white to-transparent pointer-events-none" aria-hidden="true" />
        
        {/* Main Content Sections - Lazy loaded */}
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView loader={() => import("@/components/sections/LogisticsFeatureSection").then(m => ({ default: m.LogisticsFeatureSection }))} />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView loader={() => import("@/components/sections/ChallengesSection").then(m => ({ default: m.ChallengesSection }))} />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView loader={() => import("@/components/sections/HowItWorksSection").then(m => ({ default: m.HowItWorksSection }))} />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView loader={() => import("@/components/sections/WhyUsSection").then(m => ({ default: m.WhyUsSection }))} />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView loader={() => import("@/components/sections/LogisticsPerformanceSection").then(m => ({ default: m.LogisticsPerformanceSection }))} />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView loader={() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection }))} />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView loader={() => import("@/components/home/ContactCTA").then(m => ({ default: m.ContactCTA }))} />
        </LazyMotionDiv>
      </div>
    </div>
  );
}

export default Index;
