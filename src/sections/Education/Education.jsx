import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCalendar,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { EducationItem } from './components';

const Education = ({ educationRef }) => {
  return (
    <div
      id='education'
      className='w-full flex flex-col items-center justify-center gap-5'
      ref={educationRef}
    >
      <h2 className='text-4xl font-bold mb-5'>Education</h2>
      <div className='bg-white w-full p-16'>
        <EducationItem
          title='BACHELOR OF ENGINEERING IN INFORMATICS'
          school='BTU • Business And Technology University'
          place='Tbilisi'
          period='Apr 2022 - Sep 2022'
          details={[
            'Learning with a 100% scholarship.',
            'Current GPA: 3.6',
            'Important courses covered: Calculus, Data structures and algorithms, HTML/CSS & Javascript, React, Linux, English B2 and C1 levels.',
          ]}
        />

        <hr className='my-10' />

        <EducationItem
          title='School Graduate'
          school='N2 Public School'
          place='Kaspi'
          period='2007 - 2019'
          details={[
            'Awarded with gold medal for successful graduation.',
            'Current GPA: 3.6',
            'Awarded with laptop after 9th grade for having high scores.',
          ]}
        />
      </div>
    </div>
  );
};

export default Education;
