import path from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import ui from "@nuxt/ui/vite";


export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    ui({
      theme: {
        colors: ["primary", "error", "success", "warning", "info"]
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["lucide-vue-next"],
  },
});
