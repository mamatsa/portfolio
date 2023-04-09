import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactCard = (props) => {
  return (
    <div className='w-full flex flex-col items-center p-8 bg-white'>
      <FontAwesomeIcon
        icon={props.icon}
        className='mr-2 bg-amber-400 p-4 rounded-full mb-7'
      />
      {props.contacts.map((contact, i) => (
        <div className='w-full flex justify-between items-center mb-3' key={i}>
          <p className='text-lg text-slate-600 '>{contact.label}</p>
          <p className='text-slate-600'>{contact.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
