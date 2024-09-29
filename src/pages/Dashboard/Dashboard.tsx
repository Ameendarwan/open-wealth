import { Stack } from '@mui/material'
import Topbar from '@app/components/Topbar'
import { useEffect, useMemo, useState } from 'react'
import { generateMockData } from '@app/mock/data/crypto'
import Table from '@app/components/Table'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation()
  const [cryptoData, setCryptoData] = useState(generateMockData())

  /**
   * Trigger an interval to update the crypto data every 5 seconds
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(generateMockData())
    }, 5000)

    return () => clearInterval(interval) // Clean up on component unmount
  }, [])

  const headers = useMemo(
    () => [
      {
        title: t('pages.dashboard.crypto-table.headers.asset'),
        key: 'name',
        icon: true,
      },
      {
        title: t('pages.dashboard.crypto-table.headers.current-price'),
        key: 'currentPrice',
        appendText: '$',
      },
      {
        title: t('pages.dashboard.crypto-table.headers.price-change-24'),
        key: 'priceChange',
        colors: ['red', 'green'],
      },
      {
        title: t('pages.dashboard.crypto-table.headers.holdings'),
        key: 'holdings',
      },
      {
        title: t('pages.dashboard.crypto-table.headers.total-portfolio-value'),
        key: 'totalValue',
        appendText: '$',
      },
    ],
    [t]
  )

  return (
    <Stack direction="column">
      <Topbar pageTitle={t('pages.dashboard.page-title')} />
      <Stack direction="column" p={{ sm: 2, lg: 8 }}>
        <Table headers={headers} data={cryptoData} />
      </Stack>
    </Stack>
  )
}

export default Dashboard
