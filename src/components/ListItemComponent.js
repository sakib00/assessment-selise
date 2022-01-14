import React from 'react';

export const ListItemComponent = ({ author }) => {
  return (
    <div className='px-8 py-4 border rounded-lg  bg-white border-gray-100 shadow-lg'>
      <div className='my-4 space-y-4'>
        <div className='flex items-center justify-between pb-2 border-b border-gray-200 space-x-3'>
          <div>
            <h3 className='text-lg font-bold'>{author.name}</h3>
          </div>
          <div className=''>
            <div className='border rounded-full p-2 border-gray-300 text-secondary-dark  hover:bg-secondary-dark hover:text-white cursor-pointer'>
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
        <div className='flex items-center space-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
            />
          </svg>
          <a
            href='www.google.com'
            className='text-sm  text-blue-500 hover:text-blue-800 visited:text-purple-600'
          >
            {author.link}
          </a>
        </div>
        <p className='text-sm '>{author.bio}</p>
      </div>
    </div>
  );
};
