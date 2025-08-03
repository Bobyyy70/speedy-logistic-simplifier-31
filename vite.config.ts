import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import analyzer from "rollup-plugin-analyzer";
import terser from "@rollup/plugin-terser";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
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
    target: 'es2015',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      plugins: [
        mode === 'production' && terser({
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.warn'],
            passes: 2,
            unsafe_arrows: true,
            unsafe_methods: true,
            unsafe_proto: true,
          },
          mangle: {
            safari10: true,
          },
          format: {
            comments: false,
            ecma: 2020,
          },
        }),
      ].filter(Boolean),
      output: {
        manualChunks: (id) => {
          // Core React - Priorité haute
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-core';
          }
          
          // Router - Chunk séparé pour lazy loading
          if (id.includes('react-router')) {
            return 'router';
          }
          
          // Animations lourdes - Lazy loading
          if (id.includes('framer-motion')) {
            return 'animations';
          }
          
          // UI Libraries - Groupées par fréquence d'utilisation
          if (id.includes('@radix-ui')) {
            return 'ui-radix';
          }
          
          // Form libraries
          if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
            return 'forms';
          }
          
          // Charts et visualisation - Lazy loading
          if (id.includes('recharts') || id.includes('dotted-map') || id.includes('simplex-noise')) {
            return 'charts-viz';
          }
          
          // Utilities fréquemment utilisées
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('date-fns')) {
            return 'utils';
          }
          
          // Icons
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          
          // External integrations - Lazy loading
          if (id.includes('@calcom') || id.includes('@supabase')) {
            return 'integrations';
          }
          
          // Helmet pour SEO - Critical
          if (id.includes('react-helmet')) {
            return 'seo';
          }
          
          // Node modules vendor
          if (id.includes('node_modules')) {
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
        'dotted-map',
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
