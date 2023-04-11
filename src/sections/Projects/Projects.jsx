import React from 'react';
import { TributeScreen } from 'src/assets';
import { Project } from './components';
import { SectionTitle } from 'src/components';

const Projects = ({ projectsRef }) => {
  return (
    <div
      id='projects'
      className='flex flex-col justify-center items-center'
      ref={projectsRef}
    >
      <SectionTitle title='Projects' description="Things I've built so far" />
      <div className='flex gap-[3%] overflow-x-scroll w-full md:flex-wrap md:gap-y-10 md:justify-center md:overflow-auto'>
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
