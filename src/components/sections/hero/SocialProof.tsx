import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export function SocialProof() {
  return (
    <div 
      className="mt-6 flex items-center justify-center lg:justify-start space-x-3"
    >
      <div className="flex -space-x-2">
        <div className="hover-scale">
          <Avatar className="inline-block h-8 w-8 border-2 border-white">
            <AvatarImage alt="Logo HEFA Group - Partenaire logistique de confiance de Speed E-Log" className="p-1 object-cover" src="/lovable-uploads/44a63774-38e6-47c0-bddf-56c2d10f5e6c.png" srcSet="/optimized/44a63774-38e6-47c0-bddf-56c2d10f5e6c-64w.webp 1x, /optimized/44a63774-38e6-47c0-bddf-56c2d10f5e6c-128w.webp 2x" loading="lazy" decoding="async" />
            <AvatarFallback>HG</AvatarFallback>
          </Avatar>
        </div>
        <div className="hover-scale">
          <Avatar className="inline-block h-8 w-8 border-2 border-white">
            <AvatarImage alt="Logo THOMAS - Client e-commerce de Speed E-Log" className="p-1 object-cover" src="/lovable-uploads/95fcf84f-8ddc-4c7d-9f92-d3790f0586eb.png" srcSet="/optimized/95fcf84f-8ddc-4c7d-9f92-d3790f0586eb-64w.webp 1x, /optimized/95fcf84f-8ddc-4c7d-9f92-d3790f0586eb-128w.webp 2x" loading="lazy" decoding="async" />
            <AvatarFallback>TH</AvatarFallback>
          </Avatar>
        </div>
        <div className="hover-scale">
          <Avatar className="inline-block h-8 w-8 border-2 border-white">
            <AvatarImage alt="Logo Heatzy - Client e-commerce objets connectés de Speed E-Log" className="p-1 object-cover" src="/lovable-uploads/f35f65b6-a18b-454c-bc6c-0deebc8ed6e6.png" srcSet="/optimized/f35f65b6-a18b-454c-bc6c-0deebc8ed6e6-64w.webp 1x, /optimized/f35f65b6-a18b-454c-bc6c-0deebc8ed6e6-128w.webp 2x" loading="lazy" decoding="async" />
            <AvatarFallback>HZ</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <p 
        className="text-sm text-slate-600 font-medium"
      >
        Déjà <span className="font-bold text-slate-900">20+ PME</span> nous font confiance
      </p>
    </div>
  );
}
