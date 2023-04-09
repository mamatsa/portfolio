import React, { useRef, useState } from 'react';
import {
  Banner,
  TechStack,
  WorkHistory,
  Education,
  Projects,
  Contact,
} from './components/content-sections';
import useIsInViewport from './hooks/useIntersection';
import { InfoPanel, Navbar } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [successMessage, setSuccessMessage] = useState('');
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
    <div className='bg-slate-200 flex h-full w-full justify-between items-stretch'>
      <InfoPanel />

      <div className='relative mr-32 ml-80 h-full w-full px-10 bg-slate-200'>
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
        <div className='space-y-32'>
          <Banner homeRef={homeRef} />
          <TechStack techStackRef={techStackRef} />
          <WorkHistory workHistoryRef={workHistoryRef} />
          <Education educationRef={educationRef} />
          <Projects projectsRef={projectsRef} />
          <Contact
            contactRef={contactRef}
            messageSendHandler={messageSendHandler}
          />
          <div className='w-full text-xl py-3 bg-amber-400 flex justify-center items-center'>
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
      />
    </div>
  );
}

export default App;
