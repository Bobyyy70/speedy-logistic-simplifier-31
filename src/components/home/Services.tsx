
import { Package, Truck, Clock, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Réception & Contrôle",
    description: "Réception de vos marchandises et contrôle qualité minutieux pour garantir l'intégrité de votre stock.",
    icon: Package,
  },
  {
    title: "Stockage Sécurisé",
    description: "Stockage optimal de vos produits avec suivi d'inventaire en temps réel dans notre entrepôt sécurisé.",
    icon: FileText,
  },
  {
    title: "Préparation Commandes",
    description: "Picking, packing et personnalisation de vos colis avec rapidité et précision pour satisfaire vos clients.",
    icon: Users,
  },
  {
    title: "Expédition Multi-Transporteurs",
    description: "Expédition via notre réseau de transporteurs avec suivi et tarifs négociés pour une livraison optimale.",
    icon: Truck,
  },
  {
    title: "Gestion des Retours",
    description: "Traitement efficace des retours avec contrôle, reconditionnement et réintégration en stock si nécessaire.",
    icon: Clock,
  },
];

export function Services() {
  return (
    <section className="section-container" id="services">
      <h2 className="section-title">Nos Services Logistiques</h2>
      <p className="section-subtitle">
        Des solutions complètes pour gérer l'ensemble de votre chaîne logistique e-commerce afin que vous puissiez vous concentrer sur le développement de votre activité.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg border-opacity-80">
            <CardHeader className="pb-4">
              <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center mb-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild>
          <Link to="/services">En savoir plus sur nos services</Link>
        </Button>
      </div>
    </section>
  );
}
