import { defineConfig } from "astro/config";
// import vercel from '@astrojs/vercel/serverless';
// import vercel from '@astrojs/vercel/edge';
import sanity from "astro-sanity";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://kingwoodbuilders.com",
  integrations: [
    sanity({
      projectId: "8xcmf6z5",
      dataset: "production",
      apiVersion: "2022-11-15",
      useCdn: true,
    }),
    sitemap({
      filter: (page) => 
        page !== "https://kingwoodbuilders.com/admin/" &&
        !page.includes("/preview"),
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: netlify(),
});
