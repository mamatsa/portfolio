import React from 'react';

const Loader = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div
        className='animate-spin inline-block w-10 h-10 border-4 border-current border-t-transparent text-amber-400 rounded-full dark:text-white'
        role='status'
        aria-label='loading'
      ></div>
    </div>
  );
};

export default Loader;
