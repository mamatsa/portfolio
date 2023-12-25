import { useState, useEffect } from 'react';
import { EducationItem } from './components';
import { SectionTitle } from 'src/components';
import { useTranslation } from 'react-i18next';

const Education = ({ educationRef, institutions }) => {
  const { t } = useTranslation();

  return (
    <div
      id='education'
      className='w-full flex flex-col items-center justify-center'
      ref={educationRef}
    >
      <SectionTitle title={t('education.title')} />
      <div className='bg-white w-full p-6 sm:p-8 xl:p-12 2xl:p-16 dark:bg-zinc-800'>
        {institutions.map((institution) => (
          <EducationItem
            key={institution.id}
            title={institution.title}
            school={institution.school}
            place={institution.place}
            period={institution.period}
            details={institution.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
