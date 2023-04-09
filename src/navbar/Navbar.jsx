import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faHouse,
  faLayerGroup,
  faBriefcase,
  faUserGraduate,
  faFeatherPointed,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({
  homeIsInViewport,
  techStackIsInViewport,
  workHistoryIsInViewport,
  educationIsInViewport,
  contactIsInViewport,
  projectsIsInViewport,
}) => {
  return (
    <div className='fixed right-0 top-0 h-full w-[120px] bg-slate-100 flex flex-col items-center justify-start py-10'>
      <FontAwesomeIcon icon={faSun} size='xl' className='mb-40' />

      <nav className='flex flex-col items-center justify center gap-6'>
        <a
          href='#home'
          className={`p-3 rounded-full ${
            homeIsInViewport ? 'bg-amber-400 ' : 'bg-slate-200 '
          }`}
        >
          <FontAwesomeIcon icon={faHouse} size='xl' />
        </a>
        <a
          href='#tech-stack'
          className={`p-3 rounded-full ${
            techStackIsInViewport && !homeIsInViewport
              ? 'bg-amber-400 '
              : 'bg-slate-200 '
          }`}
        >
          <FontAwesomeIcon icon={faLayerGroup} size='xl' />
        </a>
        <a
          href='#work-history'
          className={`p-3 rounded-full ${
            workHistoryIsInViewport && !techStackIsInViewport
              ? 'bg-amber-400 '
              : 'bg-slate-200 '
          }`}
        >
          <FontAwesomeIcon icon={faBriefcase} size='xl' />
        </a>
        <a
          href='#education'
          className={`p-3 rounded-full ${
            educationIsInViewport && !workHistoryIsInViewport
              ? 'bg-amber-400 '
              : 'bg-slate-200 '
          }`}
        >
          <FontAwesomeIcon icon={faUserGraduate} size='xl' />
        </a>
        <a
          href='#projects'
          className={`p-3 rounded-full ${
            projectsIsInViewport && !educationIsInViewport
              ? 'bg-amber-400 '
              : 'bg-slate-200 '
          }`}
        >
          <FontAwesomeIcon icon={faFeatherPointed} size='xl' />
        </a>
        <a
          href='#contact'
          className={`p-3 rounded-full ${
            contactIsInViewport && !projectsIsInViewport
              ? 'bg-amber-400 '
              : 'bg-slate-200 '
          }`}
        >
          <FontAwesomeIcon icon={faMessage} size='xl' />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
