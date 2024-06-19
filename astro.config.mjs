import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdownConfig from './markdown.config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://prayag-portfolio-p9yiyqbbh-prayag-09s-projects.vercel.app/",
  prefetch: true,
  markdown: {
    ...markdownConfig
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), mdx({
    ...markdownConfig,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "one-dark-pro"
    }
  }), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })
]
});