import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import './index.css';
import Header from './components/Header.jsx';
import Movie from './components/Movie.jsx';
import Searchbox from './components/Searchbox';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = `https://www.omdbapi.com/${API_KEY}`;
// const API_URL = 'https://www.omdbapi.com/';

function App() {
  const [movie, setMovie] = useState([]);

  const getMovieRequest = async () => {
    const API_URL = 'http://www.omdbapi.com/?s=star wars&apikey=122b7f36';
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    // console.log(responseJson);
    setMovie(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className='App'>
      <Header title='Movieapp' />
      <Searchbox />
      <Movie movie={movie} />
    </div>
  );
}

export default App;
