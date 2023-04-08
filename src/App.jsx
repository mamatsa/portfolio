import React, { useRef } from 'react';
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

function App() {
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

      <div className='mr-32 ml-80 h-full w-full px-10 bg-slate-200 flex flex-col items-center justify-start gap-32'>
        <Banner homeRef={homeRef} />
        <TechStack techStackRef={techStackRef} />
        <WorkHistory workHistoryRef={workHistoryRef} />
        <Education educationRef={educationRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
        <div className='w-full text-xl py-3 bg-amber-400 flex justify-center items-center'>
          The End
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
