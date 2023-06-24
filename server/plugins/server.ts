export default defineNitroPlugin(async (nitroApp) => {
  console.log('Nitro server starting...')
  const testResponse = await $fetch('/api/test', { method: 'POST' })
  console.log('testResponse:', testResponse.statusCode, testResponse.statusMessage)
  return nitroApp
})
