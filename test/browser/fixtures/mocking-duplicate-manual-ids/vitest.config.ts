import { defineConfig } from 'vitest/config'
import { instances, provider } from '../../settings'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${new URL('./src/', import.meta.url).pathname}`,
    },
  },
  cacheDir: new URL('./node_modules/.vite', import.meta.url).pathname,
  test: {
    cache: false,
    fileParallelism: false,
    maxWorkers: 1,
    browser: {
      enabled: true,
      provider,
      instances,
      headless: true,
    },
  },
})
