import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import { render } from '../../../tests/utils'

describe('Navbar Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    expect(container).toBeDefined()
  })

  it('contains a logo that links to the dashboard', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    const logo = getByAltText(/app name/i)
    expect(logo).toBeInTheDocument()
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  })
})
