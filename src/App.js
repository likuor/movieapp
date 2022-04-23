import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.css';
import Header from './components/Header.jsx';
import Movie from './components/Movie.jsx';
import Searchbox from './components/Searchbox';

const API_KEY = process.env.REACT_APP_API_KEY;
const base_URL = `https://www.omdbapi.com/`;

function App() {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const API_URL = `${base_URL}?s=${searchValue}&apikey=${API_KEY}`;

    try {
      const response = await axios.get(API_URL);
      if (response.data.Search) {
        setMovie(response.data.Search);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className='App'>
      <Header title='Movieapp' />
      <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} />
      <Movie movie={movie} />
    </div>
  );
}

export default App;
