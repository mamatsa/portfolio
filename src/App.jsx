import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsInViewport, useDarkMode } from 'src/hooks';
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

function App() {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useDarkMode();

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
      className={`bg-slate-200 h-full w-full flex xl:grid xl:grid-cols-[210px_1fr_110px] 2xl:grid-cols-[280px_1fr_110px] ${
        darkMode && 'dark'
      }`}
    >
      <SidePanel />

      <div className='space-y-20 h-full w-full bg-slate-200 sm:px-16 lg:space-y-32 2xl:space-y-40 dark:bg-zinc-900'>
        <Banner homeRef={homeRef} />
        <TechStack techStackRef={techStackRef} />
        <WorkHistory workHistoryRef={workHistoryRef} jobs={t('work.jobs')} />
        <Education
          educationRef={educationRef}
          institutions={t('education.institutions')}
        />
        <Projects
          projectsRef={projectsRef}
          projectExamples={t('projects.examples')}
        />
        <Contact contactRef={contactRef} />
        <div className='w-full text py-3 bg-amber-400 flex justify-center items-center 2xl:text-xl'>
          {t('footerText')}
        </div>
      </div>

      <Navbar
        homeIsInViewport={homeIsInViewport}
        techStackIsInViewport={techStackIsInViewport}
        workHistoryIsInViewport={workHistoryIsInViewport}
        educationIsInViewport={educationIsInViewport}
        projectsIsInViewport={projectsIsInViewport}
        contactIsInViewport={contactIsInViewport}
        onDarkModeToggle={toggleDarkMode}
        darkModeOn={darkMode}
      />
    </div>
  );
}

export default App;
