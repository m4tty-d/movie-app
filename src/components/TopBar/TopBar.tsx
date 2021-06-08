import React, { FormEvent, useState } from 'react'
import { Container, AppBar, Toolbar, InputAdornment } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { Logo, StyledForm, StyledTextField, StyledButton, ClickableClose } from './TopBarStyles'
import { useRecoilState } from 'recoil'
import { searchQueryState } from '../../store'

const TopBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [, setGlobalSearchQuery] = useRecoilState(searchQueryState)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (searchQuery && searchQuery.length) {
      setGlobalSearchQuery(searchQuery)
    }
  }

  const clear = () => {
    setSearchQuery('')
    setGlobalSearchQuery('')
  }

  return (
    <AppBar position="relative">
      <Container>
        <Toolbar disableGutters>
          <Logo onClick={() => clear()}>movie app</Logo>
          <StyledForm onSubmit={handleSubmit}>
            <StyledTextField
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
                endAdornment: (
                  <InputAdornment position="end">
                    {searchQuery && searchQuery.length ? <ClickableClose onClick={() => clear()}></ClickableClose> : ''}
                  </InputAdornment>
                ),
              }}
            />
            <StyledButton type="submit">Search</StyledButton>
          </StyledForm>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default TopBar
