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
    <div className='bg-white rounded-lg md:w-[31%]'>
      <img src={image} alt='name' className='w-full rounded-t-lg' />
      <div className='p-3 md:p-8'>
        <h3 className='text-lg mb-4 md:text-2xl'>{name}</h3>
        <p className='font-light text mb-5 md:text-lg'>{description}</p>
        <p>
          Tech stack: <span className='text-sm font-light'>{techStack}</span>
        </p>
        <div className='flex items-center justify-between mt-5'>
          <div>
            <a href={githubLink} className='underline'>
              <FontAwesomeIcon icon={faGithub} className=' mr-1' />
              View Code
            </a>
          </div>
          <div>
            <a href={siteLink} className='underline'>
              <FontAwesomeIcon icon={faLink} className='ml-10 mr-1' />
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
