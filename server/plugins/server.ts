export default defineNitroPlugin(async (nitroApp) => {
  try {
    await console.log('Nitro server listening on ' + process.env.NUXT_PUBLIC_URL)
    const testResponse = await $fetch('/api/test', { method: 'POST', headers: { 'x-api-key': process.env.NUXT_API_KEY || '' } })
    console.log('testResponse:', testResponse.statusCode, testResponse.statusMessage)
    return nitroApp
  } catch (error) {
    console.log(error)
  }
})
