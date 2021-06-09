import React, { FormEvent, useState } from 'react'
import { Container, AppBar, InputAdornment, Grid } from '@material-ui/core'
import { MovieFilter, Search } from '@material-ui/icons'
import {
  StyledToolbar,
  Logo,
  StyledForm,
  StyledTextField,
  StyledButton,
  ClickableClose,
  StyledGridItem,
} from './TopBarStyles'
import { useRecoilState } from 'recoil'
import { searchQueryState, SearchQueryType } from '../../store'

const TopBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [, setGlobalSearchQuery] = useRecoilState(searchQueryState)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (searchQuery && searchQuery.length) {
      setGlobalSearchQuery({ type: SearchQueryType.Search, query: searchQuery })
    }
  }

  const clear = () => {
    setSearchQuery('')
    setGlobalSearchQuery({ type: SearchQueryType.Search, query: '' })
  }

  return (
    <AppBar position="relative">
      <Container>
        <StyledToolbar disableGutters>
          <Grid container alignItems="center">
            <StyledGridItem item container xs={12} sm={6} className="justify-content-">
              <Logo onClick={() => clear()}>
                <MovieFilter /> movie app
              </Logo>
            </StyledGridItem>
            <StyledGridItem item container xs={12} sm={6} justify="flex-end" xs-justify="center">
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
                        {searchQuery && searchQuery.length ? (
                          <ClickableClose onClick={() => clear()}></ClickableClose>
                        ) : (
                          ''
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                <StyledButton type="submit">Search</StyledButton>
              </StyledForm>
            </StyledGridItem>
          </Grid>
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}

export default TopBar
