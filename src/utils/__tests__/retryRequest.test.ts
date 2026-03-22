import { describe, expect, it, vi } from 'vitest'
import { retryRequest } from '@/utils/retryRequest'

describe('retryRequest', () => {
  it('should retry until success', async () => {
    let count = 0

    const mockFn = vi.fn().mockImplementation(() => {
      count++

      if (count < 3) {
        return Promise.reject(new Error('fail'))
      }

      return Promise.resolve('success')
    })

    const result = await retryRequest({ fn: mockFn, retries: 3, delay: 10 })

    expect(result).toBe('success')
    expect(mockFn).toHaveBeenCalledTimes(3)
  })
})
