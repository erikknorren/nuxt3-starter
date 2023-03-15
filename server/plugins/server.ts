export default defineNitroPlugin((nitroApp) => {
  console.log('Starting Nitro server with h3 options:', nitroApp.h3App.options)
})
