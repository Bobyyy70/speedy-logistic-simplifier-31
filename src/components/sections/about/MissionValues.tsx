
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const values = [
  {
    title: "Transparence",
    description: "Une tarification claire et une communication ouverte à chaque étape du processus logistique.",
    bgClass: "from-blue-50/50 to-blue-100/30 dark:from-blue-900/10 dark:to-blue-800/5 border-blue-200/50 dark:border-blue-700/30",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Fiabilité",
    description: "Un engagement sur la qualité et la précision des préparations pour satisfaire vos clients.",
    bgClass: "from-green-50/50 to-green-100/30 dark:from-green-900/10 dark:to-green-800/5 border-green-200/50 dark:border-green-700/30",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "Efficacité",
    description: "Des processus optimisés et des technologies avancées pour une logistique performante et rentable.",
    bgClass: "from-orange-50/50 to-orange-100/30 dark:from-orange-900/10 dark:to-orange-800/5 border-orange-200/50 dark:border-orange-700/30",
    iconColor: "text-orange-500 dark:text-orange-400"
  },
  {
    title: "Partenariat",
    description: "Une relation basée sur l'écoute et l'accompagnement pour soutenir votre croissance.",
    bgClass: "from-blue-50/50 to-green-100/30 dark:from-blue-900/10 dark:to-green-800/5 border-blue-200/50 dark:border-green-700/30",
    iconColor: "text-green-600 dark:text-green-400"
  }
];

export const MissionValues = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-100/80 via-blue-50/50 to-green-100/50 dark:from-slate-900/80 dark:via-blue-950/30 dark:to-green-950/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Mission et Nos Valeurs</h2>
          <div className="flex items-center justify-center mb-10">
            <p className="text-lg md:text-xl font-medium">
              Simplifier la logistique e-commerce pour les PME françaises
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title} className={`bg-gradient-to-br ${value.bgClass}`}>
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <Star className={`h-5 w-5 ${value.iconColor} mr-2`} />
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
