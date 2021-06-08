import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import App from './App'
import reportWebVitals from './reportWebVitals'
import apolloClient from './graphql/apolloClient'
import theme from './theme'
import './index.css'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App />
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
