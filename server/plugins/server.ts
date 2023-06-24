export default defineNitroPlugin(async (nitroApp) => {
  console.log('Nitro server listening on ' + process.env.NUXT_PUBLIC_URL + (process.env.PORT ? ':' + process.env.PORT : ''))
  const testResponse = await $fetch('/api/test', { method: 'POST' })
  console.log('testResponse:', testResponse.statusCode, testResponse.statusMessage)
  return nitroApp
})
