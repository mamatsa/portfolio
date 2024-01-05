import React, { useState } from 'react';
import { NavItem, LanguageChanger } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faHouse,
  faLayerGroup,
  faBriefcase,
  faUserGraduate,
  faFeatherPointed,
  faMessage,
  faBars,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({
  homeIsInViewport,
  techStackIsInViewport,
  workHistoryIsInViewport,
  educationIsInViewport,
  contactIsInViewport,
  projectsIsInViewport,
  onDarkModeToggle,
  darkMode,
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleNavigationClose = () => {
    setNavIsOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed w-full h-lvh backdrop-blur-sm backdrop-brightness-75 xl:hidden ${
          !navIsOpen && 'hidden'
        }`}
        onClick={() => setNavIsOpen(false)}
      ></div>

      <div>
        {/* Burger Menu Icon */}
        <FontAwesomeIcon
          icon={faBars}
          className='fixed top-5 right-2 text-amber-400 bg-slate-100 p-4 rounded-full w-5 h-5 cursor-pointer xl:hidden dark:bg-zinc-600'
          onClick={() => setNavIsOpen(true)}
        />

        {/* Navbar */}
        <div
          className={`fixed right-0 top-0 h-dvh px-9 bg-slate-100  flex-col items-center justify-between py-10 dark:bg-neutral-800 ${
            navIsOpen ? 'flex' : 'hidden xl:flex'
          }`}
        >
          <FontAwesomeIcon
            icon={darkMode ? faMoon : faSun}
            size='xl'
            className='cursor-pointer md:hover:scale-110 dark:text-white'
            onClick={onDarkModeToggle}
          />

          <nav className='flex flex-col items-center justify center gap-4 2xl:gap-6'>
            <NavItem
              href='#home'
              icon={faHouse}
              isInViewport={homeIsInViewport}
              onChoose={handleNavigationClose}
            />
            <NavItem
              href='#tech-stack'
              icon={faLayerGroup}
              isInViewport={techStackIsInViewport && !homeIsInViewport}
              onChoose={handleNavigationClose}
            />
            <NavItem
              href='#work-history'
              icon={faBriefcase}
              isInViewport={workHistoryIsInViewport && !techStackIsInViewport}
              onChoose={handleNavigationClose}
            />
            <NavItem
              href='#education'
              icon={faUserGraduate}
              isInViewport={educationIsInViewport && !workHistoryIsInViewport}
              onChoose={handleNavigationClose}
            />
            <NavItem
              href='#projects'
              icon={faFeatherPointed}
              isInViewport={projectsIsInViewport && !educationIsInViewport}
              onChoose={handleNavigationClose}
            />
            <NavItem
              href='#contact'
              icon={faMessage}
              isInViewport={contactIsInViewport && !projectsIsInViewport}
              onChoose={handleNavigationClose}
            />
          </nav>
          <LanguageChanger />
        </div>
      </div>
    </>
  );
};

export default Navbar;
