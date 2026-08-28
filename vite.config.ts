import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: { enabled: true },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
    server: { entry: "server" },
  },
  vite: {
    // Custom domain (grovix.co.in) is served from the site root, not /grovix-connect/.
    base: "/",
  },
});
