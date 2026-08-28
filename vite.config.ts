import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const pagesBase = process.env.GITHUB_PAGES === "true" ? "/grovix-connect/" : "/";

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
    base: pagesBase,
  },
});
