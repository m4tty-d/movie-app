import React from 'react'
import {
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  Button,
  withStyles,
} from '@material-ui/core'
import { Search } from '@material-ui/icons'

const StyledTextField = withStyles((theme) => ({
  root: {
    marginLeft: 'auto',
    background: '#2E3642',
    borderRadius: theme.shape.borderRadius,
    width: '300px',
  },
}))(TextField)

const StyledButton = withStyles((theme) => ({
  root: {
    background: 'linear-gradient(98deg, rgba(74,136,208,1) 0%, rgba(56,74,212,1) 69%)',
    marginLeft: theme.spacing(2),
    textTransform: 'none',
    width: '100px',
  },
}))(Button)

const TopBar: React.FC = () => {
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6">
            <Box fontWeight="fontWeightMedium">movie app</Box>
          </Typography>
          <StyledTextField
            variant="outlined"
            size="small"
            placeholder="Search for movies by title"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search></Search>
                </InputAdornment>
              ),
            }}
          />
          <StyledButton>Search</StyledButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default TopBar
