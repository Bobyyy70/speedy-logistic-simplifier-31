
import React from "react";

// Image héro optimisée pour LCP avec priorité haute
export function OptimizedHeroImage() {
  return (
    <div className="relative">
      {/* Image principale optimisée pour LCP */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
        <img
          src="/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png"
          alt="Entrepôt logistique moderne Speed E-Log avec zones de stockage automatisées et préparation de commandes e-commerce"
          className="w-full h-auto"
          width="600"
          height="400"
          loading="eager" // Critique pour LCP
          decoding="async"
          fetchPriority="high" // Priorité maximale pour LCP
          style={{
            aspectRatio: '3/2',
            objectFit: 'cover'
          }}
        />
        
        {/* Overlay subtil sans impact sur le LCP */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        
        {/* Badge de certification sans images supplémentaires */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-slate-900">Certifié ISO 9001</span>
          </div>
        </div>
      </div>

      {/* Stats flottants optimisés */}
      <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#2F68F3]">24h</div>
          <div className="text-xs text-slate-600">Prise en charge</div>
        </div>
      </div>
    </div>
  );
}
