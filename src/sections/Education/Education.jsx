import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCalendar,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const Education = ({ educationRef }) => {
  return (
    <div
      id='education'
      className='w-full flex flex-col items-center justify-center gap-5'
      ref={educationRef}
    >
      <h2 className='text-4xl font-bold mb-5'>Education</h2>
      <div className='bg-white w-full p-16'>
        {/* 1 */}
        <div className='w-full flex justify-between items-start'>
          <div>
            <p className='text-2xl mb-1'>
              BACHELOR OF ENGINEERING IN INFORMATICS
            </p>
            <p>
              <FontAwesomeIcon
                icon={faBuilding}
                className='text-gray-400 mr-2'
              />
              BTU • Business And Technology University
              <FontAwesomeIcon
                icon={faLocationDot}
                className='text-gray-400 ml-10 mr-2'
              />
              Tbilisi
            </p>
            <ul className='list-disc list-inside text-slate-600 mt-3'>
              <li>Learning with a 100% scholarship.</li>
              <li>Current GPA: 3.6</li>
              <li>
                Important courses covered: Calculus, Data structures and
                algorithms, HTML/CSS & Javascript, React, Linux, English B2 and
                C1 levels.
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-end'>
            <p>
              <FontAwesomeIcon
                icon={faCalendar}
                className='text-gray-400 mr-2'
              />
              Sep 2019 - Present
            </p>
          </div>
        </div>
        <hr className='my-10' />
        {/* 2 */}
        <div className='w-full flex justify-between items-start'>
          <div>
            <p className='text-2xl mb-1'>School Graduate</p>
            <p>
              <FontAwesomeIcon
                icon={faBuilding}
                className='text-gray-400 mr-2'
              />
              N2 Public School
              <FontAwesomeIcon
                icon={faLocationDot}
                className='text-gray-400 ml-10 mr-2'
              />
              Kaspi
            </p>
            <ul className='list-disc list-inside text-slate-600 mt-3'>
              <li>Awarded with gold medal for successful graduation. </li>
              <li>Awarded with laptop in 9th grade for having high scores.</li>
            </ul>
          </div>
          <div className='flex flex-col items-end'>
            <p>
              <FontAwesomeIcon
                icon={faCalendar}
                className='text-gray-400 mr-2'
              />
              2007 - 2019
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
