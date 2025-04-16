
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Star } from "lucide-react";

export const MissionValuesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Mission et Nos Valeurs</h2>
          <div className="flex items-center justify-center mb-10">
            <Target className="w-6 h-6 text-orange-500 mr-2" />
            <p className="text-lg md:text-xl font-medium">
              Simplifier la logistique e-commerce pour les PME françaises
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard 
            title="Transparence" 
            description="Une tarification claire et une communication ouverte à chaque étape du processus logistique." 
          />
          <ValueCard 
            title="Fiabilité" 
            description="Un engagement sur la qualité et la précision des préparations pour satisfaire vos clients." 
          />
          <ValueCard 
            title="Efficacité" 
            description="Des processus optimisés et des technologies avancées pour une logistique performante et rentable." 
          />
          <ValueCard 
            title="Partenariat" 
            description="Une relation basée sur l'écoute et l'accompagnement pour soutenir votre croissance." 
          />
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard = ({ title, description }: ValueCardProps) => {
  return (
    <Card className="bg-muted/30 border-0">
      <CardHeader className="pb-2 flex flex-row items-center space-y-0">
        <Star className="h-5 w-5 text-orange-500 mr-2" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
