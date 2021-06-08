import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#070608',
    },
    secondary: {
      main: '#384ad4',
    },
    text: {
      primary: '#fff',
      secondary: '#C9C9C9',
    },
    background: {
      default: '#070608',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
  },
})

export default theme
