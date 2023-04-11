import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCalendar,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const JobItem = (props) => {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center'>
        <h3 className='mb-1 text-lg md:text-2xl dark:text-white'>
          {props.title}
        </h3>
        <p className='bg-amber-400 text-xs px-3 py-1 whitespace-nowrap rounded-sm mb-1 flex justify-center items-center md:text-base'>
          {props.workHours}
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-3 sm:gap-5 md:gap-10'>
          <p className='text-xs md:text-base dark:text-white'>
            <FontAwesomeIcon icon={faBuilding} className='text-gray-400 mr-2' />
            {props.company}
          </p>
          <p className='text-xs md:text-base dark:text-white'>
            <FontAwesomeIcon
              icon={faLocationDot}
              className='text-gray-400 mr-2'
            />
            {props.place}
          </p>
        </div>

        <p className='text-xs whitespace-nowrap ml-4 md:text-base dark:text-white'>
          <FontAwesomeIcon icon={faCalendar} className='text-gray-400 mr-2' />
          {props.period}
        </p>
      </div>

      <ul className='list-disc list-inside text-slate-600 mt-3 text-sm sm:mt-3 md:mt-4  sm:text-base dark:text-zinc-400'>
        {props.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobItem;
