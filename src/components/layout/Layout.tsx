
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
  return <div className="flex flex-col min-h-screen">
      <Helmet>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0074E4" />
        <link rel="canonical" href="https://speedelog.fr" />
      </Helmet>

      {/* Gradient Background Container */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Background radial gradient - white only in center, reduced size */}
        <div className="absolute inset-0 bg-gradient-radial from-white via-white to-transparent dark:from-slate-900 dark:via-slate-900/90 dark:to-transparent scale-75"></div>
        
        {/* Vertical pattern: Left blue gradient with increased intensity */}
        <div className="absolute left-0 inset-y-0 w-1/2 bg-gradient-to-r from-speedelog-400/60 via-speedelog-400/40 to-transparent"></div>
        
        {/* Vertical pattern: Right green gradient with increased intensity */}
        <div className="absolute right-0 inset-y-0 w-1/2 bg-gradient-to-l from-green-500/50 via-green-500/30 to-transparent"></div>
        
        {/* Diagonal pattern: blue to white to green */}
        <div className="absolute h-full w-full bg-gradient-to-br from-speedelog-400/60 via-white/20 to-green-500/50"></div>
        
        {/* Diagonal pattern: green to white to blue */}
        <div className="absolute h-full w-full bg-gradient-to-tr from-green-500/40 via-white/10 to-speedelog-400/60"></div>
        
        {/* Horizontal pattern: blue top */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-speedelog-400/50 via-speedelog-400/40 to-transparent"></div>
        
        {/* Horizontal pattern: green bottom */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-green-500/50 via-green-500/40 to-transparent"></div>
        
        {/* Upper left blue blob with increased size and intensity */}
        <div className="absolute -top-20 -left-20 w-2/3 h-2/3 bg-speedelog-400/30 dark:bg-speedelog-700/40 rounded-full blur-3xl"></div>
        
        {/* Bottom right green blob with increased size and intensity */}
        <div className="absolute -bottom-20 -right-20 w-2/3 h-2/3 bg-green-500/40 dark:bg-green-700/40 rounded-full blur-3xl"></div>
        
        {/* Additional blue blob bottom left */}
        <div className="absolute -bottom-10 -left-10 w-1/2 h-1/2 bg-speedelog-400/30 dark:bg-speedelog-700/40 rounded-full blur-3xl"></div>
        
        {/* Additional green blob top right */}
        <div className="absolute -top-10 -right-10 w-1/2 h-1/2 bg-green-500/30 dark:bg-green-700/30 rounded-full blur-3xl"></div>
        
        {/* Central diagonal blob to enhance white separator effect */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/20 dark:bg-white/5 rounded-full blur-3xl rotate-45"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.02] bg-repeat mix-blend-overlay"></div>
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
