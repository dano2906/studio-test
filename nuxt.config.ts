// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxt/content", "nuxt-studio"],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  nitro: {
    preset: "vercel",
  },
});
