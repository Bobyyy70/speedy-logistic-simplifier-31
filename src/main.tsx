
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { CriticalResourcePreloader } from './components/performance/CriticalResourcePreloader'
import { TTIOptimizer } from './components/performance/TTIOptimizer'
import { MainThreadOptimizer } from './components/performance/MainThreadOptimizer'
import { initializeSecurityHeaders } from './lib/security-headers'
import App from './App.tsx'
import './index.css'

// Initialize security headers
initializeSecurityHeaders();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <CriticalResourcePreloader />
    <TTIOptimizer />
    <MainThreadOptimizer />
    <App />
  </HelmetProvider>
);
