import React from 'react';
import { NavItem } from './components';
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
        <NavItem href='#home' icon={faHouse} isInViewport={homeIsInViewport} />
        <NavItem
          href='#tech-stack'
          icon={faLayerGroup}
          isInViewport={techStackIsInViewport && !homeIsInViewport}
        />
        <NavItem
          href='#work-history'
          icon={faBriefcase}
          isInViewport={workHistoryIsInViewport && !techStackIsInViewport}
        />
        <NavItem
          href='#education'
          icon={faUserGraduate}
          isInViewport={educationIsInViewport && !workHistoryIsInViewport}
        />
        <NavItem
          href='#projects'
          icon={faFeatherPointed}
          isInViewport={projectsIsInViewport && !educationIsInViewport}
        />
        <NavItem
          href='#contact'
          icon={faMessage}
          isInViewport={contactIsInViewport && !projectsIsInViewport}
        />
      </nav>
    </div>
  );
};

export default Navbar;
