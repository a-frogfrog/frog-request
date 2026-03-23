import { defineConfig } from 'vitest/config'
import { alias } from './ailas.config'

export default defineConfig({
  test: {
    // ...
  },
  resolve: {
    alias,
  },
})
