/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@app/theme/mui'
import { Provider } from 'react-redux'
import { store } from '@app/store'
import i18n from '@app/i18n/i18n'
import { I18nextProvider } from 'react-i18next'

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </I18nextProvider>
    </Provider>
  )
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
