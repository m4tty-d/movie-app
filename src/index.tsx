import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import apolloClient from './graphql/apolloClient'
import { RecoilRoot } from 'recoil'
import theme from './theme'
import './index.css'
import Home from './pages/Home/'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <Home />
          </RecoilRoot>
        </ThemeProvider>
        <CssBaseline />
      </MuiThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
