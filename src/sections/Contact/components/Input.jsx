import React from 'react';

const Input = (props) => {
  return (
    <div className='flex flex-col items-start justify-center'>
      <label htmlFor={props.id} className='text-slate-600 mb-1 text-lg'>
        {props.label}
      </label>
      {props.textarea ? (
        <textarea
          name={props.id}
          id={props.id}
          rows='8'
          className='bg-slate-200 w-full px-5 py-3'
        ></textarea>
      ) : (
        <input
          type={props.type}
          id={props.id}
          name={props.id}
          className='bg-slate-200 w-full px-5 py-3'
        />
      )}
    </div>
  );
};

export default Input;
