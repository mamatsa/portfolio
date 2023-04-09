import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-amber-400 py-3 px-6 ${
        props.wide && 'w-full'
      } ${props.small && 'text-sm font-medium'}`}
      onClick={props.clickHandler}
    >
      {props.text}
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
};

export default Button;
