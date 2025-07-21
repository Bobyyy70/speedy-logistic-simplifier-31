
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { UserMenu } from "@/components/layout/UserMenu";
import { Menu, X } from "lucide-react";
import { useMobileOptimization } from "@/hooks/use-mobile-optimization";

export function MobileOptimizedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isMobile, getMobileSpacing } = useMobileOptimization();

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
        <div className={cn("flex items-center justify-between", isMobile ? "h-16" : "h-14 md:h-16")}>
          {/* Logo */}
          <Link to="/" className={cn("flex items-center space-x-2", isMobile ? "min-h-[48px]" : "")}>
            <LogoIcon className={cn(isMobile ? "h-8 w-8" : "h-6 w-6 md:h-8 md:w-8")} />
            <span className={cn("font-bold", isMobile ? "text-xl" : "text-lg md:text-xl")}>Speed E-Log</span>
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
                      className={cn(
                        "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 min-h-[40px] flex items-center",
                        isCurrentActive
                          ? "text-slate-900 bg-blue-50"
                          : "text-slate-500 hover:text-[#F3BA2F]"
                      )}
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

          {/* Mobile menu button - Enhanced touch target */}
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "md:hidden touch-manipulation",
              isMobile ? "min-h-[48px] min-w-[48px] p-3" : "min-h-[44px] min-w-[44px] p-2"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation - Enhanced spacing and touch targets */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={cn(
              "border-t bg-white/95 backdrop-blur-sm",
              getMobileSpacing("px-4 pt-4 pb-4 space-y-2")
            )}>
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-4 text-base font-medium rounded-lg transition-colors flex items-center touch-manipulation",
                      isMobile ? "min-h-[48px]" : "min-h-[44px]",
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:bg-gray-50"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className={cn("border-t mt-4 pt-4", getMobileSpacing("px-4 py-3"))}>
                <UserMenu />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
