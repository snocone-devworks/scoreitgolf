import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('recharts')) {
            return 'vendor_recharts';
          }

          if (id.includes('supabase')) {
            return 'vendor_supabase'
          }

          if (id.includes('react-icons')) {
            return 'vendor_react_icons';
          }

          return 'vendor';
        }
      }
    }
  }
})
