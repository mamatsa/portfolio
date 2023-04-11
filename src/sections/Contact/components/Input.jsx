import React from 'react';

const Input = (props) => {
  return (
    <div className='flex flex-col items-start justify-center'>
      <label
        htmlFor={props.id}
        className='text-slate-600 mb-1 md:text-lg dark:text-zinc-400'
      >
        {props.label}
      </label>
      {props.textarea ? (
        <textarea
          name={props.id}
          id={props.id}
          rows='8'
          className='bg-slate-200 w-full text-sm px-3 py-2 md:text-base md:px-5 md:py-3 '
        ></textarea>
      ) : (
        <input
          type={props.type}
          id={props.id}
          name={props.id}
          className='bg-slate-200 w-full text-sm px-3 py-2 md:text-base md:px-5 md:py-3 '
        />
      )}
    </div>
  );
};

export default Input;
