import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/tz/' : '/',
  resolve: {
    alias: {
      '@components': '/src/components',
      '@ui': '/src/components/ui',
      '@features': '/src/features',
      '@shared': '/src/shared',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
