const publicRoutes: string[] = ['/api/test']

export default defineEventHandler((event) => {
  console.log('New request: ' + event.path)
  const headers = getRequestHeaders(event)
  // API Middleware
  if (event.path?.startsWith('/api/')) {
    if (publicRoutes.some((route) => event.path?.startsWith(route))) {
      console.log('Public route, no authorization required')
      return eventHandler((event) => ({ url: event.path }))
    }
    if (headers['x-api-key'] === process.env.NUXT_API_KEY) {
      console.log('API key provided')
      return eventHandler((event) => ({ url: event.path }))
    }
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }))
  }
})
