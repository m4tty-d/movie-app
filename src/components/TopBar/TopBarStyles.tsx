import { TextField, withStyles, Theme } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import Button from '../global/Button'
import styled from 'styled-components'

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
  margin-left: auto;
  display: flex;
  align-items: center;
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
