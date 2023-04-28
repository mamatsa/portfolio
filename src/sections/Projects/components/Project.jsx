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
    <div className='bg-white rounded-lg w-2/3 md:w-[31%] dark:bg-zinc-800 flex flex-col justify-between'>
      <img src={image} alt='name' className='w-full rounded-t-lg' />
      <div className='flex flex-col h-full justify-between p-3 md:p-8'>
        <h3 className='text-lg mb-3 mx-6 whitespace-nowrap md:text-2xl md:mb-4 md:mx-0 dark:text-white'>
          {name}
        </h3>
        <p className='font-light text-sm mb-3 md:mb-5 md:text-lg dark:text-white'>
          {description}
        </p>
        <p className='text-sm md:text-base dark:text-white'>
          {t('projects.techStack')}:{' '}
          <span className='text-xs font-light md:text-sm dark:text-white'>
            {techStack}
          </span>
        </p>
        <div className='flex items-center justify-between mt-3 md:mt-5'>
          <a
            href={githubLink}
            target='_blank'
            className='underline flex items-center dark:no-underline'
          >
            <FontAwesomeIcon
              icon={faGithub}
              className='mr-1 xl:mr-2 dark:text-white'
            />
            <p className='hidden md:block dark:text-white'>
              {t('projects.viewCode')}
            </p>
          </a>
          <a
            href={siteLink}
            target='_blank'
            className={`underline flex items-center dark:no-underline ${
              !siteLink && 'pointer-events-none text-zinc-500'
            }`}
          >
            <FontAwesomeIcon
              icon={faLink}
              className='ml-10 mr-1 xl:mr-2 dark:text-white'
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
