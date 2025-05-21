
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
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="relative overflow-x-hidden"
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
        <motion.div variants={sectionVariants}>
          <HeroSection />
        </motion.div>
        
        {/* Main Content Sections */}
        <motion.div variants={sectionVariants}>
          <LogisticsFeatureSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ChallengesSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <HowItWorksSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <WhyUsSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <LogisticsPerformanceSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <TestimonialsSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ContactCTA />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Index;
