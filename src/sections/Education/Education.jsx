import React from 'react';
import { EducationItem } from './components';
import { SectionTitle } from 'src/components';

const Education = ({ educationRef }) => {
  return (
    <div
      id='education'
      className='w-full flex flex-col items-center justify-center'
      ref={educationRef}
    >
      <SectionTitle title='Education' />
      <div className='bg-white w-full p-6 sm:p-8 xl:p-16'>
        <EducationItem
          title='BACHELOR OF ENGINEERING IN INFORMATICS'
          school='BTU'
          place='Tbilisi'
          period='Apr 2022 - Sep 2022'
          details={[
            'Learning with a 100% scholarship.',
            'Current GPA: 3.6',
            'Important courses covered: Calculus, Data structures and algorithms, HTML/CSS & Javascript, React, Linux, English B2 and C1 levels.',
          ]}
        />

        <hr className='my-5 lg:my-10' />

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
