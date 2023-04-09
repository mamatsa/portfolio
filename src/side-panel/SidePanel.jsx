import React from 'react';
import { ProfilePhoto } from 'src/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

const SidePanel = () => {
  const resumeDownloadHandler = async () => {
    const response = await fetch("Otar's Resume.pdf");
    const blob = await response.blob();
    // Creating new object of PDF file
    const fileURL = window.URL.createObjectURL(blob);
    // Setting various property values
    let alink = document.createElement('a');
    alink.href = fileURL;
    alink.download = "Otar's gitResume.pdf";
    alink.click();
  };

  return (
    <div className='fixed h-full w-2/12 bg-white flex flex-col items-center justify-between p-8 gap-3'>
      {/* Profile image */}
      <div className='relative'>
        <img
          src={ProfilePhoto}
          alt='Image'
          className='rounded-full max-w-[150px]'
        />
        <div className='absolute bottom-2 right-5 w-4 h-4 bg-green-500 rounded-full drop-shadow-md'></div>
      </div>

      {/* Name, position */}
      <div className='flex flex-col items-center'>
        <p className='text-lg font-medium text-amber-950 mb-1'>
          Otar Mamatsashvili
        </p>
        <p className='text-sm text-gray-500'>Front-End Developer</p>

        {/* Social links */}
        <div className='flex gap-3 mt-4'>
          <a href='https://github.com/mamatsa' target='_blank'>
            <FontAwesomeIcon
              icon={faGithub}
              size='xl'
              className='bg-amber-400 p-2 rounded-full'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/otar-mamatsashvili/'
            target='_blank'
            className='bg-amber-400 w-10 h-10 rounded-full flex justify-center items-center'
          >
            <FontAwesomeIcon icon={faLinkedin} size='xl' />
          </a>
          <a
            href='https://stackoverflow.com/users/12878671/otarius'
            target='_blank'
            className='bg-amber-400 w-10 h-10 rounded-full flex justify-center items-center'
          >
            <FontAwesomeIcon icon={faStackOverflow} size='xl' />
          </a>
        </div>
      </div>

      <div className='bg-gray-200 h-px w-full'></div>

      {/* Personal info */}
      <div className='w-full flex flex-col gap-2'>
        <div className='w-full flex justify-between items-center'>
          <p className='bg-amber-400 p-1'>Age:</p>
          <p>21</p>
        </div>
        <div className='w-full flex justify-between items-center'>
          <p className='bg-amber-400 p-1'>Address:</p>
          <p>Tbilisi, Georgia</p>
        </div>
        <div className='w-full flex justify-between items-center'>
          <p className='bg-amber-400 p-1'>Status:</p>
          <p className='text-green-500'>Open to work</p>
        </div>
      </div>
      <div className='bg-gray-200 h-px w-full'></div>

      {/* Languages */}
      <div className='w-full place-self-start'>
        <h3 className='text-lg font-medium'>Languages</h3>
        <div className='relative mt-2'>
          <p className='text-gray-500'>Georgian</p>
          <p className='absolute top-0 right-0 text-gray-500'>Native</p>
          {/* Progressbar */}
          <div className='w-full bg-gray-200 rounded-full'>
            <div
              className='bg-amber-400 p-0.5 rounded-full'
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>

        <div className='relative mt-2'>
          <p className='text-gray-500'>English</p>
          <p className='absolute top-0 right-0 text-gray-500'>B2</p>
          {/* Progressbar */}
          <div className='w-full bg-gray-200 rounded-full'>
            <div
              className='bg-amber-400 p-0.5 rounded-full'
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>
      </div>

      <div className='bg-gray-200 h-px w-full'></div>

      {/* Skills */}
      <div className='w-full place-self-start'>
        <h3 className='text-lg font-medium'>Main Skills</h3>
        <div className='relative mt-2'>
          <p className='text-gray-500'>HTML/CSS</p>
          <p className='absolute top-0 right-0 text-gray-500'>90%</p>
          {/* Progressbar */}
          <div className='w-full bg-gray-200 rounded-full'>
            <div
              className='bg-amber-400 p-0.5 rounded-full'
              style={{ width: '90%' }}
            ></div>
          </div>
        </div>

        <div className='relative mt-2'>
          <p className='text-gray-500'>Javascript</p>
          <p className='absolute top-0 right-0 text-gray-500'>80%</p>
          {/* Progressbar */}
          <div className='w-full bg-gray-200 rounded-full'>
            <div
              className='bg-amber-400 p-0.5 rounded-full'
              style={{ width: '80%' }}
            ></div>
          </div>
        </div>

        <div className='relative mt-2'>
          <p className='text-gray-500'>Typescript</p>
          <p className='absolute top-0 right-0 text-gray-500'>70%</p>
          {/* Progressbar */}
          <div className='w-full bg-gray-200 rounded-full'>
            <div
              className='bg-amber-400 p-0.5 rounded-full'
              style={{ width: '70%' }}
            ></div>
          </div>
        </div>

        <div className='relative mt-2'>
          <p className='text-gray-500'>MongoDB</p>
          <p className='absolute top-0 right-0 text-gray-500'>70%</p>
          {/* Progressbar */}
          <div className='w-full bg-gray-200 rounded-full'>
            <div
              className='bg-amber-400 p-0.5 rounded-full'
              style={{ width: '70%' }}
            ></div>
          </div>
        </div>
      </div>

      <div className='bg-gray-200 h-px w-full'></div>

      <button
        className='flex items-center justify-center gap-2 bg-amber-400 p-3 w-full text-sm font-medium'
        onClick={resumeDownloadHandler}
      >
        DOWNLOAD RESUME
        <FontAwesomeIcon icon={faDownload} />
      </button>
    </div>
  );
};

export default SidePanel;
