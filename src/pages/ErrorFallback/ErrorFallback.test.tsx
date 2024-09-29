import { describe, it, expect, vi } from 'vitest'
import { render } from '../../../tests/utils'
import ErrorFallback from './ErrorFallback'

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}))

describe('ErrorFallback Component', () => {
  const mockResetErrorBoundary = vi.fn()

  const error = new Error('Test error message')

  it('renders without crashing', () => {
    const { container } = render(<ErrorFallback error={error} resetErrorBoundary={mockResetErrorBoundary} />)
    expect(container).toBeDefined()
  })

  it('displays the correct error message', () => {
    const { getByText } = render(<ErrorFallback error={error} resetErrorBoundary={mockResetErrorBoundary} />)
    expect(getByText('Oops...')).toBeInTheDocument()
    expect(getByText('An unexpected error occured.')).toBeInTheDocument()
    expect(
      getByText(
        'We’re sorry for any inconveinience caused. If you keep experiencing this issue then please let us know.'
      )
    ).toBeInTheDocument()
  })

  it('renders the error name and message', () => {
    const { getByText } = render(<ErrorFallback error={error} resetErrorBoundary={mockResetErrorBoundary} />)
    expect(getByText('Error message')).toBeInTheDocument()
    expect(getByText('Error: Test error message')).toBeInTheDocument() // Adjust if the format changes
  })

  it('renders the stack trace if it exists', () => {
    const errorWithStack = new Error('Test error with stack')
    errorWithStack.stack = 'Error stack trace'

    const { getByText } = render(<ErrorFallback error={errorWithStack} resetErrorBoundary={mockResetErrorBoundary} />)

    expect(getByText('Stack trace')).toBeInTheDocument()
    expect(getByText(JSON.stringify(errorWithStack.stack))).toBeInTheDocument()
  })
})
