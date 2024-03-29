import React, { useState } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Button, SeparatorLine } from 'src/components';
import {
  ProfilePicture,
  MediaLink,
  ProgressBar,
  Status,
  Skill,
} from './components';
import { useTranslation } from 'react-i18next';

const SidePanel = () => {
  const { i18n, t } = useTranslation();
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  const age = new Date().getFullYear() - 2001;

  const resumeDownloadHandler = async () => {
    let response;
    if (i18n.language === 'ka') {
      response = await fetch('ოთარის რეზიუმე.pdf');
    } else {
      response = await fetch("Otar's Resume.pdf");
    }
    const blob = await response.blob();
    // Creating new object of PDF file
    const fileURL = window.URL.createObjectURL(blob);
    // Setting various property values
    let alink = document.createElement('a');
    alink.href = fileURL;
    if (i18n.language === 'ka') {
      alink.download = 'ოთარის რეზიუმე.pdf';
    } else {
      alink.download = "Otar's Resume.pdf";
    }
    alink.click();
  };

  return (
    <div>
      {/* Backdrop */}
      <div
        className={`fixed z-10 w-full h-lvh backdrop-blur-sm backdrop-brightness-75 xl:hidden ${
          !panelIsOpen && 'hidden'
        }`}
        onClick={() => setPanelIsOpen(false)}
      ></div>

      {/* Button for opening pannel on mobile viewport */}
      <button
        className={`fixed z-30 bottom-[30%] left-0 origin-bottom-left rotate-90 bg-amber-200 px-4 pb-1 pt-2 text-sm font-light rounded-t-xl border-[1px] border-amber-400 xl:hidden ${
          panelIsOpen && 'hidden'
        }`}
        onClick={() => setPanelIsOpen(true)}
      >
        {t('panel.title')}
      </button>

      <div
        className={`fixed z-20 h-dvh bg-white flex-col items-center justify-between p-4 gap-2 xl:flex 2xl:p-8 2xl:gap-3 dark:bg-zinc-800 ${
          panelIsOpen ? 'flex' : 'hidden'
        }`}
      >
        {/* Button for closing pannel on mobile viewport */}
        <button
          className={`h-[36px] absolute bottom-[5%] -right-[37px] origin-top-right rotate-90 bg-amber-400 px-4 py-2 text-sm font-light rounded-t-xl xl:hidden ${
            !panelIsOpen && 'hidden'
          }`}
          onClick={() => setPanelIsOpen(false)}
        >
          {t('panel.title')}
        </button>

        {/* Profile Image */}
        <ProfilePicture />

        {/* Name, position */}
        <div className='flex flex-col items-center'>
          <h3 className='font-medium text-amber-950 mb-1 2xl:text-lg dark:text-white'>
            {t('panel.name')}
          </h3>
          <p className='text-xs text-gray-500 2xl:text-sm'>
            {t('panel.profession')}
          </p>

          {/* Social links */}
          <div className='flex gap-1 mt-1 2xl:mt-4 2xl:gap-3'>
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
          <Status label={t('panel.ageLabel')} value={age} />
          <Status label={t('panel.addressLabel')} value={t('panel.address')} />
          <Status
            label={t('panel.statusLabel')}
            value={t('panel.status')}
            valueColor='text-green-500'
          />
        </div>

        <SeparatorLine />

        {/* Languages */}
        <div className='w-full place-self-start'>
          <h3 className='font-medium 2xl:text-lg dark:text-white '>
            {t('panel.languagesLabel')}
          </h3>
          <ProgressBar
            title={t('panel.georgian')}
            progressTitle={t('panel.native')}
            progress='100'
          />
          <ProgressBar
            title={t('panel.english')}
            progressTitle='B2'
            progress='75'
          />
        </div>

        <SeparatorLine />

        {/* Skills */}
        <div className='w-full place-self-start'>
          <h3 className='font-medium mb-2 2xl:text-lg dark:text-white '>
            {t('panel.skillsLabel')}
          </h3>
          <div className='flex flex-wrap w-[200px] gap-1 text-xs 2xl:w-[220px] 2xl:text-sm'>
            <Skill title='HTML' />
            <Skill title='CSS' />
            <Skill title='JavaScript' />
            <Skill title='TypeScript' />
            <Skill title='React' />
          </div>
        </div>

        <SeparatorLine />

        <Button
          text={t('panel.downloadResume')}
          icon={faDownload}
          clickHandler={resumeDownloadHandler}
          wide={true}
          small={true}
        />
      </div>
    </div>
  );
};

export default SidePanel;
