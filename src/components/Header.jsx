import React from 'react';

function header(props) {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-lg shadow-md py-2 bg-red-700 relative flex items-center w-full justify-between'>
          <div className='px-6 w-full flex flex-wrap items-center justify-between bg-red-700'>
            <div
              className='navbar-collapse collapse grow items-center'
              id='navbarSupportedContentY'
            >
              <ul className='navbar-nav mr-auto lg:flex lg:flex-row bg-red-700'>
                <li className='nav-item'>
                  <a
                    className='bg-red-700 nav-link block pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out'
                    href='#!'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                  >
                    {props.title}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='text-center bg-neutral-900 text-white py-20 px-6'>
          <h1 className='text-5xl font-bold mb-6'>Welcome to Movieapp</h1>
          <h3 className='text-3xl font-bold mb-6'>
            Type movie name you want to watch
          </h3>
        </div>
      </header>
    </div>
  );
}

export default header;
