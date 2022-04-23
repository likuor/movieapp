import React from 'react';

function Movie(props) {
  return (
    <div className='flex space-x-5 px-12'>
      {props.movie.map((movie, index) => (
        <div className='rounded-lg shadow-lg bg-white max-w-sm' key={index}>
          <div className='rounded-lg shadow-lg bg-red max-w-sm'>
            <a href='#!' data-mdb-ripple='true' data-mdb-ripple-color='light'>
              <img
                className='rounded-t-lg object-cover h-56 w-96 '
                src={movie.Poster}
                alt=''
              />
            </a>
            <div className='py-6 bg-neutral-900'>
              <h5 className='text-white text-xl font-medium mb-2 bg-neutral-800 h-60'>
                {movie.Title}
              </h5>
              <p className='text-white text-base mb-4 flex-auto text-center'></p>

              <div className='flex'>
                <div className='flex-auto inline-block px-6 py-2.5 bg-red-600 text-white text-center font-medium text-xs leading-tight uppercase rounded shadow-md '>
                  {movie.Year}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movie;
