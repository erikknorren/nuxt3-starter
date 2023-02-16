export const useNuxtStore = defineStore('nuxt-store', () => {
  const env = useRuntimeConfig().public.env as 'development' | 'test' | 'production'
  return {
    env,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNuxtStore, import.meta.hot))
}
