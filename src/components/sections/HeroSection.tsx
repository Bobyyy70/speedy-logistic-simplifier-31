
import React, { useRef, useEffect, useState } from "react";
import { IdleHydrator } from "@/components/performance/IdleHydrator";
import { StaticHeroContent } from "@/components/performance/StaticHeroContent";
import { StaticWorldMap } from "@/components/performance/StaticWorldMap";

// Defer all heavy components to minimize main-thread work
const DeferredHeroContent = React.lazy(() => 
  import("@/components/sections/hero/HeroContent").then(m => ({ default: m.HeroContent }))
);

const DeferredWorldMapBackground = React.lazy(() => 
  import("@/components/sections/hero/WorldMapBackground").then(m => ({ default: m.WorldMapBackground }))
);

const DeferredHeroCard = React.lazy(() => 
  import("@/components/sections/hero/HeroCard").then(m => ({ default: m.HeroCard }))
);

const DeferredQuoteFormModal = React.lazy(() => 
  import("@/components/contact/QuoteFormModal").then(m => ({ default: m.QuoteFormModal }))
);

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [enhancementsLoaded, setEnhancementsLoaded] = useState(false);

  // Minimal JavaScript on main thread - just basic state management
  const handleDevisClick = () => {
    setShowModal(true);
  };

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-screen min-h-[100vh] overflow-hidden"
    >
      {/* Static world map - no JS execution, pure CSS/SVG */}
      <StaticWorldMap />
      
      {/* Critical content - static HTML/CSS, minimal JS */}
      <div className="container mx-auto relative z-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] gap-6 lg:gap-12 items-center">
          <StaticHeroContent onDevisClick={handleDevisClick} />
          
          {/* Static placeholder for hero card */}
          <div className="hidden lg:flex relative">
            <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="aspect-video bg-slate-100 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-slate-400 text-sm">Plateforme logistique</div>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Logistique moderne</h3>
              <p className="text-sm text-slate-600">Interface intuitive pour gérer vos expéditions en temps réel.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Defer all heavy components until after critical rendering */}
      <IdleHydrator timeout={1500}>
        <EnhancedHeroSection 
          showModal={showModal} 
          onCloseModal={() => setShowModal(false)}
          onEnhancementsLoaded={() => setEnhancementsLoaded(true)}
        />
      </IdleHydrator>
    </section>
  );
}

// Separate component for enhanced features - reduces initial bundle size
function EnhancedHeroSection({ 
  showModal, 
  onCloseModal,
  onEnhancementsLoaded 
}: { 
  showModal: boolean;
  onCloseModal: () => void;
  onEnhancementsLoaded: () => void;
}) {
  useEffect(() => {
    onEnhancementsLoaded();
  }, [onEnhancementsLoaded]);

  return (
    <>
      {/* Replace static content with enhanced versions when ready */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <React.Suspense fallback={null}>
          <DeferredWorldMapBackground />
        </React.Suspense>
      </div>
      
      <div className="absolute inset-0 z-40">
        <div className="container mx-auto relative h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] gap-6 lg:gap-12 items-center w-full">
            <div className="pointer-events-auto">
              <React.Suspense fallback={null}>
                <DeferredHeroContent />
              </React.Suspense>
            </div>
            
            <div className="hidden lg:block pointer-events-auto">
              <React.Suspense fallback={null}>
                <DeferredHeroCard />
              </React.Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Modal - only load when needed */}
      {showModal && (
        <React.Suspense fallback={null}>
          <DeferredQuoteFormModal isOpen={showModal} onClose={onCloseModal} />
        </React.Suspense>
      )}
    </>
  );
}
