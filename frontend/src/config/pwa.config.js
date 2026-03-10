// pwa.config.js
import { VitePWA } from "vite-plugin-pwa";

export const pwaConfig = VitePWA({
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
  manifest: {
    name: "Kaveri Living",
    short_name: "Kaveri",
    description: "Premium Hostel Living Experience",
    theme_color: "#282F3D",
    background_color: "#000000",
    display: "standalone",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "./kv.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./kv.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "./kv.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
});
