import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-amber-400 py-3 px-6 text-xs group md:hover:bg-amber-300 2xl:text-base ${
        props.wide && 'w-full'
      }`}
      onClick={props.clickHandler}
    >
      {props.text}
      <div
        className={`${
          props.small
            ? 'md:group-hover:translate-y-px'
            : 'md:group-hover:translate-x-1'
        }`}
      >
        <FontAwesomeIcon icon={props.icon} />
      </div>
    </button>
  );
};

export default Button;
