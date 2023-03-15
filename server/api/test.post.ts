export default defineEventHandler((event) => {
  return {
    url: event.node.req.url,
    method: event.node.req.method,
  }
})
