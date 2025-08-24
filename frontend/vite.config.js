import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default Vite dev server port
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Use your Render backend URL in production
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
