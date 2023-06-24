export default defineNitroPlugin(async (nitroApp) => {
  const testResponse = await $fetch('/api/test', { method: 'POST' })
  console.log('Nitro API testResponse:', testResponse.statusCode, testResponse.statusMessage)
  return nitroApp
})
