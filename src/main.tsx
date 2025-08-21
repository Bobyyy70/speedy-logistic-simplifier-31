
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { CriticalResourcePreloader } from './components/performance/CriticalResourcePreloader'
import { initializeSecurityHeaders } from './lib/security-headers'
import App from './App.tsx'
import './index.css'

// Initialize security headers
initializeSecurityHeaders();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <CriticalResourcePreloader />
    <App />
  </HelmetProvider>
);
