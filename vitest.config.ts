import { configDefaults, defineConfig } from 'vitest/config'
import path from 'path'

const testExclusions = [
  'node_modules',
  'config',
  '__mocks__',
  '.eslintrc.js',
  '**/*.styles.ts',
  '**/*.types.ts',
  '**/types.ts',
  '**/index.{ts,tsx}',
  '**/*.d.ts',
  '**/store/**',
  '**/theme/**',
  '**/i18n/**',
  '**/mock/**',
  '**/types/**',
  '**/assets/**',
]

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['tests/setup.ts'],

    alias: {
      '@app': path.resolve(__dirname, './src'),
    },

    coverage: {
      reporter: ['text', 'json', 'json-summary', 'html'],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
      exclude: testExclusions,
    },

    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: [...configDefaults.exclude, ...testExclusions],
  },
})
