
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
import { motion, useScroll, useTransform } from "framer-motion";

const Index = () => {
  // Page scroll animation setup
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-x-hidden min-h-screen"
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
      
      {/* Geometric decorative elements */}
      <div aria-hidden="true" className="fixed inset-0 grid grid-cols-12 gap-2 pointer-events-none z-0 opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="col-span-1 h-full border-r border-blue-500/5"></div>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="absolute w-full h-[8.33vh]" style={{ top: `${i * 8.33}vh` }}>
            <div className="w-full h-px bg-blue-500/5"></div>
          </div>
        ))}
      </div>
      
      {/* Séparateurs subtils entre les sections - simplified animations */}
      <div className="section-dividers pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div 
            key={i}
            className="section-divider absolute w-full h-px"
            style={{ 
              top: `${i * 17}%`,
              background: `linear-gradient(to right, transparent, var(--${i % 2 ? 'blue' : 'green'}-500) 50%, transparent)`,
              zIndex: 1,
              opacity: 0.1,
              width: "90%"
            }}
          />
        ))}
      </div>
      
      {/* Hero Section */}
      <motion.div style={{ opacity }}>
        <HeroSection />
      </motion.div>
      
      {/* Main Content Sections - simplified animations */}
      <motion.div>
        <LogisticsFeatureSection />
      </motion.div>
      
      <motion.div>
        <ChallengesSection />
      </motion.div>
      
      <motion.div>
        <HowItWorksSection />
      </motion.div>
      
      <motion.div>
        <WhyUsSection />
      </motion.div>
      
      <motion.div>
        <LogisticsPerformanceSection />
      </motion.div>
      
      <motion.div>
        <TestimonialsSection />
      </motion.div>
      
      <motion.div>
        <Testimonials />
      </motion.div>
      
      <motion.div>
        <ContactCTA />
      </motion.div>
      
      {/* Enhanced animated particles - simplified */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, index) => {
          // Generate more varied sizes, positions and colors
          const size = (index % 3) + 1 + Math.random();
          const left = `${(index * 7) + Math.random() * 20}%`;
          const top = `${(index * 6) + Math.random() * 70}%`;
          
          const colors = [
            'bg-blue-400/10',
            'bg-orange-400/10', 
            'bg-green-400/10',
            'bg-purple-400/10',
            'bg-cyan-400/10'
          ];
          
          const color = colors[index % colors.length];
          
          return (
            <motion.div
              key={index}
              className={`absolute rounded-full ${color}`}
              style={{
                width: `${size}rem`,
                height: `${size}rem`,
                left,
                top,
              }}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 0.3 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </div>
      
      {/* Scroll indicator that appears when scrolling down - simplified */}
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-1 h-16 bg-gray-300/30 dark:bg-gray-600/30 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-blue-500 h-full origin-top"
              style={{
                scaleY: scrollYProgress
              }}
            />
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            SCROLL
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Index;
