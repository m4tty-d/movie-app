import React, { Fragment } from 'react'
import { Container, Box, Typography, withStyles } from '@material-ui/core'
import TopBar from './components/TopBar'

const StyledBox = withStyles((theme) => ({
  root: {
    background: 'radial-gradient(circle, rgba(47,60,77,1) 0%, rgba(32,33,38,1) 100%)',
    height: '100vh',
    width: '100vw',
    padding: theme.spacing(4),
  },
}))(Box)

function App() {
  return (
    <Fragment>
      <TopBar />
      <StyledBox>
        <Container>
          <Typography variant="h4">
            <Box fontWeight="fontWeightBold">Results for</Box>
          </Typography>
        </Container>
      </StyledBox>
    </Fragment>
  )
}

export default App
