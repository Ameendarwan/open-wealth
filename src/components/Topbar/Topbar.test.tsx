import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '../../../tests/utils'
import Topbar from './Topbar'

describe('Topbar Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Topbar pageTitle="Dashboard" />)
    expect(container).toBeDefined()
  })

  it('displays the correct page title', () => {
    const { getByText } = render(<Topbar pageTitle="Dashboard" />)
    expect(getByText('Dashboard')).toBeInTheDocument()
  })

  it('shows user initials in the avatar', () => {
    const { getByText } = render(<Topbar pageTitle="Dashboard" />)
    expect(getByText('AD')).toBeInTheDocument()
  })

  it('toggles the popover when the button is clicked', () => {
    const { getByText, getByLabelText } = render(<Topbar pageTitle="Dashboard" />)

    const button = getByLabelText('Account menu')
    fireEvent.click(button)

    expect(getByText('Logged in as')).toBeInTheDocument()
    expect(getByText('Ameen Darwan')).toBeInTheDocument()
  })
})
