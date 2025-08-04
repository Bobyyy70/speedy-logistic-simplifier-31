
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { PerformanceOptimizer } from "./components/performance/PerformanceOptimizer";
import PerformanceMonitor from "./components/performance/PerformanceMonitor";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FaqPage from "./pages/FaqPage";
import NotFound from "./pages/NotFound";
import LegalMentions from "./pages/LegalMentions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfService from "./pages/TermsOfService";
import Technology from "./pages/Technology";
import Integrations from "./pages/Integrations";
import Sitemap from "./pages/Sitemap";
import TestAttractiveForm from "./pages/TestAttractiveForm";
import SuiviColis from "./pages/SuiviColis";

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      {/* Optimisations de performance globales */}
      <PerformanceOptimizer />
      
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technologie" element={<Navigate to="/technology" replace />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/suivi-colis" element={<SuiviColis />} />
          {/* Redirection of all pricing routes to contact page */}
          <Route path="/pricing" element={<Navigate to="/contact" replace />} />
          <Route path="/tarifs" element={<Navigate to="/contact" replace />} />
          <Route path="/prix" element={<Navigate to="/contact" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/a-propos" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/plan-du-site" element={<Navigate to="/sitemap" replace />} />
          <Route path="/mentions-legales" element={<LegalMentions />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/politique-cookies" element={<CookiePolicy />} />
          <Route path="/cgv" element={<TermsOfService />} />
          {/* Route de test pour le nouveau formulaire attractif */}
          <Route path="/test-form" element={<TestAttractiveForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Toaster />
      <Sonner />
      <PerformanceMonitor />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
