import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MediaLink = (props) => {
  return (
    <a
      href={props.href}
      target='_blank'
      className='bg-amber-400 w-10 h-10 rounded-full flex justify-center items-center scale-75 2xl:scale-100'
    >
      <FontAwesomeIcon
        icon={props.icon}
        size='xl'
        className='bg-amber-400 p-2 rounded-full md:hover:bg-amber-300'
      />
    </a>
  );
};

export default MediaLink;
