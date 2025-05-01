
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Leaf, Award, CalendarDays, Flame, Recycle, Box, HandHeart } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <section className="py-12 backdrop-blur-sm md:py-24">
      <div className="section-container py-0 my-0">
        <h2 className="section-title">Nos Engagements</h2>
        <p className="section-subtitle">
          Speed E Log s'engage quotidiennement sur plusieurs fronts pour un avenir meilleur.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Engagement envers l'équipe */}
          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-blue-200/50 dark:border-blue-800/30">
            <CardHeader>
              <CardTitle className="text-2xl">{commitmentData.team.title}</CardTitle>
              <CardDescription className="text-lg">{commitmentData.team.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {commitmentData.team.items.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mt-1 p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
          
          {/* Engagement envers la planète */}
          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-green-200/50 dark:border-green-800/30">
            <CardHeader>
              <CardTitle className="text-2xl">{commitmentData.planet.title}</CardTitle>
              <CardDescription className="text-lg">{commitmentData.planet.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {commitmentData.planet.items.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mt-1 p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                    <item.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
