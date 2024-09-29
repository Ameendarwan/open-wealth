import { describe, it, expect } from 'vitest'
import { render } from '../../../tests/utils'
import Dashboard from './Dashboard'

const headers = [
  {
    title: 'Asset',
    key: 'name',
    icon: true,
  },
  {
    title: 'Current Price',
    key: 'currentPrice',
    appendText: '$',
  },
  {
    title: 'Price Change (24h)',
    key: 'priceChange',
    colors: ['red', 'green'],
  },
  {
    title: 'Holdings',
    key: 'holdings',
  },
  {
    title: 'Total Portfolio Value',
    key: 'totalValue',
    appendText: '$',
  },
]

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Dashboard />)
    expect(container).toBeDefined()
  })

  it('displays the Topbar with the correct title', () => {
    const { getByText } = render(<Dashboard />)
    expect(getByText('Dashboard')).toBeInTheDocument()
  })

  it('renders the Table with correct headers', () => {
    const { getByText } = render(<Dashboard />)
    headers.forEach(header => {
      expect(getByText(header.title)).toBeInTheDocument()
    })
  })
})
