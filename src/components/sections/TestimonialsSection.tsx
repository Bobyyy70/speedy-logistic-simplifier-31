
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
    <section id="testimonials" className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos engagements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chez Speed E Log, nous nous engageons à créer un impact positif sur notre environnement et notre communauté.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Engagement envers l'équipe */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                {commitmentData.team.title}
              </CardTitle>
              <CardDescription>{commitmentData.team.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {commitmentData.team.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                      <item.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Engagement envers la planète */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-500" />
                {commitmentData.planet.title}
              </CardTitle>
              <CardDescription>{commitmentData.planet.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {commitmentData.planet.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                      <item.icon className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
