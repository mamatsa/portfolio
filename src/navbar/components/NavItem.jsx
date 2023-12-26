import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = ({ href, isInViewport, icon, onChoose }) => {
  return (
    <a
      onClick={onChoose}
      href={href}
      className={`p-3 rounded-full scale-90 2xl:scale-100 ${
        isInViewport ? 'bg-amber-400 ' : 'bg-slate-200 md:hover:bg-amber-100'
      }`}
    >
      <FontAwesomeIcon icon={icon} size='xl' />
    </a>
  );
};

export default NavItem;
