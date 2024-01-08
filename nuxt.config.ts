export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
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
  security: {
    headers: {
      crossOriginEmbedderPolicy: 'unsafe-none',
    },
  },
})
