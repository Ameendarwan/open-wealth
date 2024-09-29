import { describe, it, expect } from 'vitest'
import App from './App'
import { render } from '../tests/utils'

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeDefined() // Ensure the container is defined
  })
})
