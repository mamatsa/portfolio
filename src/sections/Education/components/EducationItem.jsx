import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCalendar,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const EducationItem = (props) => {
  return (
    <div className='w-full flex justify-between items-start'>
      <div>
        <p className='text-2xl mb-1'>{props.title}</p>
        <p>
          <FontAwesomeIcon icon={faBuilding} className='text-gray-400 mr-2' />
          {props.school}
          <FontAwesomeIcon
            icon={faLocationDot}
            className='text-gray-400 ml-10 mr-2'
          />
          {props.place}
        </p>
        <ul className='list-disc list-inside text-slate-600 mt-3'>
          {props.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col items-end'>
        <p>
          <FontAwesomeIcon icon={faCalendar} className='text-gray-400 mr-2' />
          {props.period}
        </p>
      </div>
    </div>
  );
};

export default EducationItem;
