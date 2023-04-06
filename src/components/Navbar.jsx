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

const Navbar = () => {
  return (
    <div className="h-full w-[120px] bg-slate-100 flex flex-col items-center justify-start py-10">
      <FontAwesomeIcon icon={faSun} size="xl" className="mb-40" />

      <div className="flex flex-col items-center justify center gap-6">
        <div className="p-3 bg-amber-400 rounded-full">
          <FontAwesomeIcon icon={faHouse} size="xl" />
        </div>
        <div className="p-3 bg-slate-200 rounded-full hover:bg-amber-200">
          <FontAwesomeIcon icon={faLayerGroup} size="xl" />
        </div>
        <div className="p-3 bg-slate-200 rounded-full hover:bg-amber-200">
          <FontAwesomeIcon icon={faBriefcase} size="xl" />
        </div>
        <div className="p-3 bg-slate-200 rounded-full hover:bg-amber-200">
          <FontAwesomeIcon icon={faUserGraduate} size="xl" />
        </div>
        <div className="p-3 bg-slate-200 rounded-full hover:bg-amber-200">
          <FontAwesomeIcon icon={faFeatherPointed} size="xl" />
        </div>
        <div className="p-3 bg-slate-200 rounded-full hover:bg-amber-200">
          <FontAwesomeIcon icon={faMessage} size="xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
