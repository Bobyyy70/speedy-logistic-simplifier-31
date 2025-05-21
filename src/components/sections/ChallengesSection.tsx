
import React, { useState } from "react";
import { Clock, TrendingUp, Wallet } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

export function ChallengesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const challenges = [
    {
      icon: Clock,
      title: "Manque de temps pour croître",
      description: "La préparation des commandes et la gestion des expéditions vous empêchent de vous concentrer sur votre cœur de métier."
    },
    {
      icon: Wallet,
      title: "Coûts d'expédition élevés",
      description: "Sans volume suffisant, difficile de négocier des tarifs avantageux avec les transporteurs et rentabiliser votre logistique."
    },
    {
      icon: TrendingUp,
      title: "Complexité de la gestion",
      description: "Stocks, retours, expéditions multi-transporteurs... Plus vous grandissez, plus la logistique devient complexe à gérer."
    }
  ];
  
  // Define animation variants for card hover effects
  const cardVariants = {
    default: {
      scale: 1,
      rotateY: 0,
      z: 0,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    }
  };
  
  return (
    <section id="challenges" className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 via-white to-blue-100 dark:from-green-800 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400/5 blur-3xl" 
        animate={{
          x: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-green-400/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Introduction */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block text-orange-700 dark:text-orange-300 px-3 py-1 text-sm rounded-3xl bg-orange-100 dark:bg-orange-900/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Vos Défis Actuels
          </motion.div>
          
          <AnimatedText 
            text="Externalisez votre logistique avec Speed E-Log" 
            className="text-3xl tracking-tighter sm:text-4xl text-center font-bold md:text-6xl"
            delay={0.3}
          />
          
          <AnimatedText 
            text="Libérez votre temps, boostez votre croissance" 
            className="text-2xl tracking-tighter sm:text-3xl text-center font-bold md:text-4xl text-blue-600 dark:text-blue-400"
            delay={0.6}
          />
          
          <motion.p 
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Gérer les stocks, préparer les commandes, négocier les tarifs transporteurs... Autant de tâches chronophages 
            qui vous détournent de l'essentiel : développer votre e-commerce.
          </motion.p>
        </motion.div>

        {/* Challenges Grid with 3D effect */}
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 perspective-800">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center relative preserve-3d"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={cardVariants}
                animate={hoveredIndex === index ? "hover" : "default"}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-white/30 dark:bg-slate-800/30 rounded-2xl -z-10 blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                />
                
                <div className="relative w-full h-full p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 shadow-lg transform-style-3d transition-all duration-300">
                  <motion.div 
                    className="mb-4 rounded-full bg-orange-100 dark:bg-orange-900/30 p-4 relative mx-auto"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20, 
                      delay: index * 0.2 + 0.3 
                    }}
                    whileHover={{
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Icon className="h-8 w-8 text-orange-600 dark:text-orange-500" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-orange-400/20 dark:bg-orange-400/10"
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      animate={{ 
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    {challenge.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    {challenge.description}
                  </motion.p>
                  
                  {/* Animated arrow showing the transformation */}
                  <motion.div 
                    className="mt-4 text-blue-600 dark:text-blue-400" 
                    initial={{ opacity: 0 }}
                    animate={hoveredIndex === index ? { opacity: 1, y: [5, 0] } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Transformez ce défi →
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-${i % 3 + 1} h-${i % 3 + 1} rounded-full 
            ${i % 3 === 0 ? 'bg-blue-400/10' : i % 3 === 1 ? 'bg-orange-400/10' : 'bg-green-400/10'}`}
          style={{
            left: `${(i * 15) + Math.random() * 10}%`,
            top: `${(i * 10) + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 ? 15 : -15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </section>
  );
}
