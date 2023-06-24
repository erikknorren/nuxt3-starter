export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV,
      url: process.env.NUXT_PUBLIC_URL,
    },
  },
  modules: ['@nuxt/devtools', '@pinia/nuxt', 'nuxt-security'],
  imports: {
    dirs: ['store'],
  },
  devtools: {
    enabled: true,
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: 'unsafe-none',
    },
  },
})
