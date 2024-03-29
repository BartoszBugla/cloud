import type { InternalAxiosRequestConfig } from 'axios'

// handle getting and refreshing token here
const getToken = async () => {
  return ''
}

export const authRequestMiddleware = async (
  req: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const token = await getToken()

  if (token) req.headers.Authorization = `Bearer ${token}`

  return req
}
