import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import analyzer from "rollup-plugin-analyzer";
import terser from "@rollup/plugin-terser";
import { imagetools } from 'vite-imagetools';
import fs from 'fs/promises';
// @ts-ignore - critters types not resolved in config context
import Critters from 'critters';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    imagetools(),
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && (() => {
      let outDir = 'dist';
      return {
        name: 'vite-critters-inline',
        apply: (config: any, env: any) => env.command === 'build',
        configResolved(resolved: any) {
          outDir = resolved.build.outDir || 'dist';
        },
        async writeBundle() {
          try {
            const indexPath = path.resolve(process.cwd(), outDir, 'index.html');
            const html = await fs.readFile(indexPath, 'utf8');
            const critters = new Critters({
              path: path.resolve(process.cwd(), outDir),
              logLevel: 'silent',
              preload: 'swap',
              pruneSource: false,
              compress: true,
              inlineFonts: false,
              preloadFonts: true,
              fonts: 'swap'
            });
            const processed = await critters.process(html);
            await fs.writeFile(indexPath, processed, 'utf8');
          } catch (e: any) {
            console.warn('[critters] skipping inline CSS:', e?.message || e);
          }
        }
      };
    })(),
    mode === 'production' && analyzer({ 
      summaryOnly: true,
      limit: 10,
      showExports: true
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      plugins: [
        mode === 'production' && terser({
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log'],
          },
          format: {
            comments: false,
          },
        }),
      ].filter(Boolean),
      output: {
        manualChunks: (id) => {
          // Core React - always needed
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/react-router-dom')) {
            return 'react-router';
          }
          
          // Heavy libraries - separate chunks
          if (id.includes('node_modules/framer-motion')) return 'framer-motion';
          if (id.includes('node_modules/recharts')) return 'charts';
          if (id.includes('node_modules/dotted-map') || id.includes('node_modules/simplex-noise')) {
            return 'map-libs';
          }
          
          // UI components - group by usage pattern
          if (id.includes('@radix-ui/')) return 'radix-ui';
          if (id.includes('react-hook-form') || id.includes('@hookform/') || id.includes('zod')) {
            return 'form-libs';
          }
          
          // Icons and utilities - lightweight
          if (id.includes('lucide-react')) return 'icons';
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('date-fns')) {
            return 'utils';
          }
          
          // External services
          if (id.includes('@calcom/embed-react')) return 'external';
          
          // Split large page components
          if (id.includes('src/pages/')) {
            const pageName = id.split('/pages/')[1].split('.')[0].toLowerCase();
            return `page-${pageName}`;
          }
          
          // Split sections for better lazy loading
          if (id.includes('src/components/sections/')) {
            const sectionName = id.split('/sections/')[1].split('.')[0].toLowerCase();
            return `section-${sectionName}`;
          }
          
          // Split UI components by category
          if (id.includes('src/components/ui/') && !id.includes('node_modules')) {
            return 'ui-components';
          }
          
          // Split performance components
          if (id.includes('src/components/performance/')) {
            return 'performance-utils';
          }
          
          // Group remaining node_modules by size/usage
          if (id.includes('node_modules/')) {
            // Group smaller utilities together
            if (id.includes('class-variance-authority') || 
                id.includes('next-themes') || 
                id.includes('sonner') ||
                id.includes('input-otp')) {
              return 'small-vendor';
            }
            return 'vendor';
          }
        },
        // Optimize chunk naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? 
            chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '') : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `img/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Enable source maps in development only
    sourcemap: mode === 'development',
    // Optimize dependencies - minimize eager loading
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'clsx',
        'tailwind-merge',
      ],
      exclude: [
        // Exclude all heavy libraries for lazy loading
        'framer-motion',
        'dotted-map',
        'recharts',
        'simplex-noise',
        '@calcom/embed-react',
        'lucide-react', // Icons loaded on demand
      ],
    },
  },
  // CSS optimization
  css: {
    devSourcemap: mode === 'development',
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
}));
