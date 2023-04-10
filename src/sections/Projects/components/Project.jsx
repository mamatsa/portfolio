import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({
  image,
  name,
  description,
  techStack,
  githubLink,
  siteLink,
}) => {
  return (
    <div className='bg-white rounded-lg w-2/3 md:w-[31%]'>
      <img src={image} alt='name' className='w-full rounded-t-lg' />
      <div className='p-3 md:p-8'>
        <h3 className='text-lg mb-3 mx-6 whitespace-nowrap md:text-2xl md:mb-4'>
          {name}
        </h3>
        <p className='font-light text-sm mb-3 md:mb-5 md:text-lg'>
          {description}
        </p>
        <p className='text-sm md:text-base'>
          Tech stack:
          <span className='text-xs font-light md:text-sm'>{techStack}</span>
        </p>
        <div className='flex items-center justify-between mt-3 md:mt-5'>
          <a href={githubLink} className='underline flex items-center'>
            <FontAwesomeIcon icon={faGithub} className='mr-1' />
            <p className='hidden md:block'>View Code</p>
          </a>
          <a href={siteLink} className='underline flex items-center'>
            <FontAwesomeIcon icon={faLink} className='ml-10 mr-1' />
            <p className='hidden md:block'>Live Preview</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
