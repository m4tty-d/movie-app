import { Button, withStyles } from '@material-ui/core'

export const StyledButton = withStyles(() => ({
  root: {
    background: 'linear-gradient(98deg, rgba(74,136,208,1) 0%, rgba(56,74,212,1) 69%)',
    textTransform: 'none',
    minWidth: '100px',
  },
}))(Button)

export default StyledButton
