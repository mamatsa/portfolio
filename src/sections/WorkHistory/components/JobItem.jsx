import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCalendar,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const JobItem = (props) => {
  return (
    <div className='w-full group'>
      <div className='flex justify-between items-center'>
        <h3 className='mb-1 text-lg md:text-xl 2xl:text-2xl dark:text-white'>
          {props.position}
        </h3>
        <p className='bg-amber-400 text-xs px-3 py-1 whitespace-nowrap rounded-sm mb-1 flex justify-center items-center 2xl:text-sm'>
          {props.workHours}
        </p>
      </div>
      <div className='flex items-center justify-between flex-wrap gap-x-3 gap-y-1'>
        <div className='flex gap-3 ml-[2px] sm:gap-5 md:gap-10'>
          <p className='text-xs md:text-sm 2xl:text-base dark:text-white'>
            <FontAwesomeIcon icon={faBuilding} className='text-gray-400 mr-2' />
            {props.company}
          </p>
          <p className='text-xs md:text-sm 2xl:text-base dark:text-white'>
            <FontAwesomeIcon
              icon={faLocationDot}
              className='text-gray-400 mr-2'
            />
            {props.location}
          </p>
        </div>

        <p className='text-xs whitespace-nowrap md:text-sm 2xl:text-base dark:text-white'>
          <FontAwesomeIcon icon={faCalendar} className='text-gray-400 mr-2' />
          {props.period}
        </p>
      </div>

      <ul className='list-disc ml-4 text-slate-600 mt-3 text-sm sm:mt-3 2xl:mt-4 sm:text-base dark:text-zinc-400'>
        {props.details.map((detail, i) => (
          <li key={i} className='max-w-[100ch]'>
            {detail}
          </li>
        ))}
      </ul>

      <hr className='my-5 lg:my-8 2xl:my-10 group-last:hidden' />
    </div>
  );
};

export default JobItem;
