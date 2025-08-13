
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { CriticalResourcePreloader } from './components/performance/CriticalResourcePreloader'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <CriticalResourcePreloader />
    <App />
  </HelmetProvider>
);
