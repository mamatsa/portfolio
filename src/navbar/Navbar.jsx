import React, { useState } from 'react';
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
  darkModeToggle,
  darkModeOn,
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [burgerIsVisible, setBurgerIsVisible] = useState(true);

  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      setBurgerIsVisible(true);
    } else {
      setBurgerIsVisible();
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <>
      {/* Burger Menu Icon */}
      <FontAwesomeIcon
        icon={faBars}
        className='fixed top-5 right-2 text-amber-400 bg-slate-100 p-4 rounded-full w-5 h-5 cursor-pointer xl:hidden'
        style={{ top: burgerIsVisible ? '10px' : '-100px' }}
        onClick={() => setNavIsOpen(true)}
      />

      {/* Backdrop */}
      <div
        className={`fixed w-full h-full backdrop-blur-sm backdrop-brightness-75 ${
          !navIsOpen && 'hidden'
        }`}
        onClick={() => setNavIsOpen(false)}
      ></div>

      {/* Navbar */}
      <div
        className={`fixed right-0 top-0 h-full px-9 bg-slate-100  flex-col items-center justify-start py-10 dark:bg-neutral-800 ${
          navIsOpen ? 'flex' : 'hidden xl:flex'
        }`}
      >
        <FontAwesomeIcon
          icon={darkModeOn ? faMoon : faSun}
          size='xl'
          className='mb-40 cursor-pointer dark:text-white'
          onClick={darkModeToggle}
        />

        <nav className='flex flex-col items-center justify center gap-4 xl:gap-6'>
          <NavItem
            href='#home'
            icon={faHouse}
            isInViewport={homeIsInViewport}
          />
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
    </>
  );
};

export default Navbar;
