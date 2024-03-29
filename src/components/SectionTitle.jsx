import React from 'react';

const SectionTitle = (props) => {
  return (
    <div className='w-full flex flex-col justify-center items-center mb-4 2xl:mb-8'>
      <h2 className='text-2xl font-bold mb-1 mx-auto lg:text-3xl lg:mb-2 2xl:text-4xl dark:text-white'>
        {props.title}
      </h2>
      {props.description && (
        <p className='text-slate-400 text-center md:text-lg'>
          {props.description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
