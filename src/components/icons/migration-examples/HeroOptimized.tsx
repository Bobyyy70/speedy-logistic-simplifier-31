/**
 * Exemple de migration pour la section Hero
 * AVANT vs APRÈS pour démontrer l'optimisation
 */

import React from "react";
import { OptimizedIcon } from "@/components/ui/OptimizedIcon";
import { useCriticalIcons } from "@/hooks/use-performance-icons";

// ❌ AVANT - Import direct (impact performance)
// import { ArrowRight, Package, CheckCircle } from "lucide-react";

// ✅ APRÈS - Optimisé avec chargement intelligent
export const HeroOptimized = () => {
  const { criticalIconsLoaded } = useCriticalIcons();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Votre solution logistique</h1>
        <p>La logistique sans les tracas</p>
        
        {/* Icône critique - charge immédiatement */}
        <button className="cta-button">
          Obtenir un devis
          <OptimizedIcon 
            name="ArrowRight" 
            priority 
            className="ml-2 h-5 w-5" 
          />
        </button>
        
        {/* Icônes importantes - chargement optimisé */}
        <div className="features-grid">
          <div className="feature">
            <OptimizedIcon 
              name="Package" 
              className="h-8 w-8 text-blue-600" 
              size={32}
            />
            <span>Stockage sécurisé</span>
          </div>
          
          <div className="feature">
            <OptimizedIcon 
              name="CheckCircle" 
              className="h-8 w-8 text-green-600"
              size={32}
            />
            <span>Livraison garantie</span>
          </div>
        </div>
        
        {/* Performance indicator */}
        {process.env.NODE_ENV === 'development' && (
          <div className="debug-info">
            Critical icons loaded: {criticalIconsLoaded ? '✓' : '⏳'}
          </div>
        )}
      </div>
    </section>
  );
};