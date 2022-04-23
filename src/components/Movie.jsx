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
              <h5 className='text-white text-xl font-medium mb-2 bg-neutral-800 h-80'>
                {movie.Title}
              </h5>
              <p className='text-white text-base mb-4 flex-auto text-center'>
                {movie.Year}
              </p>

              <div className='flex'>
                <button
                  type='button'
                  className='flex-auto inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Amazon
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movie;
