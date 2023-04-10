import React, { useState } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Button, SeparatorLine } from 'src/components';
import { ProfilePicture, MediaLink, ProgressBar, Status } from './components';

const SidePanel = () => {
  const [panelIsOpen, setPanelIsOpen] = useState(false);

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
    <>
      <div
        className={`fixed z-10 w-full h-full backdrop-blur-sm backdrop-brightness-75 ${
          !panelIsOpen && 'hidden'
        }`}
        onClick={() => setPanelIsOpen(false)}
      ></div>
      <button
        className={`fixed z-30 bottom-[20%] -left-11 rotate-90 bg-amber-400 px-4 py-3 text-sm rounded-t-xl xl:hidden ${
          panelIsOpen && 'hidden'
        }`}
        onClick={() => setPanelIsOpen(true)}
      >
        Resume Panel
      </button>
      <div
        className={`fixed z-20 h-full w-2/12 bg-white flex-col items-center justify-between p-8 gap-3 xl:flex ${
          panelIsOpen ? 'flex w-4/5 xl:w-2/12' : 'hidden'
        }`}
      >
        <button
          className={`absolute z-30 bottom-[20%] -right-20 rotate-90 bg-amber-400 px-4 py-2 text-sm rounded-t-xl xl:hidden ${
            !panelIsOpen && 'hidden'
          }`}
          onClick={() => setPanelIsOpen(false)}
        >
          Resume Panel
        </button>
        <ProfilePicture />

        {/* Name, position */}
        <div className='flex flex-col items-center'>
          <p className='text-lg font-medium text-amber-950 mb-1'>
            Otar Mamatsashvili
          </p>
          <p className='text-sm text-gray-500'>Front-End Developer</p>

          {/* Social links */}
          <div className='flex gap-3 mt-4'>
            <MediaLink href='https://github.com/mamatsa' icon={faGithub} />
            <MediaLink
              href='https://www.linkedin.com/in/otar-mamatsashvili/'
              icon={faLinkedin}
            />
            <MediaLink
              href='https://stackoverflow.com/users/12878671/otarius'
              icon={faStackOverflow}
            />
          </div>
        </div>

        <SeparatorLine />

        {/* Personal info */}
        <div className='w-full flex flex-col gap-2'>
          <Status label='Age:' value='21' />
          <Status label='Address:' value='Tbilisi, Georgia' />
          <Status
            label='Status:'
            value='Open to work'
            valueColor='text-green-500'
          />
        </div>

        <SeparatorLine />

        {/* Languages */}
        <div className='w-full place-self-start'>
          <h3 className='text-lg font-medium'>Languages</h3>
          <ProgressBar title='Georgian' progressTitle='Native' progress='100' />
          <ProgressBar title='English' progressTitle='B2' progress='75' />
        </div>

        <SeparatorLine />

        {/* Skills */}
        <div className='w-full place-self-start'>
          <h3 className='text-lg font-medium'>Main Skills</h3>
          <ProgressBar title='HTML/CSS' progressTitle='90%' progress='90' />
          <ProgressBar title='Javascript' progressTitle='80%' progress='80' />
          <ProgressBar title='Typescript' progressTitle='70%' progress='70' />
          <ProgressBar title='MongoDB' progressTitle='70%' progress='70' />
        </div>

        <SeparatorLine />

        <Button
          text='DOWNLOAD RESUME'
          icon={faDownload}
          clickHandler={resumeDownloadHandler}
          wide={true}
          small={true}
        />
      </div>
    </>
  );
};

export default SidePanel;
