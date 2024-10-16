import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* server: {
    hmr: {
      protocol: "wss", // Använd WebSocket över HTTPS (wss)
      host: "localhost",
      port: 5173,
      clientPort: 443, // Standardport för wss (om Localtunnel används)
    },
  }, */
});
