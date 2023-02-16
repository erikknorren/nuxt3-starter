import { server } from '~/server/server'

const publicRoutes: string[] = []

export default defineEventHandler((event) => {
  console.log('New request: ' + event.path)
  const headers = getRequestHeaders(event)
  // Server Initialization
  server()
  // API Middleware
  if (event.path?.startsWith('/api/')) {
    if (publicRoutes.includes(event.path)) {
      console.log('Public route, no authorization required')
      return eventHandler((event) => ({ url: event.path }))
    }
    if (headers['x-api-key'] === process.env.API_KEY) {
      console.log('API key provided')
      return eventHandler((event) => ({ url: event.path }))
    }
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }))
  }
})
