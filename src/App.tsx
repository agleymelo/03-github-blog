import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IssuesProvider } from './contexts/IssuesContext'
import { Router } from './routes'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
        <BrowserRouter>
          <Router />

          <GlobalStyle />
        </BrowserRouter>
      </IssuesProvider>
    </ThemeProvider>
  )
}
