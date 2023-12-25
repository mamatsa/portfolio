import React from 'react';
import {
  TributeScreen,
  CoronaScreen,
  FolksoulScreen,
  QuestionnaireScreen,
  FolksoulAPIScreen,
  CompanyAPI,
  JobSurvey,
  TodoScreen,
} from 'src/assets';
import { Project } from './components';
import { SectionTitle } from 'src/components';
import { useTranslation } from 'react-i18next';

const Projects = ({ projectsRef }) => {
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
      <div className='ml-4 flex gap-[3%] overflow-x-scroll w-full md:flex-wrap md:gap-y-10 md:justify-center md:overflow-auto'>
        <Project
          image={FolksoulScreen}
          name='Folksoul'
          description={t('projects.description1')}
          techStack='React, Typescript, Tailwind, Axios'
          githubLink='https://github.com/mamatsa/folksoul-front'
          siteLink=''
        />
        <Project
          image={FolksoulAPIScreen}
          name='Folksoul API'
          description={t('projects.description2')}
          techStack='Express, Typescript, Mongoose, Swagger'
          githubLink='https://github.com/mamatsa/folksoul-api'
          siteLink=''
        />
        <Project
          image={CoronaScreen}
          name='Coronatime'
          description={t('projects.description3')}
          techStack='React, Typescript, Tailwind, Axios, I18Next, Cypress'
          githubLink='https://github.com/mamatsa/coronatime'
          siteLink='https://silly-sawine-9074b6.netlify.app/'
        />
        <Project
          image={QuestionnaireScreen}
          name='Questionnaire'
          description={t('projects.description4')}
          techStack='React, Javascript, Tailwind, Axios'
          githubLink='https://github.com/mamatsa/covid-questionnaire'
          siteLink='https://clever-toffee-4c99fc.netlify.app/'
        />
        <Project
          image={JobSurvey}
          name='Job Survey'
          description={t('projects.description5')}
          techStack='React, Javascript, CSS'
          githubLink='https://github.com/mamatsa/redberry-survey'
          siteLink='https://focused-lamarr-c000ae.netlify.app/'
        />
        <Project
          image={CompanyAPI}
          name='Company API'
          description={t('projects.description6')}
          techStack='Express, Mongoose, Javascript, Swagger'
          githubLink='https://github.com/mamatsa/company-employees-api'
          siteLink=''
        />
        <Project
          image={TodoScreen}
          name='Todo List'
          description={t('projects.description7')}
          techStack='HTML, CSS, Javascript'
          githubLink='https://github.com/mamatsa/todo-list'
          siteLink='https://mamatsa.github.io/todo-list/'
        />
        <Project
          image={TributeScreen}
          name='Tribute Page'
          description={t('projects.description8')}
          techStack='HTML, CSS, Javascript'
          githubLink='https://github.com/mamatsa/tribute-page'
          siteLink='https://mamatsa.github.io/tribute-page/'
        />
      </div>
    </div>
  );
};

export default Projects;
