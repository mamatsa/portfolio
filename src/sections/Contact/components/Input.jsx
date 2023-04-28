import React from 'react';
import { useTranslation } from 'react-i18next';

const Input = (props) => {
  const { t } = useTranslation();

  return (
    <div className='relative flex flex-col items-start justify-center'>
      <label
        htmlFor={props.id}
        className='text-slate-600 mb-1 md:text-lg dark:text-zinc-400'
      >
        {props.label}
      </label>
      {props.textarea ? (
        <textarea
          {...props.register(props.id)}
          name={props.id}
          id={props.id}
          rows='8'
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 md:px-5 md:py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white md:text-base ${
            props.errors[props.id]
              ? 'ring-red-500 border-red-500 dark:ring-red-500 dark:border-red-500'
              : 'focus:ring-amber-400 focus:border-amber-400 dark:focus:ring-amber-400 dark:focus:border-amber-400'
          }`}
        ></textarea>
      ) : (
        <input
          {...props.register(props.id)}
          type={props.type}
          id={props.id}
          name={props.id}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 md:px-5 md:py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white md:text-base ${
            props.errors[props.id]
              ? 'ring-red-500 border-red-500 dark:ring-red-500 dark:border-red-500'
              : 'focus:ring-amber-400 focus:border-amber-400 dark:focus:ring-amber-400 dark:focus:border-amber-400'
          }`}
        />
      )}
      {props.errors[props.id] && (
        <p role='alert' className='text-red-500 text-sm absolute -bottom-5'>
          {t(props.errors[props.id].message)}
        </p>
      )}
    </div>
  );
};

export default Input;
