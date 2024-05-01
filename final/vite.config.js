import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
server: {
       host: 'localhost', 
     hmr: {host: 'localhost'}, 
 }, 
  plugins: [
    laravel({
      input: 'resources/js/app.tsx',
    }),
    react(),
  ],
}); 