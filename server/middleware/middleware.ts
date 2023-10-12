const publicRoutes: string[] = []

export default defineEventHandler((event) => {
  console.log('New request: ' + event.path)
  const headers = getRequestHeaders(event)
  // API Middleware
  if (event.path?.startsWith('/api/')) {
    if (publicRoutes.some((route) => event.path?.startsWith(route))) {
      return console.log('Public route, no authorization required')
    }
    if (headers['x-api-key'] === process.env.NUXT_API_KEY) {
      return console.log('API key provided')
    }
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
})
