
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="theme-color" content="#0074E4" />
        <link rel="canonical" href="https://speedelog.fr" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>

      {/* Gradient Background Container with alternating colors */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Background radial gradient - white only in center, reduced size */}
        <div className="absolute inset-0 bg-gradient-radial from-white via-white to-transparent dark:from-slate-900 dark:via-slate-900/90 dark:to-transparent scale-75"></div>
        
        {/* Base layer gradient from bottom to top (dark to light) */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-white/70 to-white"></div>
        
        {/* Alternating color sections */}
        <div className="absolute top-0 inset-x-0 h-1/6 bg-green-500/20"></div>
        <div className="absolute top-1/6 inset-x-0 h-1/6 bg-blue-500/20"></div>
        <div className="absolute top-2/6 inset-x-0 h-1/6 bg-green-500/20"></div>
        <div className="absolute top-3/6 inset-x-0 h-1/6 bg-blue-500/20"></div>
        <div className="absolute top-4/6 inset-x-0 h-1/6 bg-green-500/20"></div>
        <div className="absolute top-5/6 inset-x-0 h-1/6 bg-blue-500/30"></div>
        
        {/* Diagonal overlaps between sections */}
        <div className="absolute top-1/6 -mt-16 left-0 right-0 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
        <div className="absolute top-2/6 -mt-16 left-0 right-0 h-32 bg-gradient-to-bl from-blue-500/20 to-green-500/20"></div>
        <div className="absolute top-3/6 -mt-16 left-0 right-0 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
        <div className="absolute top-4/6 -mt-16 left-0 right-0 h-32 bg-gradient-to-bl from-blue-500/20 to-green-500/20"></div>
        <div className="absolute top-5/6 -mt-16 left-0 right-0 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/30"></div>
        
        {/* Left blue blob with increased size and intensity */}
        <div className="absolute left-0 top-1/6 w-2/3 h-2/3 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        {/* Right green blob with increased size and intensity */}
        <div className="absolute right-0 bottom-1/6 w-2/3 h-2/3 bg-green-500/20 rounded-full blur-3xl"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.02] bg-repeat mix-blend-overlay"></div>
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
