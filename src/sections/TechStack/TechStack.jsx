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

const TechStack = ({ techStackRef }) => {
  return (
    <section
      id='tech-stack'
      className='flex flex-col justify-start items-center'
      ref={techStackRef}
    >
      <h2 className='text-4xl font-bold mb-5'>My Tech Stack</h2>
      <p className='text-slate-400 text-lg'>
        Technologies I’ve been working with recently
      </p>
      <div className='flex flex-wrap justify-center items-center my-10 gap-5'>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/HTML'
          target='_blank'
        >
          <img src={HTMLLogo} alt='html' />
        </a>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/CSS'
          target='_blank'
        >
          <img src={CSSLogo} alt='css' />
        </a>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          target='_blank'
        >
          <img src={JSLogo} alt='js' />
        </a>
        <a href='https://www.typescriptlang.org/' target='_blank'>
          <img src={TSLogo} alt='ts' />
        </a>
        <a href='https://react.dev/' target='_blank'>
          <img src={ReactLogo} alt='react' />
        </a>
        <a href='https://nodejs.org/en' target='_blank'>
          <img src={NodeLogo} alt='node' />
        </a>
        <a href='https://expressjs.com/' target='_blank'>
          <img src={ExpressLogo} alt='express' />
        </a>
        <a href='https://www.mongodb.com/' target='_blank'>
          <img src={MongoLogo} alt='mongo' />
        </a>
        <a href='https://tailwindcss.com/' target='_blank'>
          <img src={TailwindLogo} alt='tailwind' />
        </a>
        <a href='https://git-scm.com/' target='_blank'>
          <img src={GitLogo} alt='git' />
        </a>
        <a href='https://github.com/' target='_blank'>
          <img src={GithubLogo} alt='github' />
        </a>
        <a href='https://www.linux.org/' target='_blank'>
          <img src={LinuxLogo} alt='linux' />
        </a>
        <a href='https://code.visualstudio.com/' target='_blank'>
          <img src={VscodeLogo} alt='vscode' />
        </a>
        <a href='https://www.figma.com/' target='_blank'>
          <img src={FigmaLogo} alt='figma' />
        </a>
        <a href='https://swagger.io/' target='_blank'>
          <img src={SwaggerLogo} alt='swagger' />
        </a>
        <a href='https://www.cypress.io/' target='_blank'>
          <img src={CypressLogo} alt='cypress' />
        </a>
      </div>
    </section>
  );
};

export default TechStack;
