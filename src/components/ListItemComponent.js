import React from 'react';

export const ListItemComponent = () => {
  return (
    <div className='container mx-auto'>
      <div className='border rounded-md flex px-8 py-4 space-x-3 border-gray-600'>
        <div className='my-4 space-y-4'>
          <h3 className='text-lg text-light font-bold mb-2'>John Doe</h3>
          <a
            href='www.google.com'
            className='text-sm tracking-wide text-blue-500 hover:text-blue-800 visited:text-purple-600 '
          >
            www.wiki.com
          </a>
          <p className='text-sm text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            consequuntur aut nam labore, necessitatibus temporibus mollitia
            provident quis officia dolorem aliquam tenetur sequi ducimus
            molestias reprehenderit nulla quod, delectus architecto.
          </p>
        </div>
        <div className='my-4'>
          <div className='border rounded-full p-2 border-gray-500 text-secondary-dark hover:border-gray-300 hover:text-secondary cursor-pointer'>
            {/* Outline */}
            {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 '
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg> */}
            {/* Solid */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 '
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
