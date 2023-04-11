import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactCard = (props) => {
  return (
    <div className='w-full flex flex-col items-center p-4 bg-white md:p-8 dark:bg-zinc-800'>
      <FontAwesomeIcon
        icon={props.icon}
        className='mr-2 bg-amber-400 p-4 rounded-full mb-3 scale-75 md:mb-7 md:scale-100'
      />
      {props.contacts.map((contact, i) => (
        <div className='w-full flex justify-between items-center mb-3' key={i}>
          <p className=' text-slate-600 lg:text-lg dark:text-white'>
            {contact.label}
          </p>
          <p className='text-slate-600 text-sm lg:text-base dark:text-white'>
            {contact.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
