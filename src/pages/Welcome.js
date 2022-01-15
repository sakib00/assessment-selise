import React from 'react';
import Background from '../images/welcome.svg';

export const Welcome = () => {
  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-2xl font-bold tracking-wide my-10'>
        Welcome to Author Website
      </h2>

      <div className='p-24 flex items-center justify-center'>
        <img src={Background} alt='' />
      </div>
    </div>
  );
};
