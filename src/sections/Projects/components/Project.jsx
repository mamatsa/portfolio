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
    <div className=' w-[31%] bg-white rounded-lg'>
      <img src={image} alt='name' className='w-full rounded-t-lg' />
      <div className='p-8'>
        <h3 className='text-2xl mb-4'>{name}</h3>
        <p className='font-light text-lg mb-5'>{description}</p>
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
