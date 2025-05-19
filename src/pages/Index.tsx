
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Testimonials } from "@/components/home/Testimonials";
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
      
      {/* Séparateurs subtils entre les sections */}
      <div className="section-dividers pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i}
            className="section-divider absolute w-full h-px"
            style={{ 
              top: `${i * 17}%`,
              background: `linear-gradient(to right, transparent, var(--${i % 2 ? 'blue' : 'green'}-500) 50%, transparent)`,
              opacity: 0.1,
              zIndex: 1
            }}
          />
        ))}
      </div>
      
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
        <Testimonials />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <ContactCTA />
      </motion.div>
      
      {/* Particules décoratives flottantes sur toute la page */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className={`absolute w-${index % 3 + 1} h-${index % 3 + 1} rounded-full ${
              index % 3 === 0 
                ? 'bg-blue-400/10'
                : index % 3 === 1 
                  ? 'bg-orange-400/10'
                  : 'bg-green-400/10'
            }`}
            style={{
              left: `${(index * 10) + Math.random() * 10}%`,
              top: `${(index * 10) + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, index % 2 ? 20 : -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Index;
