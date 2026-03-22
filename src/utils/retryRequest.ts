import { RETRY_REQUEST_DEFAULT_OPTIONS } from '@/constants'

type RetryRequestOptions = {
  fn: () => Promise<any>
  retries?: number
  delay?: number
}

async function retryRequest<T>(options: RetryRequestOptions): Promise<T> {
  const {
    fn,
    retries = RETRY_REQUEST_DEFAULT_OPTIONS.retries as number,
    delay = RETRY_REQUEST_DEFAULT_OPTIONS.delay as number,
  } = options

  try {
    return await fn()
  } catch (error) {
    if (retries < 0) throw error

    await new Promise((resolve) => setTimeout(resolve, delay))

    return await retryRequest({ ...options, retries: retries - 1 })
  }
}

export { type RetryRequestOptions, retryRequest }
