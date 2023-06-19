export default defineNuxtConfig({
  ssr: true,
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV,
    },
  },
  modules: ['@pinia/nuxt', 'nuxt-security'],
  imports: {
    dirs: ['store'],
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
