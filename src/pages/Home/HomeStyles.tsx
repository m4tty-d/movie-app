import { Box, withStyles } from '@material-ui/core'

export const Holder = withStyles((theme) => ({
  root: {
    background: 'radial-gradient(circle, rgba(47,60,77,1) 0%, rgba(32,33,38,1) 100%)',
    minHeight: 'calc(100vh - 64px)',
    width: '100vw',
    padding: theme.spacing(4),
  },
}))(Box)
