// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxt/content", "@nuxtjs/i18n", "nuxt-studio"],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  i18n: {
    locales: [
      { code: "en", name: "English", language: "en-US" },
      { code: "es", name: "Spanish", language: "es-ES" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
  studio: {
    dev: true,
    i18n: {
      defaultLocale: "en",
    },
  },
});
