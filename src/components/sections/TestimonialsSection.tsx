
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
    <section className="py-12 md:py-20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Engagements</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Notre approche est fondée sur des valeurs fortes et des engagements concrets
            envers nos équipes et notre planète.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Engagement envers l'équipe */}
          <Card className="bg-gradient-to-br from-blue-50/50 to-green-100/50 dark:from-blue-950/30 dark:to-green-950/30 border-blue-200/50 dark:border-blue-700/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                {commitmentData.team.title}
              </CardTitle>
              <CardDescription>{commitmentData.team.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {commitmentData.team.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-sm md:text-base">{item.text}</p>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>

          {/* Engagement envers la planète */}
          <Card className="bg-gradient-to-br from-green-50/50 to-blue-100/50 dark:from-green-950/30 dark:to-blue-950/30 border-green-200/50 dark:border-green-700/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
                {commitmentData.planet.title}
              </CardTitle>
              <CardDescription>{commitmentData.planet.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {commitmentData.planet.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <Icon className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-sm md:text-base">{item.text}</p>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
