import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['@splinetool/react-spline', '@splinetool/runtime']
  },
  
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
});
