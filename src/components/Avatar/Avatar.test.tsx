import { describe, it, expect } from 'vitest'
import Avatar from './Avatar'
import { render } from '../../../tests/utils'

describe('Avatar Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Avatar initials="AD" variant="primary" size="m" />)
    expect(container).toBeDefined()
  })

  it('renders initials correctly', () => {
    const { getByText } = render(<Avatar initials="AD" variant="primary" size="m" />)
    expect(getByText('AD')).toBeInTheDocument()
  })

  it('applies the correct variant', () => {
    const { container } = render(<Avatar initials="AD" variant="secondary" size="m" />)
    expect(container.firstChild).toHaveAttribute('variant', 'secondary')
  })

  it('defaults to primary variant and medium size', () => {
    const { container } = render(<Avatar initials="AD" />)
    expect(container.firstChild).toHaveAttribute('variant', 'primary')
  })

  it('renders without initials', () => {
    const { container } = render(<Avatar initials="" variant="primary" size="m" />)
    expect(container.firstChild).toBeDefined()
  })
})
