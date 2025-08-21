
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Version optimisée du contenu héro sans animations coûteuses pour améliorer LCP
export function OptimizedHeroContent() {
  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Titre principal optimisé pour LCP - pas d'animation au chargement initial */}
      <h1 
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-900"
        style={{ 
          // Optimisation LCP : évite le layout shift
          lineHeight: '1.1',
          letterSpacing: '-0.02em' 
        }}
      >
        La logistique{" "}
        <span className="text-[#2F68F3] relative">
          sans les tracas
        </span>
      </h1>

      {/* Sous-titre optimisé */}
      <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl leading-relaxed">
        Externalisez votre logistique e-commerce et concentrez-vous sur votre croissance. 
        Solution 3PL spécialisée pour PME françaises.
      </p>

      {/* CTA optimisé pour la conversion */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button 
          variant="blue" 
          size="lg" 
          className="shadow-lg hover:shadow-xl transition-shadow duration-200 text-base lg:text-lg px-8 py-4"
          asChild
        >
          <Link to="/contact">
            Obtenir un devis gratuit <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="text-base lg:text-lg px-8 py-4"
          asChild
        >
          <Link to="/services">
            Découvrir nos services
          </Link>
        </Button>
      </div>

      {/* Preuve sociale optimisée sans images lourdes */}
      <div className="pt-6 lg:pt-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              {/* Avatars simplifiés pour éviter les requêtes d'images supplémentaires */}
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">20+ PME</span> nous font confiance
            </span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center space-x-6 text-sm text-slate-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>99.8% de livraisons réussies</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>180+ pays desservis</span>
          </div>
        </div>
      </div>
    </div>
  );
}
