// /server/api/[...].ts
const config = useRuntimeConfig()
const baseURL = config.metisBaseUrl;

export default defineEventHandler(async event => {
  const method = getMethod(event)
  const params = getQuery(event)

  const headers = getHeaders(event)
  const authorization = headers.Authorization || getCookie(event, 'auth._token.local')

  const url = event.req.url as string

  const body = method === "GET" ? undefined : await readBody(event)


  return await $fetch(url, {
      headers: {
          "Content-Type": headers["content-type"] as string,
          Authorization: authorization as string,
      },
      baseURL,
      method,
      params,
      body,
  })
})
