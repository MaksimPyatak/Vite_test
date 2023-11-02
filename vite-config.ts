import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // ... other Vite configuration options

  build: {
    // ... other build options
    rollupOptions: {
      external: ['backbone'], // Prevent Backbone from being bundled
      input: {
        main: resolve(__dirname, 'index.html'),
        auth: resolve(__dirname, 'nested/Auth.html'),
        match: resolve(__dirname, 'nested/match.html'),
      },

    },
  },
});