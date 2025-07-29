
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
// import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"; // Disabled for TBT optimization
// Removed heavy Framer Motion animations for TBT optimization

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background animation disabled for TBT optimization */}

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
        
        {/* Hero Section */}
        <div>
          <HeroSection />
        </div>
        
        {/* Main Content Sections */}
        <div>
          <LogisticsFeatureSection />
        </div>
        
        <div>
          <ChallengesSection />
        </div>
        
        <div>
          <HowItWorksSection />
        </div>
        
        <div>
          <WhyUsSection />
        </div>
        
        <div>
          <LogisticsPerformanceSection />
        </div>
        
        <div>
          <TestimonialsSection />
        </div>
        
        <div>
          <ContactCTA />
        </div>
      </div>
    </div>
  );
}

export default Index;
