export const useStore = defineStore('pinia-store', () => {
  const env = useRuntimeConfig().public.env as 'development' | 'production'
  return {
    env,
  }
})
