
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Leaf, Award, CalendarDays, Flame, Recycle, Box, HandHeart } from "lucide-react";
import { motion } from "framer-motion";

const commitmentData = {
  team: {
    title: "Envers notre équipe",
    description: "Nous croyons que la réussite collective naît du bien-être individuel.",
    items: [
      {
        icon: Users,
        text: "Cultiver un environnement de travail inclusif et respectueux, où chaque voix compte et où la diversité est une force"
      },
      {
        icon: Award,
        text: "Accompagner nos employés à chaque étape, grâce à des formations adaptées, des opportunités d'évolution"
      },
      {
        icon: Flame,
        text: "Garantir des conditions de travail épanouissantes, avec motivation et fierté"
      }
    ]
  },
  planet: {
    title: "Envers la planète",
    description: "Notre responsabilité environnementale guide nos actions au quotidien.",
    items: [
      {
        icon: Recycle,
        text: "Réduire notre impact grâce au recyclage systématique des matériaux (cartons, plastiques, glassine etc ...)"
      },
      {
        icon: HandHeart,
        text: "Utiliser des emballages et du calage biodégradables, sensibiliser nos équipes et partenaires aux gestes écoresponsables"
      }
    ]
  }
};

export function TestimonialsSection() {
  return (
    <section id="engagement" className="transparent-section py-12 md:py-24 my-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Performance logistique et responsabilité humaine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Chez Speed E-Log, notre vision va au-delà de la performance logistique : elle place l'humain et la planète au cœur de chaque décision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Team Commitment Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full card-glass border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="h-6 w-6 text-primary" />
                  {commitmentData.team.title}
                </CardTitle>
                <CardDescription>{commitmentData.team.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {commitmentData.team.items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <item.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{item.text}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Planet Commitment Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full card-glass border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Leaf className="h-6 w-6 text-primary" />
                  {commitmentData.planet.title}
                </CardTitle>
                <CardDescription>{commitmentData.planet.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {commitmentData.planet.items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <item.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{item.text}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
