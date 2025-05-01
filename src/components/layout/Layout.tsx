
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  return <div className="flex flex-col min-h-screen full-page-gradient">
      <Helmet>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="theme-color" content="#0074E4" />
        <link rel="canonical" href="https://speedelog.fr" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>

      {/* Gradient Background Container */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Background radial gradient - white only in center, reduced size */}
        <div className="absolute inset-0 bg-gradient-radial from-white via-white to-transparent dark:from-slate-900 dark:via-slate-900/90 dark:to-transparent scale-75"></div>
        
        {/* Vertical pattern: Left blue gradient with reduced intensity */}
        <div className="absolute left-0 inset-y-0 w-1/2 bg-gradient-to-r from-speedelog-400/40 via-speedelog-400/20 to-transparent"></div>
        
        {/* Vertical pattern: Right green gradient with reduced intensity */}
        <div className="absolute right-0 inset-y-0 w-1/2 bg-gradient-to-l from-green-500/30 via-green-500/20 to-transparent"></div>
        
        {/* Diagonal pattern: blue to white to green - lighter */}
        <div className="absolute h-full w-full bg-gradient-to-br from-speedelog-400/40 via-white/30 to-green-500/30"></div>
        
        {/* Diagonal pattern: green to white to blue - lighter */}
        <div className="absolute h-full w-full bg-gradient-to-tr from-green-500/30 via-white/20 to-speedelog-400/40"></div>
        
        {/* Horizontal pattern: blue top - lighter */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-speedelog-400/30 via-speedelog-400/20 to-transparent"></div>
        
        {/* Horizontal pattern: green bottom - lighter */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-green-500/30 via-green-500/20 to-transparent"></div>
        
        {/* Upper left blue blob with reduced intensity */}
        <div className="absolute -top-20 -left-20 w-2/3 h-2/3 bg-speedelog-400/20 dark:bg-speedelog-700/30 rounded-full blur-3xl"></div>
        
        {/* Bottom right green blob with reduced intensity */}
        <div className="absolute -bottom-20 -right-20 w-2/3 h-2/3 bg-green-500/20 dark:bg-green-700/30 rounded-full blur-3xl"></div>
        
        {/* Additional blue blob bottom left - lighter */}
        <div className="absolute -bottom-10 -left-10 w-1/2 h-1/2 bg-speedelog-400/20 dark:bg-speedelog-700/30 rounded-full blur-3xl"></div>
        
        {/* Additional green blob top right - lighter */}
        <div className="absolute -top-10 -right-10 w-1/2 h-1/2 bg-green-500/20 dark:bg-green-700/20 rounded-full blur-3xl"></div>
        
        {/* Central diagonal blob to enhance white separator effect - lighter */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/30 dark:bg-white/10 rounded-full blur-3xl rotate-45"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.015] bg-repeat mix-blend-overlay"></div>
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
