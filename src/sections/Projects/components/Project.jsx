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
      <div className='flex flex-col space-y-2 h-full justify-between p-3 md:p-5 md:space-y-3 xl:space-y-5 2xl:p-8'>
        {/* Name */}
        <h3 className='w-28 text-center text-lg mx-6 whitespace-nowrap md:text-start md:w-auto 2xl:text-2xl md:mx-0 dark:text-white'>
          {name}
        </h3>
        {/* Description */}
        <p className='font-light text-sm 2xl:text-lg dark:text-white'>
          {description}
        </p>
        {/* Tech Stack */}
        <p className='text-sm 2xl:text-base dark:text-white'>
          {t('projects.techStack')}:{' '}
          <span className='text-xs font-light 2xl:text-sm dark:text-white'>
            {techStack}
          </span>
        </p>

        <div className='flex items-center justify-between'>
          {/* Source Code */}
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
          {/* Live URL */}
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
