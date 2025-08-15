import { useEffect } from "react";

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
          <LazyInView loader={() => import("@/components/home/ContactCTA")} />
        </LazyMotionDiv>
        
        {/* Section WorldMap avec fenêtre devis - avant le footer */}
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView 
            loader={() => import("@/components/sections/GlobalNetworkSection")} 
            componentProps={{ backgroundVariant: 'white' }}
          />
        </LazyMotionDiv>
      </div>
    </div>
  );
}

export default Index;
