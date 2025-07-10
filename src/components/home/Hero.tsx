
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-sky-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat"></div>
      <div className="section-container pt-20 pb-12 md:pt-32 lg:pt-40 md:pb-16 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2 md:px-0">
              La logistique E-commerce, <span className="text-primary">sans les tracas</span>.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl px-2 md:px-0">
              Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. Solution spécialisée pour PME e-commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 px-2 md:px-0">
              <Button 
                variant="blue" 
                size="lg" 
                className="shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 rounded-full md:size-2xl min-h-[48px] text-sm md:text-base"
                asChild
              >
                <Link to="/contact">
                  Obtenir un devis personnalisé <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link to="/services">
                <Button variant="outline" size="lg" className="min-h-[48px] text-sm md:text-base">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
            <div className="pt-4">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {/* Placeholder for client logos or staff photos */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full bg-gray-200 border-2 border-white"></div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Déjà <span className="font-medium text-foreground">20+ PME</span> nous font confiance
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white shadow-xl rounded-lg p-6">
                <div className="aspect-[4/3] bg-gray-100 rounded-md mb-4 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Entrepôt moderne Speed E-Log équipé pour la logistique e-commerce avec zones de stockage et préparation de commandes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Une logistique moderne et efficace</h3>
                <p className="text-muted-foreground">
                  Notre infrastructure technologique évolue constamment pour vous offrir le meilleur service possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
