import { describe, it, expect } from 'vitest'
import { render } from '../../../tests/utils'
import Table from './Table'

describe('Table Component', () => {
  const headers = [
    { title: 'Asset', key: 'asset', icon: true },
    { title: 'Value', key: 'value', colors: ['red', 'green'] },
  ]

  const data = [
    { id: 1, asset: 'Bitcoin', value: '10,000', icon: 'icon2' },
    { id: 2, asset: 'Ethereum', value: '-5,000', icon: 'icon3' },
  ]

  it('renders without crashing', () => {
    const { container } = render(<Table headers={headers} data={data} />)
    expect(container).toBeDefined()
  })

  it('renders headers correctly', () => {
    const { getByText } = render(<Table headers={headers} data={data} />)
    expect(getByText('Asset')).toBeInTheDocument()
    expect(getByText('Value')).toBeInTheDocument()
  })

  it('renders data correctly', () => {
    const { getByText } = render(<Table headers={headers} data={data} />)
    expect(getByText('Bitcoin')).toBeInTheDocument()
    expect(getByText('10,000')).toBeInTheDocument()
    expect(getByText('Ethereum')).toBeInTheDocument()
    expect(getByText('-5,000')).toBeInTheDocument()
  })

  it('applies correct colors based on value', () => {
    const { getByText } = render(<Table headers={headers} data={data} />)

    const positiveValueCell = getByText('10,000').closest('td')
    const negativeValueCell = getByText('-5,000').closest('td')

    expect(positiveValueCell).toHaveStyle('color: rgb(0, 128, 0)') // Assuming 'green' is the color for positive values
    expect(negativeValueCell).toHaveStyle('color: rgb(255, 0, 0)') // Assuming 'red' is the color for negative values
  })
})
