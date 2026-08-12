import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Task 17: Asset fingerprinting for SRI/cache-busting
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Content-hash based file names enable long-term caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Task 21: Disable source maps in production (prevents code exposure)
    sourcemap: false,
    // Task 7: Minify for production hardening (use oxc — Vite 8 default)
    minify: 'oxc',
    // Split CSS for better caching
    cssCodeSplit: true,
    // Warn on large chunks
    chunkSizeWarningLimit: 500,
  },
})
