import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = ({ href, isInViewport, icon }) => {
  return (
    <a
      href={href}
      className={`p-3 rounded-full scale-90 2xl:scale-100 ${
        isInViewport ? 'bg-amber-400 ' : 'bg-slate-200 '
      }`}
    >
      <FontAwesomeIcon icon={icon} size='xl' />
    </a>
  );
};

export default NavItem;
