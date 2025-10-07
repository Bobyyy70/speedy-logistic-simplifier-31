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
        manualChunks: {
          // Core React chunks
          'react-vendor': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          
          // UI Library chunks
          'radix-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
            '@radix-ui/react-popover',
          ],
          'form-libs': ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // Animation chunks (lazy loaded)
          'framer-motion': ['framer-motion'],
          
          // Chart and data visualization
          'charts': ['recharts'],
          
          // Utility libraries
          'utils': ['clsx', 'tailwind-merge', 'date-fns'],
          'icons': ['lucide-react'],
          
          // Map and specialized components
          'map-libs': ['simplex-noise'],
          
          // External integrations
          'external': ['@calcom/embed-react'],
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
    // Optimize dependencies
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'framer-motion',
        'lucide-react',
      ],
      exclude: [
        // Exclude heavy libraries that should be lazy loaded
        'recharts',
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
