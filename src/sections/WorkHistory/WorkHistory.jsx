import React from 'react';
import { JobItem } from './components';

const WorkHistory = ({ workHistoryRef }) => {
  return (
    <div
      id='work-history'
      className='w-full flex flex-col items-center justify-center gap-5'
      ref={workHistoryRef}
    >
      <h2 className='text-4xl font-bold mb-5'>Work History</h2>
      <div className='bg-white w-full p-16'>
        <JobItem
          title='Full Stack Developer'
          company='redberry'
          place='Tbilisi'
          period='Apr 2022 - Sep 2022'
          workHours='Full Time'
          details={[
            'Learned programming principles and new emerging technologies.',
            'Created several production-ready applications with fluency in modern front-end and back-end frameworks.',
            'Worked under the mentorship of experienced web developers.',
          ]}
        />

        <hr className='my-10' />

        <JobItem
          title='Junior Front End Developer'
          company='Digital Landowners Society'
          place='Tbilisi'
          period='Jan 2022 - Mar 2022'
          workHours='Full Time'
          details={[
            'Coded using HTML, CSS and JavaScript to create responsive pages and components for the company website.',
            'Worked cooperatively in a team with business people, designers and developers in a deadline-driven environment.',
          ]}
        />
      </div>
    </div>
  );
};

export default WorkHistory;
