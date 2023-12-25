import React from 'react';
import { JobItem } from './components';
import { SectionTitle } from 'src/components';
import { useTranslation } from 'react-i18next';

const WorkHistory = ({ workHistoryRef }) => {
  const { t } = useTranslation();
  return (
    <div
      id='work-history'
      className='w-full flex flex-col items-center justify-center'
      ref={workHistoryRef}
    >
      <SectionTitle title={t('work.title')} />
      <div className='bg-white w-full p-6 sm:p-8 xl:p-12 2xl:p-16 dark:bg-zinc-800'>
        <JobItem
          position={t('work.job1.position')}
          company={t('work.job1.company')}
          location={t('work.job1.location')}
          period={t('work.job1.period')}
          workHours={t('work.job1.workHours')}
          details={t('work.job1.details')}
        />

        <hr className='my-5 xl:my-10' />

        <JobItem
          position={t('work.job2.position')}
          company={t('work.job2.company')}
          location={t('work.job2.location')}
          period={t('work.job2.period')}
          workHours={t('work.job2.workHours')}
          details={t('work.job2.details')}
        />
      </div>
    </div>
  );
};

export default WorkHistory;
