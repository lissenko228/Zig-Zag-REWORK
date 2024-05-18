// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Программа для оптимизации транспортной логистики: управление, автоматизация, сокращение расходов | «Zig-Zag»",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  ui: {
    disableGlobalStyles: true,
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/color-mode"],
  extends: ['@nuxt/ui-pro'],
  colorMode: {
    preference: "light",
  },
});
