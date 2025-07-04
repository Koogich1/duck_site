import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/components',
      '@ui': '/src/components/ui',
      '@features': '/src/features',
      '@shared': '/src/shared',
    },
  },
});
