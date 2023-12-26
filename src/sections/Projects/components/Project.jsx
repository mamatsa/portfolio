import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Project = ({
  image,
  name,
  description,
  techStack,
  githubLink,
  siteLink,
}) => {
  const { t } = useTranslation();

  return (
    <div className='bg-white rounded-lg shadow-md md:w-[31%] dark:bg-zinc-800 flex flex-col justify-between'>
      <img src={image} alt='name' className='w-full rounded-t-lg' />
      <div className='flex flex-col h-full justify-between p-3 md:p-8'>
        <h3 className='w-28 text-center text-lg mb-3 mx-6 whitespace-nowrap md:text-start md:w-auto 2xl:text-2xl md:mb-4 md:mx-0 dark:text-white'>
          {name}
        </h3>
        <p className='font-light text-sm mb-3 2xl:mb-5 2xl:text-lg dark:text-white'>
          {description}
        </p>
        <p className='text-sm 2xl:text-base dark:text-white'>
          {t('projects.techStack')}:{' '}
          <span className='text-xs font-light 2xl:text-sm dark:text-white'>
            {techStack}
          </span>
        </p>
        <div className='flex items-center justify-between mt-3 xl:mt-5'>
          <a
            href={githubLink}
            target='_blank'
            className='underline flex items-center md:hover:scale-105 dark:no-underline'
          >
            <FontAwesomeIcon
              icon={faGithub}
              className='mr-1 xl:mr-2 scale-125 md:scale-100 dark:text-white'
            />
            <p className='hidden md:block text-xs 2xl:text-base dark:text-white'>
              {t('projects.viewCode')}
            </p>
          </a>
          <a
            href={siteLink}
            target='_blank'
            className={`underline flex items-center text-xs 2xl:text-base dark:no-underline ${
              siteLink
                ? 'md:hover:scale-105'
                : 'pointer-events-none text-zinc-500'
            }`}
          >
            <FontAwesomeIcon
              icon={faLink}
              className='ml-10 mr-1 scale-125 md:scale-100 xl:mr-2 dark:text-white'
            />
            <p className='hidden md:block dark:text-white'>
              {t('projects.livePreview')}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
