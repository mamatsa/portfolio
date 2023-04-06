import React from 'react';
import { Banner, TechStack, WorkHistory, Education } from './content-sections';

const Content = () => {
  return (
    <div className='mr-32 ml-80 h-full w-full px-10 bg-slate-200 flex flex-col items-center justify-start gap-32'>
      <Banner />
      <TechStack />
      <WorkHistory />
      <Education />
    </div>
  );
};

export default Content;
