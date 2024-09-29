export interface CryptoAsset {
  id: string
  name: string

  currentPrice: string
  priceChange: string
  holdings: number
  totalValue: string
  icon?: string
}

export const generateMockData = () => {
  const cryptoAssets = [
    { id: '1', name: 'Bitcoin', holdings: 1.5, icon: 'cryptocurrency-color:btc' },
    { id: '2', name: 'Ethereum', holdings: 10, icon: 'cryptocurrency-color:eth' },
    { id: '3', name: 'Cardano', holdings: 200, icon: 'token-branded:cardano' },
    { id: '4', name: 'Ripple', holdings: 1500, icon: 'cryptocurrency-color:xrp' },
    { id: '5', name: 'Litecoin', holdings: 25, icon: 'token-branded:litecoin' },
    { id: '6', name: 'Polkadot', holdings: 50, icon: 'token-branded:polkadot' },
    { id: '7', name: 'Chainlink', holdings: 30, icon: 'cryptocurrency-color:chain' },
    { id: '8', name: 'Dogecoin', holdings: 10000, icon: 'cryptocurrency-color:doge' },
    { id: '9', name: 'Bitcoin Cash', holdings: 8, icon: 'cryptocurrency-color:bch' },
    { id: '10', name: 'Stellar', holdings: 500, icon: 'cryptocurrency-color:eng' },
  ]

  return cryptoAssets.map(asset => ({
    id: asset.id,
    name: asset.name,
    icon: asset.icon,
    currentPrice: (Math.random() * 10000 + 10000).toFixed(2), // Random price between 10,000 and 20,000
    priceChange: `${(Math.random() * 10 - 5).toFixed(2)}%`, // Random change between -5% and +5%
    holdings: asset.holdings,
    totalValue: ((Math.random() * 10000 + 10000) * asset.holdings).toFixed(0), // Calculate total value
  }))
}
