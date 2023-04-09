import React from 'react';
import { TributeScreen } from 'src/assets';
import { Project } from './components';

const Projects = ({ projectsRef }) => {
  return (
    <div
      id='projects'
      className='flex flex-col justify-center items-center'
      ref={projectsRef}
    >
      <h2 className='text-2xl font-bold mb-2 md:text-4xl md:mb-5'>Projects</h2>
      <p className='text-slate-400 md:text-lg'>Things I’ve built so far</p>

      <div className='flex gap-[3%] my-4 overflow-x-scroll w-full md:flex-wrap md:my-8 md:gap-y-10 md:justify-center md:overflow-auto'>
        <Project
          image={TributeScreen}
          name='Tribute Page'
          description='Tribute page for Aleksandre Kartvelishvili, Georgian aircraft designer. One page application with simple styling and parallax scrolling. '
          techStack='HTML, CSS, Javascript'
          githubLink='https://github.com/mamatsa/tribute-page'
          siteLink='https://mamatsa.github.io/tribute-page/'
        />
        <Project
          image={TributeScreen}
          name='Tribute Page'
          description='Tribute page for Aleksandre Kartvelishvili, Georgian aircraft designer. One page application with simple styling and parallax scrolling. '
          techStack='HTML, CSS, Javascript'
          githubLink='https://github.com/mamatsa/tribute-page'
          siteLink='https://mamatsa.github.io/tribute-page/'
        />
        <Project
          image={TributeScreen}
          name='Tribute Page'
          description='Tribute page for Aleksandre Kartvelishvili, Georgian aircraft designer. One page application with simple styling and parallax scrolling. '
          techStack='HTML, CSS, Javascript'
          githubLink='https://github.com/mamatsa/tribute-page'
          siteLink='https://mamatsa.github.io/tribute-page/'
        />
        <Project
          image={TributeScreen}
          name='Tribute Page'
          description='Tribute page for Aleksandre Kartvelishvili, Georgian aircraft designer. One page application with simple styling and parallax scrolling. '
          techStack='HTML, CSS, Javascript'
          githubLink='https://github.com/mamatsa/tribute-page'
          siteLink='https://mamatsa.github.io/tribute-page/'
        />
        <Project
          image={TributeScreen}
          name='Tribute Page'
          description='Tribute page for Aleksandre Kartvelishvili, Georgian aircraft designer. One page application with simple styling and parallax scrolling. '
          techStack='HTML, CSS, Javascript'
          githubLink='https://github.com/mamatsa/tribute-page'
          siteLink='https://mamatsa.github.io/tribute-page/'
        />
      </div>
    </div>
  );
};

export default Projects;
