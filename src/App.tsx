
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Layout } from "./components/layout/Layout";
import { AuthPage } from "./components/auth/AuthPage";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FaqPage from "./pages/FaqPage";
import NotFound from "./pages/NotFound";
import LegalMentions from "./pages/LegalMentions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Admin from "./pages/Admin";
import Technology from "./pages/Technology";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Auth route outside of Layout */}
            <Route path="/auth" element={<AuthPage />} />
            
            {/* All other routes use Layout */}
            <Route path="/*" element={
              <Layout>
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
                  <Route path="/mentions-legales" element={<LegalMentions />} />
                  <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
                  <Route path="/cgv" element={<TermsOfService />} />
                  <Route path="/admin" element={
                    <ProtectedRoute requireAdmin>
                      <Admin />
                    </ProtectedRoute>
                  } />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            } />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
