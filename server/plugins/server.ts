export default defineNitroPlugin(async (nitroApp) => {
  console.log('Starting Nitro server:', (await $fetch('/api/test', { method: 'POST' })).statusCode === 200 ? 'responding' : 'not responding')
  return nitroApp
})
