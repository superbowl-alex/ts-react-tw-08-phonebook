import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ts-react-tw-08-phonebook', // Базовый путь для обработки маршрутов
  plugins: [react()],
  define: {
    global:'window',
  },
})
