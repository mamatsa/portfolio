import React from 'react';
import {
  ReactLogo,
  JSLogo,
  TSLogo,
  HTMLLogo,
  CSSLogo,
  NodeLogo,
  TailwindLogo,
  LinuxLogo,
  FigmaLogo,
  MongoLogo,
  VscodeLogo,
  ExpressLogo,
  GitLogo,
  GithubLogo,
  CypressLogo,
  SwaggerLogo,
} from 'src/assets';
import { SectionTitle } from 'src/components';
import { useTranslation } from 'react-i18next';

const TechStack = ({ techStackRef }) => {
  const { t } = useTranslation();
  return (
    <section
      id='tech-stack'
      className='flex flex-col justify-start items-center'
      ref={techStackRef}
    >
      <SectionTitle
        title={t('techStack.title')}
        description={t('techStack.description')}
      />

      <div className='flex flex-wrap justify-center items-center gap-5'>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/HTML'
          target='_blank'
        >
          <img src={HTMLLogo} alt='html' className='w-16 xl:w-32' />
        </a>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/CSS'
          target='_blank'
        >
          <img src={CSSLogo} alt='css' className='w-16 xl:w-32' />
        </a>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          target='_blank'
        >
          <img src={JSLogo} alt='js' className='w-16 xl:w-32' />
        </a>
        <a href='https://www.typescriptlang.org/' target='_blank'>
          <img src={TSLogo} alt='ts' className='w-16 xl:w-32' />
        </a>
        <a href='https://react.dev/' target='_blank'>
          <img src={ReactLogo} alt='react' className='w-16 xl:w-32' />
        </a>
        <a href='https://nodejs.org/en' target='_blank'>
          <img src={NodeLogo} alt='node' className='w-16 xl:w-32' />
        </a>
        <a href='https://expressjs.com/' target='_blank'>
          <img src={ExpressLogo} alt='express' className='w-16 xl:w-32' />
        </a>
        <a href='https://www.mongodb.com/' target='_blank'>
          <img src={MongoLogo} alt='mongo' className='w-16 xl:w-32' />
        </a>
        <a href='https://tailwindcss.com/' target='_blank'>
          <img src={TailwindLogo} alt='tailwind' className='w-16 xl:w-32' />
        </a>
        <a href='https://git-scm.com/' target='_blank'>
          <img src={GitLogo} alt='git' className='w-16 xl:w-32' />
        </a>
        <a href='https://github.com/' target='_blank'>
          <img src={GithubLogo} alt='github' className='w-16 xl:w-32' />
        </a>
        <a href='https://www.linux.org/' target='_blank'>
          <img src={LinuxLogo} alt='linux' className='w-16 xl:w-32' />
        </a>
        <a href='https://code.visualstudio.com/' target='_blank'>
          <img src={VscodeLogo} alt='vscode' className='w-16 xl:w-32' />
        </a>
        <a href='https://www.figma.com/' target='_blank'>
          <img src={FigmaLogo} alt='figma' className='w-16 xl:w-32' />
        </a>
        <a href='https://swagger.io/' target='_blank'>
          <img src={SwaggerLogo} alt='swagger' className='w-16 xl:w-32' />
        </a>
        <a href='https://www.cypress.io/' target='_blank'>
          <img src={CypressLogo} alt='cypress' className='w-16 xl:w-32' />
        </a>
      </div>
    </section>
  );
};

export default TechStack;
