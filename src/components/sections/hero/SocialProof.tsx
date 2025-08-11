import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// Optimized social proof logos (24px, WebP with PNG fallback)
// Using vite-imagetools to serve tiny, modern formats matching display size
// 44a63774..., 95fcf84f..., f35f65b6...
// WebP srcset (1x, 2x)
// @ts-ignore - imagetools virtual modules
import hefaWebp from "@/assets/brands/44a63774.png?w=24;48&format=webp&as=srcset";
// @ts-ignore - imagetools virtual modules
import hefaPng from "@/assets/brands/44a63774.png?w=24;48&format=png&as=srcset";
// @ts-ignore - imagetools virtual modules
import thomasWebp from "@/assets/brands/95fcf84f.png?w=24;48&format=webp&as=srcset";
// @ts-ignore - imagetools virtual modules
import thomasPng from "@/assets/brands/95fcf84f.png?w=24;48&format=png&as=srcset";
// @ts-ignore - imagetools virtual modules
import heatzyWebp from "@/assets/brands/f35f65b6.png?w=24;48&format=webp&as=srcset";
// @ts-ignore - imagetools virtual modules
import heatzyPng from "@/assets/brands/f35f65b6.png?w=24;48&format=png&as=srcset";

export function SocialProof() {
  return (
    <div 
      className="mt-6 flex items-center justify-center lg:justify-start space-x-3"
    >
      <div className="flex -space-x-2">
        <div className="hover-scale">
          <Avatar className="inline-block h-8 w-8 border-2 border-white">
            <picture>
              <source type="image/webp" srcSet={hefaWebp as unknown as string} sizes="24px" />
              <img
                alt="Logo HEFA Group - Partenaire logistique de confiance de Speed E-Log"
                width={24}
                height={24}
                className="p-1 object-cover"
                srcSet={hefaPng as unknown as string}
                sizes="24px"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <AvatarFallback>HG</AvatarFallback>
          </Avatar>
        </div>
        <div className="hover-scale">
          <Avatar className="inline-block h-8 w-8 border-2 border-white">
            <picture>
              <source type="image/webp" srcSet={thomasWebp as unknown as string} sizes="24px" />
              <img
                alt="Logo THOMAS - Client e-commerce de Speed E-Log"
                width={24}
                height={24}
                className="p-1 object-cover"
                srcSet={thomasPng as unknown as string}
                sizes="24px"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <AvatarFallback>TH</AvatarFallback>
          </Avatar>
        </div>
        <div className="hover-scale">
          <Avatar className="inline-block h-8 w-8 border-2 border-white">
            <picture>
              <source type="image/webp" srcSet={heatzyWebp as unknown as string} sizes="24px" />
              <img
                alt="Logo Heatzy - Client e-commerce objets connectés de Speed E-Log"
                width={24}
                height={24}
                className="p-1 object-cover"
                srcSet={heatzyPng as unknown as string}
                sizes="24px"
                loading="lazy"
                decoding="async"
              />
            </picture>
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

