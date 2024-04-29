import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/Components',
      assets: '/src/assets',
      contexts: '/src/contexts',
      shared: '/src/shared',
      utilities: '/src/utilities',
      styles: '/src/styles',
      projects: '/src/Components/Projects',
    },
  },
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.avi'],
});
