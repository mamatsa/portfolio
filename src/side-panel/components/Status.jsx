import React from 'react';

const Status = (props) => {
  return (
    <div className='w-full flex justify-between items-center'>
      <p className='bg-amber-400 p-1'>{props.label}</p>
      <p className={props.valueColor}>{props.value}</p>
    </div>
  );
};

export default Status;
