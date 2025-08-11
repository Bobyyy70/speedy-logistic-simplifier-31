
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { IdleHydrator } from "@/components/performance/IdleHydrator";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LegalMentions = lazy(() => import("./pages/LegalMentions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Technology = lazy(() => import("./pages/Technology"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div aria-busy="true" className="sr-only">Chargement…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/technologie" element={<Navigate to="/technology" replace />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
      <IdleHydrator>
        <Toaster />
        <Sonner />
      </IdleHydrator>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
