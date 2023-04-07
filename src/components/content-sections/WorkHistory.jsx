import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCalendar,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const WorkHistory = ({ workHistoryRef }) => {
  return (
    <div
      id='work-history'
      className='w-full flex flex-col items-center justify-center gap-5'
      ref={workHistoryRef}
    >
      <h2 className='text-4xl font-bold mb-5'>Work History</h2>
      <div className='bg-white w-full p-16'>
        {/* 1 */}
        <div className='w-full flex justify-between items-start'>
          <div>
            <p className='text-2xl mb-1'>Full Stack Developer</p>
            <p>
              <FontAwesomeIcon
                icon={faBuilding}
                className='text-gray-400 mr-2'
              />
              Redberry
              <FontAwesomeIcon
                icon={faLocationDot}
                className='text-gray-400 ml-10 mr-2'
              />
              Tbilisi
            </p>
            <ul className='list-disc list-inside text-slate-600 mt-3'>
              <li>
                Learned programming principles and new emerging technologies.
              </li>
              <li>
                Created several production-ready applications with fluency in
                modern front-end and back-end frameworks.
              </li>
              <li>
                Worked under the mentorship of experienced web developers.
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-end'>
            <p className='bg-amber-400 px-3 py-1 rounded-sm mb-1'>Full Time</p>
            <p>
              <FontAwesomeIcon
                icon={faCalendar}
                className='text-gray-400 mr-2'
              />
              Apr 2022 - Sep 2022
            </p>
          </div>
        </div>
        <hr className='my-10' />
        {/* 2 */}
        <div className='w-full flex justify-between items-start'>
          <div>
            <p className='text-2xl mb-1'>Junior Front End Developer</p>
            <p>
              <FontAwesomeIcon
                icon={faBuilding}
                className='text-gray-400 mr-2'
              />
              Digital Landowners Society
              <FontAwesomeIcon
                icon={faLocationDot}
                className='text-gray-400 ml-10 mr-2'
              />
              Remote
            </p>
            <ul className='list-disc list-inside text-slate-600 mt-3'>
              <li>
                Coded using HTML, CSS and JavaScript to create responsive pages
                and components for the company website.
              </li>
              <li>
                Worked cooperatively in a team with business people, designers
                and developers in a deadline-driven environment.
              </li>
              <li>
                Understood and worked with the Git version control system.
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-end'>
            <p className='bg-amber-400 px-3 py-1 rounded-sm mb-1'>Full Time</p>
            <p>
              <FontAwesomeIcon
                icon={faCalendar}
                className='text-gray-400 mr-2'
              />
              Jan 2022 - Mar 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
