
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
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Engagements</h2>
          <p className="text-muted-foreground">
            Chez Speed E Log, nos valeurs guident chacune de nos actions pour vous offrir un service d'excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Team Commitment */}
          <Card className="bg-gradient-to-br from-blue-50/80 to-blue-100/50 dark:from-blue-900/10 dark:to-blue-800/5 border-blue-200/50 dark:border-blue-800/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                {commitmentData.team.title}
              </CardTitle>
              <CardDescription>{commitmentData.team.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {commitmentData.team.items.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                      <item.icon className="h-4 w-4 text-blue-700 dark:text-blue-400" />
                    </span>
                    <span className="text-sm">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Planet Commitment */}
          <Card className="bg-gradient-to-br from-green-50/80 to-green-100/50 dark:from-green-900/10 dark:to-green-800/5 border-green-200/50 dark:border-green-800/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Leaf className="h-5 w-5 mr-2 text-green-600" />
                {commitmentData.planet.title}
              </CardTitle>
              <CardDescription>{commitmentData.planet.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {commitmentData.planet.items.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <item.icon className="h-4 w-4 text-green-700 dark:text-green-400" />
                    </span>
                    <span className="text-sm">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
