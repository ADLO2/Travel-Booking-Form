import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',           // expose to external traffic (required for ngrok)
    port: 5173,
    allowedHosts: ['all'],     // explicitly allow all hosts (required in Vite 5)
    hmr: {
      protocol: 'wss',         // ngrok HTTPS tunnels require WSS
      host: '1ee8-118-69-30-182.ngrok-free.app', // same here
      clientPort: 443
    }
  }
})
