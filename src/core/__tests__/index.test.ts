import { describe, expect, it } from 'vitest'
import { FrogRequest } from '..'

describe('FrogRequest', () => {
  it('should create a new instance', () => {
    const request = new FrogRequest()
    expect(request).toBeDefined()
  })
})
