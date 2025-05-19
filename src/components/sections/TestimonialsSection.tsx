
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Leaf, Award, CalendarDays, Flame, Recycle, Box, HandHeart } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

const commitmentData = {
  team: {
    title: "Envers notre équipe",
    description: "Nous croyons que la réussite collective naît du bien-être individuel.",
    items: [{
      icon: Users,
      text: "Cultiver un environnement de travail inclusif et respectueux, où chaque voix compte et où la diversité est une force"
    }, {
      icon: Award,
      text: "Accompagner nos employés à chaque étape, grâce à des formations adaptées, des opportunités d'évolution"
    }, {
      icon: Flame,
      text: "Garantir des conditions de travail épanouissantes, avec motivation et fierté"
    }]
  },
  planet: {
    title: "Envers la planète",
    description: "Notre responsabilité environnementale guide nos actions au quotidien.",
    items: [{
      icon: Recycle,
      text: "Réduire notre impact grâce au recyclage systématique des matériaux (cartons, plastiques, glassine etc ...)"
    }, {
      icon: HandHeart,
      text: "Utiliser des emballages et du calage biodégradables, sensibiliser nos équipes et partenaires aux gestes écoresponsables"
    }]
  }
};

export function TestimonialsSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-300/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-green-300/5 blur-3xl" />
      
      {/* Fine line decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <AnimatedText 
            text="Nos Engagements"
            className="text-3xl md:text-4xl font-bold mb-4"
            delay={0.2}
          />
          <p className="text-muted-foreground">
            Chez Speed E Log, nos valeurs guident chacune de nos actions pour vous offrir un service d'excellence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative">
          {/* Connection line between cards */}
          <div className="hidden md:block absolute top-1/2 left-1/2 w-16 h-1 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full" />
          
          {/* Team Commitment */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ 
              scale: 1.03, 
              transition: { duration: 0.3 },
              boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)"
            }}
          >
            <Card className="bg-gradient-to-br from-blue-50/80 to-blue-100/50 dark:from-blue-900/10 dark:to-blue-800/5 border-blue-200/50 dark:border-blue-800/30 overflow-hidden relative">
              <CardHeader>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
                />
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  {commitmentData.team.title}
                </CardTitle>
                <CardDescription>{commitmentData.team.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.ul 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {commitmentData.team.items.map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <span className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 relative overflow-hidden">
                        <item.icon className="h-4 w-4 text-blue-700 dark:text-blue-400 relative z-10" />
                        <motion.div 
                          className="absolute inset-0 bg-blue-200 dark:bg-blue-700/30"
                          animate={{ 
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </span>
                      <span className="text-sm">{item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Planet Commitment */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            whileHover={{ 
              scale: 1.03, 
              transition: { duration: 0.3 },
              boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)"
            }}
          >
            <Card className="bg-gradient-to-br from-green-50/80 to-green-100/50 dark:from-green-900/10 dark:to-green-800/5 border-green-200/50 dark:border-green-800/30 overflow-hidden relative">
              <CardHeader>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute top-0 right-0 w-32 h-32 bg-green-400/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
                />
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-green-600" />
                  {commitmentData.planet.title}
                </CardTitle>
                <CardDescription>{commitmentData.planet.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.ul 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {commitmentData.planet.items.map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <span className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 relative overflow-hidden">
                        <item.icon className="h-4 w-4 text-green-700 dark:text-green-400 relative z-10" />
                        <motion.div 
                          className="absolute inset-0 bg-green-200 dark:bg-green-700/30"
                          animate={{ 
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </span>
                      <span className="text-sm">{item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
