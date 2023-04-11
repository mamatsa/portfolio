import React from 'react';

const Status = (props) => {
  return (
    <div className='w-full flex justify-between items-center'>
      <p className='bg-amber-400 p-1 text-sm xl:text-base '>{props.label}</p>
      <p className={`text-sm xl:text-base dark:text-white ${props.valueColor}`}>
        {props.value}
      </p>
    </div>
  );
};

export default Status;
