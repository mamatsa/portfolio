import React from 'react';
import { TributeScreen } from '../../assets';
import Project from './Project';

const Projects = ({ projectsRef }) => {
  return (
    <div
      id='projects'
      className='flex flex-col justify-center items-center'
      ref={projectsRef}
    >
      <h2 className='text-4xl font-bold mb-5'>Projects</h2>
      <p className='text-slate-400 text-lg'>Things I’ve built so far</p>

      <div className='flex flex-wrap items-center justify-center gap-[3%] gap-y-10 my-8'>
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
