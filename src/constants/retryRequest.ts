import { RetryRequestOptions } from '@/utils'

export const RETRY_REQUEST_DEFAULT_OPTIONS: Omit<RetryRequestOptions, 'fn'> = {
  retries: 3,
  delay: 1000,
}
