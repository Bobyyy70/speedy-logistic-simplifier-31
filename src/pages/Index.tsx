import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { LazyMotionDiv } from "@/components/ui/lazy-motion";
import { LazyInView } from "@/components/performance/LazyInView";
import { ContactCTA } from "@/components/home/ContactCTA";
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
    <>
      <Helmet>
        <title>Speed E-Log | Logistique e-commerce pour PME françaises</title>
        <meta name="description" content="Externalisez votre logistique e-commerce avec Speed E-Log. Fulfillment, préparation de commandes et expédition pour PME. Tarif dès 6,50€ TTC." />
        <meta name="keywords" content="logistique e-commerce, fulfillment France, 3PL, préparation commandes, externalisation logistique PME" />
        <link rel="canonical" href="https://speedelog.net/" />
        <meta property="og:url" content="https://speedelog.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Speed E-Log | Logistique e-commerce pour PME" />
        <meta property="og:description" content="Externalisez votre logistique e-commerce avec Speed E-Log. Fulfillment, préparation de commandes et expédition pour PME." />
      </Helmet>
      
      <div className="min-h-screen relative">
        
        {/* Removed duplicate BackgroundGradientAnimation - only one in HeroSection */}

      <div className="relative overflow-x-hidden z-10">
        
        {/* Hero Section - No lazy loading for above-fold content */}
        <div className="bg-white">
          <HeroSection />
        </div>
        <div className="h-8 bg-gradient-to-b from-white to-transparent pointer-events-none" aria-hidden="true" />
        
        {/* Main Content Sections - Lazy loaded */}
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView 
            loader={() => import("@/components/sections/LogisticsFeatureSection").then(m => ({ default: m.LogisticsFeatureSection }))} 
            componentProps={{ backgroundVariant: 'white' }}
          />
        </LazyMotionDiv>
        
        {/* Apply site background to mid sections */}
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView 
            loader={() => import("@/components/sections/ChallengesSection").then(m => ({ default: m.ChallengesSection }))}
            componentProps={{ backgroundVariant: 'site' }}
          />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView 
            loader={() => import("@/components/sections/HowItWorksSection").then(m => ({ default: m.HowItWorksSection }))}
            componentProps={{ backgroundVariant: 'white' }}
          />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView 
            loader={() => import("@/components/sections/WhyUsSection").then(m => ({ default: m.WhyUsSection }))}
            componentProps={{ backgroundVariant: 'site' }}
          />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView 
            loader={() => import("@/components/sections/LogisticsPerformanceSection").then(m => ({ default: m.LogisticsPerformanceSection }))}
            componentProps={{ backgroundVariant: 'site' }}
          />
        </LazyMotionDiv>

        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView 
            loader={() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection }))} 
            componentProps={{ backgroundVariant: 'site' }}
          />
        </LazyMotionDiv>
        
        {/* Transition back to white before Contact CTA */}
        <div className="h-8 bg-gradient-to-b from-transparent to-white pointer-events-none" aria-hidden="true" />
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <ContactCTA />
        </LazyMotionDiv>
      </div>
      </div>
    </>
  );
}

export default Index;
