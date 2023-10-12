export default defineEventHandler(async (event) => {
  return {
    statusCode: 200,
    statusMessage: 'OK',
    url: event.node.req.url,
    method: event.node.req.method,
    query: getQuery(event),
    headers: getRequestHeaders(event),
    body: await readBody(event),
  }
})
