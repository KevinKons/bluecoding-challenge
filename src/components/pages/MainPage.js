import React, { useState, useEffect, useRef } from 'react'

import { PageContainer, SearchBar } from './MainPageElements';

import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'


const MainPage = () => {
  const searchQueryRef = useRef();
  const [searchQuery, setSearchQuery] = useState('cat');

  const onClick = (event) => {
    event.preventDefault();
    setSearchQuery(searchQueryRef.current.value);
  }

  return (  
    <PageContainer>
      {searchQuery}
      <form>
        <SearchBar placeholder='search' ref={searchQueryRef}/>
        <button onClick={onClick}>Search</button>
      </form>
      <Grid width={800} columns={3} fetchGifs={() => {
        const gf = new GiphyFetch('gdwjphWDU038gRbOZBeOX0oNWQZEdPGM')
        return gf.search(searchQuery, { sort: 'relevant', lang: 'es', limit: 10})
      }} />
    </PageContainer>
  )
}

export default MainPage;

const getSearchGifsx = async (search) => {
  const gf = new GiphyFetch('gdwjphWDU038gRbOZBeOX0oNWQZEdPGM')
  let gifs;
  gf.search(search, { sort: 'relevant', lang: 'es', limit: 10, type: 'stickers' }).then(data => gifs = data);
  return gifs;
}
