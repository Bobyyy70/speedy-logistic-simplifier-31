import { useEffect } from "react";

import { HeroSection } from "@/components/sections/HeroSection";
import { LazyMotionDiv } from "@/components/ui/lazy-motion";
import { LazyComponentLoader } from "@/components/performance/LazyComponentLoader";
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
        
        {/* Main Content Sections - Optimized lazy loading */}
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyComponentLoader 
            importFn={() => import("@/components/sections/LogisticsFeatureSection")}
            componentName="LogisticsFeatureSection"
            backgroundVariant="white"
          />
        </LazyMotionDiv>
        
        {/* Apply site background to mid sections */}
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyComponentLoader 
            importFn={() => import("@/components/sections/ChallengesSection")}
            componentName="ChallengesSection"
            backgroundVariant="site"
          />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyComponentLoader 
            importFn={() => import("@/components/sections/HowItWorksSection")}
            componentName="HowItWorksSection"
            backgroundVariant="white"
          />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyComponentLoader 
            importFn={() => import("@/components/sections/WhyUsSection")}
            componentName="WhyUsSection"
            backgroundVariant="site"
          />
        </LazyMotionDiv>
        
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyComponentLoader 
            importFn={() => import("@/components/sections/LogisticsPerformanceSection")}
            componentName="LogisticsPerformanceSection"
            backgroundVariant="site"
          />
        </LazyMotionDiv>

        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyComponentLoader 
            importFn={() => import("@/components/sections/TestimonialsSection")}
            componentName="TestimonialsSection"
            backgroundVariant="site"
          />
        </LazyMotionDiv>
        
        {/* Transition back to white before Contact CTA */}
        <div className="h-8 bg-gradient-to-b from-transparent to-white pointer-events-none" aria-hidden="true" />
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyComponentLoader 
            importFn={() => import("@/components/home/ContactCTA")}
            componentName="ContactCTA" 
          />
        </LazyMotionDiv>
      </div>
    </div>
  );
}

export default Index;
