import { defineConfig } from 'vitest/config'
import { alias } from './ailas.config.js'

export default defineConfig({
  test: {
    // ...
  },
  resolve: {
    alias,
  },
})
