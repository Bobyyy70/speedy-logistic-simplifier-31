
import React from "react";
import { Clock, TrendingUp, Wallet } from "lucide-react";
import { motion } from "framer-motion";
export function ChallengesSection() {
  const challenges = [{
    icon: Clock,
    title: "Manque de temps pour croître",
    description: "La préparation des commandes et la gestion des expéditions vous empêchent de vous concentrer sur votre cœur de métier."
  }, {
    icon: Wallet,
    title: "Coûts d'expédition élevés",
    description: "Sans volume suffisant, difficile de négocier des tarifs avantageux avec les transporteurs et rentabiliser votre logistique."
  }, {
    icon: TrendingUp,
    title: "Complexité de la gestion",
    description: "Stocks, retours, expéditions multi-transporteurs... Plus vous grandissez, plus la logistique devient complexe à gérer."
  }];
  return <section id="challenges" className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100/50 via-white to-blue-50/70 dark:from-blue-950/30 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <div className="inline-block rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 px-3 py-1 text-sm">
            Vos Défis Actuels
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Externalisez votre logistique avec Speed E-Log

Libérez votre temps, boostez votre croissance</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Gérer les stocks, préparer les commandes, négocier les tarifs transporteurs... Autant de tâches chronophages 
            qui vous détournent de l'essentiel : développer votre e-commerce.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {challenges.map((challenge, index) => <motion.div key={index} className="flex flex-col items-center text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <div className="mb-4 rounded-full bg-orange-100 dark:bg-orange-900/30 p-4">
                <challenge.icon className="h-8 w-8 text-orange-600 dark:text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
