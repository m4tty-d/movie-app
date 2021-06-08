import { TextField, Button, withStyles } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import styled from 'styled-components'

export const Logo = styled.div`
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
`

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
    background: 'linear-gradient(98deg, rgba(74,136,208,1) 0%, rgba(56,74,212,1) 69%)',
    marginLeft: theme.spacing(2),
    textTransform: 'none',
    width: '100px',
  },
}))(Button)

export const ClickableClose = withStyles(() => ({
  root: {
    cursor: 'pointer',
  },
}))(Close)
