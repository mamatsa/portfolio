import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className='relative mt-2'>
      <p className='text-gray-500'>{props.title}</p>
      <p className='absolute top-0 right-0 text-gray-500'>
        {props.progressTitle}
      </p>
      {/* Progressbar */}
      <div className='w-full bg-gray-200 rounded-full'>
        <div
          className='bg-amber-400 p-0.5 rounded-full'
          style={{ width: `${props.progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
