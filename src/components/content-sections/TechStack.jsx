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
} from '../../assets';

const TechStack = () => {
  return (
    <section className='flex flex-col justify-start items-center'>
      <h2 className='text-4xl font-bold mb-5'>My Tech Stack</h2>
      <p className='text-slate-400 text-lg'>
        Technologies I’ve been working with recently
      </p>
      <div className='flex flex-wrap justify-center items-center my-10 gap-5'>
        <img src={HTMLLogo} alt='react' />
        <img src={CSSLogo} alt='react' />
        <img src={JSLogo} alt='react' />
        <img src={TSLogo} alt='react' />
        <img src={ReactLogo} alt='react' />
        <img src={TailwindLogo} alt='react' />
        <img src={NodeLogo} alt='react' />
        <img src={MongoLogo} alt='react' />
        <img src={LinuxLogo} alt='react' />
        <img src={FigmaLogo} alt='react' />
        <img src={VscodeLogo} alt='react' />
        <img src={GithubLogo} alt='react' />
        <img src={GitLogo} alt='react' />
        <img src={SwaggerLogo} alt='react' />
        <img src={CypressLogo} alt='react' />
        <img src={ExpressLogo} alt='react' />
      </div>
    </section>
  );
};

export default TechStack;
