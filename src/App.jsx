import React, { useRef, useState } from 'react';
import Navbar from 'src/navbar';
import SidePanel from 'src/side-panel';
import {
  Banner,
  TechStack,
  WorkHistory,
  Education,
  Projects,
  Contact,
} from 'src/sections';
import { useIsInViewport } from 'src/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [successMessage, setSuccessMessage] = useState('');
  const [darkModeOn, setDarkModeOn] = useState(false);

  const darkModeToggle = () => {
    setDarkModeOn((prevState) => !prevState);
    console.log(darkModeOn);
  };

  const messageSendHandler = (success) => {
    if (success) {
      setSuccessMessage('success');
    } else {
      setSuccessMessage('fail');
    }
  };
  const homeRef = useRef(null);
  const techStackRef = useRef(null);
  const workHistoryRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const homeIsInViewport = useIsInViewport(homeRef);
  const techStackIsInViewport = useIsInViewport(techStackRef);
  const workHistoryIsInViewport = useIsInViewport(workHistoryRef);
  const educationIsInViewport = useIsInViewport(educationRef);
  const projectsIsInViewport = useIsInViewport(projectsRef);
  const contactIsInViewport = useIsInViewport(contactRef);

  return (
    <div
      className={`bg-slate-200 h-full w-full flex justify-between items-stretch ${
        darkModeOn && 'dark'
      }`}
    >
      <SidePanel />

      <div className='relative h-full w-full bg-slate-200 xl:mr-28 xl:ml-72 xl:px-16 dark:bg-zinc-900'>
        {successMessage && (
          <div className='sticky top-0 w-full'>
            <p
              className={`${
                successMessage === 'success' ? 'bg-green-500' : 'bg-red-500'
              } flex items-center justify-center py-2`}
            >
              {successMessage === 'success'
                ? 'Message sent successfully!'
                : 'Failed!'}
            </p>
            <FontAwesomeIcon
              icon={faXmark}
              className='absolute right-5 top-2 hover:scale-125 cursor-pointer'
              onClick={() => setSuccessMessage('')}
            />
          </div>
        )}
        <div className='space-y-20 sm:px-16 lg:space-y-32 xl:px-0 xl:space-y-40'>
          <Banner homeRef={homeRef} />
          <TechStack techStackRef={techStackRef} />
          <WorkHistory workHistoryRef={workHistoryRef} />
          <Education educationRef={educationRef} />
          <Projects projectsRef={projectsRef} />
          <Contact
            contactRef={contactRef}
            messageSendHandler={messageSendHandler}
          />
          <div className='w-full text py-3 bg-amber-400 flex justify-center items-center lg:text-xl'>
            The End
          </div>
        </div>
      </div>

      <Navbar
        homeIsInViewport={homeIsInViewport}
        techStackIsInViewport={techStackIsInViewport}
        workHistoryIsInViewport={workHistoryIsInViewport}
        educationIsInViewport={educationIsInViewport}
        projectsIsInViewport={projectsIsInViewport}
        contactIsInViewport={contactIsInViewport}
        darkModeToggle={darkModeToggle}
        darkModeOn={darkModeOn}
      />
    </div>
  );
}

export default App;
