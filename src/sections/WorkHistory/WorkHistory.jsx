import React from 'react';
import { JobItem } from './components';
import { SectionTitle } from 'src/components';
import { useTranslation } from 'react-i18next';

const WorkHistory = ({ workHistoryRef, jobs }) => {
  const { t } = useTranslation();
  return (
    <div
      id='work-history'
      className='w-full flex flex-col items-center justify-center'
      ref={workHistoryRef}
    >
      <SectionTitle title={t('work.title')} />
      <div className='bg-white w-full p-6 sm:p-8 xl:p-12 2xl:p-16 dark:bg-zinc-800'>
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            position={job.position}
            company={job.company}
            location={job.location}
            period={job.period}
            workHours={job.workHours}
            details={job.details}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
