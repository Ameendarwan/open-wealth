import type { FallbackProps } from 'react-error-boundary'
import type { FCC } from '@app/types'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Layout } from './ErrorFallback.styles'

const ErrorFallback: FCC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const refresh = () => {
    resetErrorBoundary()
    navigate('/')
  }

  return (
    <Layout role="alert">
      <section>
        <div>
          <Typography variant="h1" sx={{ mb: 2 }}>
            {t('error-boundary.oops')}
          </Typography>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {t('error-boundary.unexpected-error')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 7 }}>
            {t('error-boundary.sorry-for-inconvenience')}
          </Typography>
          <Button variant="contained" onClick={refresh}>
            {t('error-boundary.return-to-homepage')}
          </Button>
        </div>
      </section>
      <footer>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
          {t('error-boundary.error-message')}
        </Typography>
        <pre>
          <code>
            {error.name}: {error.message}
          </code>
        </pre>
        {error.stack && (
          <>
            <Typography
              sx={{
                fontSize: '1.2rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>
              {t('error-boundary.stack-trace')}
            </Typography>
            <pre>
              <code>{JSON.stringify(error.stack)}</code>
            </pre>
          </>
        )}
      </footer>
    </Layout>
  )
}

export default ErrorFallback
