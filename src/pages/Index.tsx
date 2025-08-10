
import { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { LazyMotionDiv } from "@/components/ui/lazy-motion";

const LazyLogisticsFeatureSection = lazy(() => import("@/components/sections/LogisticsFeatureSection").then(m => ({ default: m.LogisticsFeatureSection })));
const LazyChallengesSection = lazy(() => import("@/components/sections/ChallengesSection").then(m => ({ default: m.ChallengesSection })));
const LazyHowItWorksSection = lazy(() => import("@/components/sections/HowItWorksSection").then(m => ({ default: m.HowItWorksSection })));
const LazyWhyUsSection = lazy(() => import("@/components/sections/WhyUsSection").then(m => ({ default: m.WhyUsSection })));
const LazyTestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const LazyContactCTA = lazy(() => import("@/components/home/ContactCTA").then(m => ({ default: m.ContactCTA })));
const LazyLogisticsPerformanceSection = lazy(() => import("@/components/sections/LogisticsPerformanceSection").then(m => ({ default: m.LogisticsPerformanceSection })));

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
        <HeroSection />
        
        {/* Main Content Sections - Lazy loaded */}
        <LazyMotionDiv variants={sectionVariants}>
          <Suspense fallback={null}><LazyLogisticsFeatureSection /></Suspense>
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <Suspense fallback={null}><LazyChallengesSection /></Suspense>
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <Suspense fallback={null}><LazyHowItWorksSection /></Suspense>
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <Suspense fallback={null}><LazyWhyUsSection /></Suspense>
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <Suspense fallback={null}><LazyLogisticsPerformanceSection /></Suspense>
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <Suspense fallback={null}><LazyTestimonialsSection /></Suspense>
        </LazyMotionDiv>
        
        <LazyMotionDiv variants={sectionVariants}>
          <Suspense fallback={null}><LazyContactCTA /></Suspense>
        </LazyMotionDiv>
      </div>
    </div>
  );
}

export default Index;
