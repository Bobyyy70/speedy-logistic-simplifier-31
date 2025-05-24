
import React from "react";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { Ship } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 text-blue-600">
              <Ship className="w-full h-full" />
            </div>
            <span className="text-xl font-bold text-slate-900">Speed E-Log</span>
          </Link>
          
          {/* Navigation centrée */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link 
              to="/services" 
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/technology" 
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Technologie
            </Link>
            <Link 
              to="/about" 
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              À propos
            </Link>
            <Link 
              to="/faq" 
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              FAQ
            </Link>
          </nav>
          
          {/* CTA Button */}
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Obtenir un devis
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
