export const useStore = defineStore('pinia-store', () => {
  const env = useRuntimeConfig().public.env as 'development' | 'test' | 'production'
  return {
    env,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
