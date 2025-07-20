
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/Index";
import SuiviColis from "./pages/SuiviColis";
import Integrations from "./pages/Integrations";
import FaqPage from "./pages/FaqPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Pages autorisées selon le cahier des charges */}
          <Route path="/" element={<Index />} />
          <Route path="/suivi-colis" element={<SuiviColis />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/faq" element={<FaqPage />} />
          
          {/* Redirections des anciennes pages vers les pages autorisées */}
          <Route path="/services" element={<Navigate to="/" replace />} />
          <Route path="/technology" element={<Navigate to="/integrations" replace />} />
          <Route path="/technologie" element={<Navigate to="/integrations" replace />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/a-propos" element={<Navigate to="/" replace />} />
          <Route path="/contact" element={<Navigate to="/" replace />} />
          
          {/* Redirections des pages tarifaires */}
          <Route path="/pricing" element={<Navigate to="/" replace />} />
          <Route path="/tarifs" element={<Navigate to="/" replace />} />
          <Route path="/prix" element={<Navigate to="/" replace />} />
          
          {/* Blog - préparation pour HubSpot CMS */}
          <Route path="/blog" element={<Navigate to="/" replace />} />
          <Route path="/blog/*" element={<Navigate to="/" replace />} />
          
          {/* Pages légales - redirection vers homepage temporaire */}
          <Route path="/mentions-legales" element={<Navigate to="/" replace />} />
          <Route path="/politique-confidentialite" element={<Navigate to="/" replace />} />
          <Route path="/cgv" element={<Navigate to="/" replace />} />
          <Route path="/sitemap" element={<Navigate to="/" replace />} />
          <Route path="/plan-du-site" element={<Navigate to="/" replace />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Toaster />
      <Sonner />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
