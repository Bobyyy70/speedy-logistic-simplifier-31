
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-sky-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat"></div>
      <div className="section-container pt-32 pb-16 md:pt-40 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              La logistique E-commerce, <span className="text-primary">sans les tracas</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. Solution spécialisée pour PME e-commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact">
                <Button size="lg">
                  Obtenir un devis personnalisé <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
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
                    alt="Entrepôt Speed E-Log" 
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
