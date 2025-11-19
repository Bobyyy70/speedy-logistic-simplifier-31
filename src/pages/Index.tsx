import { useEffect } from "react";

import { HeroSection } from "@/components/sections/HeroSection";
import { LogoGridSection } from "@/components/sections/LogoGridSection";
import { PerformanceStatsSection } from "@/components/sections/PerformanceStatsSection";
import { AlternatingServicesSection } from "@/components/sections/AlternatingServicesSection";
import { FeaturedTestimonialSection } from "@/components/sections/FeaturedTestimonialSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SEOHead } from "@/components/seo/SEOHead";
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
    <div className="min-h-screen relative">
      {/* SEO Meta Tags */}
      <SEOHead page="/" />

      <div className="relative overflow-x-hidden z-10">

        {/* Hero Section - No lazy loading for above-fold content */}
        <div className="bg-white">
          <HeroSection />
        </div>
        <div className="h-8 bg-gradient-to-b from-white to-transparent pointer-events-none" aria-hidden="true" />

        {/* NEW: Logo Grid Section - Social Proof */}
        <LogoGridSection />

        {/* NEW: Performance Stats Section */}
        <PerformanceStatsSection />

        {/* NEW: Alternating Services Section */}
        <AlternatingServicesSection />

        {/* NEW: Featured Testimonial Section */}
        <FeaturedTestimonialSection />
        
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
        
        {/* How It Works Section - Lazy loaded */}
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView
            loader={() => import("@/components/sections/HowItWorksSection").then(m => ({ default: m.HowItWorksSection }))}
            componentProps={{ backgroundVariant: 'white' }}
          />
        </LazyMotionDiv>

        {/* Why Us Section - Lazy loaded */}
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView
            loader={() => import("@/components/sections/WhyUsSection").then(m => ({ default: m.WhyUsSection }))}
            componentProps={{ backgroundVariant: 'site' }}
          />
        </LazyMotionDiv>

        {/* Testimonials Carousel - Lazy loaded */}
        <LazyMotionDiv className="cv-auto cis-800" variants={sectionVariants}>
          <LazyInView
            loader={() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection }))}
            componentProps={{ backgroundVariant: 'site' }}
          />
        </LazyMotionDiv>

        {/* NEW: Final CTA Section with Form */}
        <FinalCTASection />
      </div>
    </div>
  );
}

export default Index;
