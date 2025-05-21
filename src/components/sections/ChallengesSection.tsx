
import React from "react";
import { Clock, TrendingUp, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

export function ChallengesSection() {
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
  
  return (
    <section id="challenges" className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-green-400/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Introduction */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="pin-badge text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Vos défis actuels
          </motion.div>
          
          <AnimatedText 
            text="Externalisez votre logistique avec Speed E-Log" 
            className="text-3xl tracking-tighter sm:text-4xl text-center font-bold md:text-6xl text-slate-900 dark:text-white"
            delay={0.3}
          />
          
          <AnimatedText 
            text="Libérez votre temps, boostez votre croissance" 
            className="text-2xl tracking-tighter sm:text-3xl text-center font-bold md:text-4xl text-blue-600 dark:text-blue-400"
            delay={0.6}
          />
          
          <motion.p 
            className="max-w-[900px] text-slate-600 dark:text-slate-300 md:text-xl/relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Gérer les stocks, préparer les commandes, négocier les tarifs transporteurs... Autant de tâches chronophages 
            qui vous détournent de l'essentiel : développer votre e-commerce.
          </motion.p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <motion.div 
              key={index} 
              className="section-box flex flex-col items-center text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="mb-4 rounded-full bg-orange-100 dark:bg-orange-900/30 p-4 relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20, 
                  delay: index * 0.2 + 0.3 
                }}
              >
                <challenge.icon className="h-8 w-8 text-orange-600 dark:text-orange-500" />
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
                className="text-xl font-bold mb-2 text-slate-900 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              >
                {challenge.title}
              </motion.h3>
              <motion.p 
                className="text-slate-600 dark:text-slate-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              >
                {challenge.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
