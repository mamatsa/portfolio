import React from 'react';
import { Project } from './components';
import { SectionTitle } from 'src/components';
import { useTranslation } from 'react-i18next';

const Projects = ({ projectsRef, projectExamples }) => {
  const { t } = useTranslation();
  return (
    <div
      id='projects'
      className='flex flex-col justify-center items-center'
      ref={projectsRef}
    >
      <SectionTitle
        title={t('projects.title')}
        description={t('projects.description')}
      />
      <div className='pl-4 flex gap-[3%] overflow-x-scroll w-full md:flex-wrap md:gap-y-10 md:justify-center md:overflow-auto'>
        {projectExamples.map((project) => (
          <Project
            key={project.id}
            image={project.imgSource}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            siteLink={project.siteLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
