import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/* Change port 
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000
  }
})
"scripts": {
    "serve": "vite preview --port 6000"
},
*/


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    host: true
  }
})
