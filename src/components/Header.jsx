import React from 'react';
import Searchbox from './Searchbox';

function header() {
  return (
    <div>
      <header>
        <nav class='navbar navbar-expand-lg shadow-md py-2 bg-red-700 relative flex items-center w-full justify-between'>
          <div class='px-6 w-full flex flex-wrap items-center justify-between'>
            <div
              class='navbar-collapse collapse grow items-center'
              id='navbarSupportedContentY'
            >
              <ul class='navbar-nav mr-auto lg:flex lg:flex-row'>
                <li class='nav-item'>
                  <a
                    class='nav-link block pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out'
                    href='#!'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                  >
                    Movieapp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class='text-center bg-neutral-800 text-white py-20 px-6'>
          <h1 class='text-5xl font-bold mt-0 mb-6'>Welcome to Movieapp</h1>
          <h3 class='text-3xl font-bold mb-8'>
            Search movies you want to watch
          </h3>
          <Searchbox />
        </div>
      </header>
    </div>
  );
}

export default header;
