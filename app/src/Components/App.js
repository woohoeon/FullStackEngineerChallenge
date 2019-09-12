import React from 'react'
import Router from './Router'
import GlobalStyles from './GlobalStyles'
import configureTheme from '../configureTheme'
import { MuiThemeProvider } from '@material-ui/core/styles'

const role = 'admin'
const theme = configureTheme(role)

const App = () => (
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </MuiThemeProvider>
  </React.Fragment>
)

export default App
