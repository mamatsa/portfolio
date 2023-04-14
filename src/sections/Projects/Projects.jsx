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
          image={FolksoulScreen}
          name='Folksoul'
          description='FolkSoul is a music band website, where you can view information about the band and its members. Only authenticated admins can modify this information.'
          techStack='React, Typescript, Tailwind, Axios'
          githubLink='https://github.com/mamatsa/folksoul-front'
          siteLink=''
        />
        <Project
          image={FolksoulAPIScreen}
          name='Folksoul API'
          description='Backend API for folksoul application, where information is stored and retrieved from mongo database.'
          techStack='Express, Typescript, Mongoose, Swagger'
          githubLink='https://github.com/mamatsa/folksoul-api'
          siteLink=''
        />
        <Project
          image={CoronaScreen}
          name='Coronatime'
          description='Coronatime is a  website where you can register/login and then view covid statistics by country or worldwide summed up data. '
          techStack='React, Typescript, Tailwind, Axios, I18Next, Cypress'
          githubLink='https://github.com/mamatsa/coronatime'
          siteLink='https://silly-sawine-9074b6.netlify.app/'
        />
        <Project
          image={QuestionnaireScreen}
          name='Questionnaire'
          description='This is covid questionnaire for company employees where they fill in data of their covid related information.'
          techStack='React, Javascript, Tailwind, Axios'
          githubLink='https://github.com/mamatsa/covid-questionnaire'
          siteLink='https://clever-toffee-4c99fc.netlify.app/'
        />
        <Project
          image={JobSurvey}
          name='Job Survey'
          description='This is a survey created for Redberry(Georgian Tech Company) internship program. Here you answer questions about you.'
          techStack='React, Javascript, CSS'
          githubLink='https://github.com/mamatsa/redberry-survey'
          siteLink='https://focused-lamarr-c000ae.netlify.app/'
        />
        <Project
          image={CompanyAPI}
          name='Company API'
          description='Company backend API, where you can read, add, update and delete information about companies and employees. '
          techStack='Express, Mongoose, Javascript, Swagger'
          githubLink='https://github.com/mamatsa/company-employees-api'
          siteLink=''
        />
        <Project
          image={TodoScreen}
          name='Todo List'
          description='Simple todo list where you can save todos, mark them completed and delete useless ones.'
          techStack='HTML, CSS, Javascript'
          githubLink='https://github.com/mamatsa/todo-list'
          siteLink='https://mamatsa.github.io/todo-list/'
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
