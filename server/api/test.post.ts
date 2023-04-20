export default defineEventHandler(async (event) => {
  try {
    return {
      statusCode: 200,
      statusMessage: 'OK',
      url: event.node.req.url,
      method: event.node.req.method,
      query: getQuery(event),
      headers: getRequestHeaders(event),
      body: await readBody(event),
    }
  } catch (error) {
    console.log(error)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Internal Server Error' }))
  }
})
