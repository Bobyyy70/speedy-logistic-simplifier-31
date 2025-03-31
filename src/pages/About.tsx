
import { useEffect } from "react";
import { Truck, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    title: "Fiabilité",
    description: "Nous respectons nos engagements et veillons à maintenir une qualité de service constante.",
  },
  {
    title: "Transparence",
    description: "Nous croyons en une communication claire et honnête sur tous les aspects de notre collaboration.",
  },
  {
    title: "Technologie",
    description: "Nous investissons continuellement dans des solutions technologiques pour améliorer notre service.",
  },
  {
    title: "Partenariat",
    description: "Nous nous considérons comme un véritable partenaire de croissance, pas un simple prestataire.",
  },
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-sky-50 pt-32 pb-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                À Propos de Speed E Log
              </h1>
              <p className="text-xl text-muted-foreground">
                Votre partenaire logistique e-commerce spécialisé en Bourgogne-Franche-Comté.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Speed E Log est née d'une passion pour la logistique et d'une volonté de simplifier la vie des entrepreneurs e-commerce. Fondée par Francesco Almanzo, notre entreprise s'est construite sur l'identification d'un besoin crucial : offrir aux PME e-commerce une solution logistique professionnelle, transparente et accessible.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Basés à Port-sur-Saône en Bourgogne-Franche-Comté, nous avons développé une expertise spécifique dans la gestion de produits non fragiles, non périssables et de moins de 30 kg - la catégorie qui représente la majorité des produits vendus en ligne par les PME françaises.
              </p>
              <p className="text-lg text-muted-foreground">
                Notre approche combine l'efficacité opérationnelle avec une forte orientation technologique, permettant à nos clients de bénéficier d'un service logistique moderne et évolutif, adapté à leurs besoins spécifiques et à leur croissance.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              {/* Placeholder for about illustration */}
              <div className="aspect-[4/3] bg-gray-200">
                <img 
                  src="/placeholder.svg" 
                  alt="Entrepôt Speed E Log" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="bg-gray-50 py-16">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre Mission & Nos Valeurs</h2>
              <p className="text-lg text-muted-foreground">
                Nous construisons une entreprise qui va au-delà de la simple logistique, en créant un véritable partenariat avec nos clients.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Notre Mission</h3>
              </div>
              <p className="text-lg mb-4">
                <strong>Simplifier la logistique e-commerce pour les PME françaises</strong>, en leur permettant de se concentrer sur leur cœur de métier - le développement de leurs produits, le marketing et les ventes - pendant que nous nous occupons de toute la chaîne logistique avec professionnalisme et efficacité.
              </p>
              <p className="text-lg">
                Nous croyons qu'une logistique de qualité ne devrait pas être un luxe réservé aux grandes entreprises, mais un outil accessible pour aider toutes les PME e-commerce à croître sereinement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-opacity-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Founder */}
        <section className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Notre Équipe</h2>
            <div className="bg-gray-50 rounded-xl p-8 border">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Francesco Almanzo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Francesco Almanzo</h3>
              <p className="text-primary font-medium mb-4">Fondateur & Directeur</p>
              <p className="text-muted-foreground mb-4">
                Avec plus de 10 ans d'expérience dans la logistique et le e-commerce, Francesco a fondé Speed E Log avec une vision claire : créer un service logistique qui répond vraiment aux besoins des PME e-commerce françaises.
              </p>
              <div className="flex justify-center gap-4">
                {/* Social media links could be added here */}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 py-16">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Envie d'en savoir plus ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contactez-nous aujourd'hui pour discuter de vos besoins logistiques spécifiques et découvrir comment Speed E Log peut vous aider à développer votre activité e-commerce.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
