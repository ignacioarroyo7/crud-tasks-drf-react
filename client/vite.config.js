import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/static/', // Define el prefijo para los archivos estáticos
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Cambia a la URL de tu backend Django
        changeOrigin: true,
        secure: false, // Usualmente en desarrollo es `false` para evitar problemas con HTTPS
      },
    },
  },
})
