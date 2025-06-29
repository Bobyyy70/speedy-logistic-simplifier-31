
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { UserMenu } from "@/components/layout/UserMenu";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Technologie", href: "/technology" },
    { name: "À Propos", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <LogoIcon className="h-8 w-8" />
            <span className="font-bold text-xl">Speed E-Log</span>
          </Link>

          {/* Desktop Navigation - Centré */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="relative flex items-center space-x-8 bg-white/90 border border-slate-200 backdrop-blur-xl py-2 px-6 rounded-full shadow-md">
              {navigation.map((item) => {
                const isCurrentActive = isActive(item.href);
                return (
                  <div key={item.name} className="relative">
                    <Link
                      to={item.href}
                      className={`relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                        isCurrentActive
                          ? "text-slate-900 bg-blue-50"
                          : "text-slate-500 hover:text-[#F3BA2F]"
                      }`}
                    >
                      {item.name}
                      {isCurrentActive && (
                        <>
                          <div className="absolute inset-0 w-full bg-[#2F68F3]/10 rounded-full -z-10" />
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#2F68F3] rounded-t-full">
                            <div className="absolute w-12 h-6 bg-[#2F68F3]/60 rounded-full blur-md -top-2 -left-2" />
                            <div className="absolute w-8 h-6 bg-[#2F68F3]/60 rounded-full blur-md -top-1" />
                            <div className="absolute w-4 h-4 bg-[#2F68F3]/60 rounded-full blur-sm top-0 left-2" />
                          </div>
                        </>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <UserMenu />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="px-3 py-2 border-t">
                <UserMenu />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
