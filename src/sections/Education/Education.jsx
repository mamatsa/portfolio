import React from 'react';
import { EducationItem } from './components';
import { SectionTitle } from 'src/components';
import { useTranslation } from 'react-i18next';

const Education = ({ educationRef }) => {
  const { t } = useTranslation();
  return (
    <div
      id='education'
      className='w-full flex flex-col items-center justify-center'
      ref={educationRef}
    >
      <SectionTitle title={t('education.title')} />
      <div className='bg-white w-full p-6 sm:p-8 xl:p-16 dark:bg-zinc-800'>
        <EducationItem
          title={t('education.school1.title')}
          school={t('education.school1.school')}
          place={t('education.school1.place')}
          period={t('education.school1.period')}
          details={t('education.school1.details')}
        />

        <hr className='my-5 lg:my-10' />

        <EducationItem
          title={t('education.school2.title')}
          school={t('education.school2.school')}
          place={t('education.school2.place')}
          period={t('education.school2.period')}
          details={t('education.school2.details')}
        />
      </div>
    </div>
  );
};

export default Education;
