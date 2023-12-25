import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCalendar,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const EducationItem = (props) => {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center'>
        <h3 className='mb-1 text-lg md:text-2xl dark:text-white'>
          {props.title}
        </h3>
      </div>
      <div className='flex items-center justify-between flex-wrap gap-x-3'>
        <div className='flex gap-3 md:gap-5 xl:gap-10'>
          <p className='flex items-center text-xs md:text-base dark:text-white'>
            <FontAwesomeIcon icon={faBuilding} className='text-gray-400 mr-2' />
            {props.school}
          </p>
          <p className='flex items-center text-xs md:text-base dark:text-white'>
            <FontAwesomeIcon
              icon={faLocationDot}
              className='text-gray-400 mr-2'
            />
            {props.place}
          </p>
        </div>

        <p className='flex items-center text-xs md:text-base dark:text-white'>
          <FontAwesomeIcon icon={faCalendar} className='text-gray-400 mr-2' />
          {props.period}
        </p>
      </div>

      <ul className='list-disc ml-4 text-slate-600 mt-3 text-sm md:mt-3 xl:mt-4  md:text-base dark:text-zinc-400'>
        {props.details.map((detail, i) => (
          <li key={i} className='max-w-[100ch]'>
            {detail}
          </li>
        ))}
      </ul>

      {props.title !== 'School Graduate' && <hr className='my-5 lg:my-10' />}
    </div>
  );
};

export default EducationItem;
