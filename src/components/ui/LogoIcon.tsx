import React from "react";
import { cn } from "@/lib/utils";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
export const LogoIcon: React.FC<{
  className?: string;
  size?: "sm" | "md" | "lg";
}> = ({
  className = "",
  size = "md"
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };
  const dims = { sm: { w: 32, h: 32 }, md: { w: 48, h: 48 }, lg: { w: 64, h: 64 } };
  const logoPath = "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png";
  return (
    <ResponsiveImage
      src={logoPath}
      alt="Speed E-Log - Expert logistique e-commerce France"
      width={dims[size].w}
      height={dims[size].h}
      className={cn(sizeClasses[size], "object-contain", className)}
      sizes={`${dims[size].w}px`}
      priority={size === 'sm'}
    />
  );
};
export const LogoIconWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  // Utilisation du logo fourni par l'utilisateur
  const logoPath = "/lovable-uploads/5c1b4538-57b0-4f38-af9e-dda22195de74.png";
  return <div className={cn("flex items-center justify-center h-full", className)}>
    <ResponsiveImage
      src={logoPath}
      alt="Speed E-Log - Solutions logistiques pour e-commerce"
      width={520}
      height={80}
      sizes="(max-width: 640px) 240px, 520px"
      priority={false}
      className="h-full w-auto max-h-[80px] object-contain"
    />
  </div>;
};
export const HomeLogoWithText: React.FC<{
  className?: string;
}> = ({
  className = ""
}) => {
  const logoPath = "/lovable-uploads/83cc9529-aa94-4f8a-851d-02ea52cc3c71.png";
  return <div className={cn("flex items-center", className)}>
    
  </div>;
};
export default LogoIcon;