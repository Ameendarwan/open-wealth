import { FC } from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/mui'
import { store } from './store'
import GlobalStyle from './GlobalStyle'
import Routes from './routes/Routes'
import ErrorFallback from './pages/ErrorFallback'
import i18n from './i18n/i18n'

const App: FC = _props => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <I18nextProvider i18n={i18n}>
              <Routes />
            </I18nextProvider>
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
