
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { IdleHydrator } from "@/components/performance/IdleHydrator";

import Index from "./pages/Index";
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
const Calculator = lazy(() => import("./pages/Calculator"));
const Integrations = lazy(() => import("./pages/Integrations"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));

// Service Detail Pages
const FulfillmentEcommerce = lazy(() => import("./pages/services/FulfillmentEcommerce"));
const WarehouseManagement = lazy(() => import("./pages/services/WarehouseManagement"));
const TransportDistribution = lazy(() => import("./pages/services/TransportDistribution"));
const FBAPrep = lazy(() => import("./pages/services/FBAPrep"));
const CustomPackaging = lazy(() => import("./pages/services/CustomPackaging"));
const ReturnsManagement = lazy(() => import("./pages/services/ReturnsManagement"));
const B2BLogistics = lazy(() => import("./pages/services/B2BLogistics"));
const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div aria-busy="true" className="sr-only">Chargement…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/fulfillment-ecommerce" element={<FulfillmentEcommerce />} />
            <Route path="/services/warehouse-management" element={<WarehouseManagement />} />
            <Route path="/services/transport-distribution" element={<TransportDistribution />} />
            <Route path="/services/fba-prep" element={<FBAPrep />} />
            <Route path="/services/custom-packaging" element={<CustomPackaging />} />
            <Route path="/services/returns-management" element={<ReturnsManagement />} />
            <Route path="/services/b2b-logistics" element={<B2BLogistics />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/technologie" element={<Navigate to="/technology" replace />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/calculateur" element={<Navigate to="/calculator" replace />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
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
