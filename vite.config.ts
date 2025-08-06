import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    sourcemap: true, // ✅ Enables .map files in production
  },
  // Optional: Enable source maps in dev explicitly
  esbuild: {
    sourcemap: true,
  },
});
