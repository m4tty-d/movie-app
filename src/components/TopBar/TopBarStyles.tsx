import { TextField, withStyles, Theme, Toolbar, Grid } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import Button from '../global/Button'
import styled from 'styled-components'

export const StyledGridItem = withStyles((theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      justifyContent: 'center',
    },
  },
}))(Grid)

export const StyledToolbar = withStyles((theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      minHeight: 170,
      marginBottom: `${theme.spacing(2)}px`,
    },
  },
}))(Toolbar)

export const Logo = styled('div')(
  ({ theme }: { theme: Theme }) => `
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: ${theme.spacing(1)}px;
  }
`,
)

export const StyledForm = styled.form`
  display: flex;
  align-items: center;

  @media screen and (max-width: 599px) {
    flex-direction: column;
    margin-top: 16px;

    button {
      margin-top: 16px;
    }
  }
`

export const StyledTextField = withStyles((theme) => ({
  root: {
    background: '#2E3642',
    borderRadius: theme.shape.borderRadius,
    width: '300px',
  },
}))(TextField)

export const StyledButton = withStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
  },
}))(Button)

export const ClickableClose = withStyles(() => ({
  root: {
    cursor: 'pointer',
  },
}))(Close)
