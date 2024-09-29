// Add support for RTL
import '@testing-library/jest-dom/vitest'

// Add support for the Fetch API
import 'whatwg-fetch'

// Add support for styles components
import 'jest-styled-components'

// Silence the "Could not parse CSS stylesheet" error message which is a known issue when using
// the container query syntax
const originalConsoleError = console.error

console.error = (message: string | string[], ...optionalParams: any) => {
  if (message.includes('Could not parse CSS stylesheet')) {
    return
  }
  originalConsoleError(message, ...optionalParams)
}
