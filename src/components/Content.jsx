import React from 'react';
import {
  BannerPhoto,
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
} from '../assets';
import { ArrowRight } from './svg';

const Content = () => {
  return (
    <div className='mr-32 ml-80 h-full w-full px-10 bg-slate-200 flex flex-col items-center justify-start gap-16'>
      <section className='banner bg-white flex justify-between items-center px-16'>
        <div>
          <h2 className='text-5xl font-bold leading-snug'>
            I'm Otar Mamatsashvili
          </h2>
          <h2 className='text-5xl font-bold leading-snug'>
            <span className=' text-amber-400'>Front-End</span> Developer
          </h2>
          <p className='text-gray-400 my-5 w-3/5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <button className='bg-amber-400 px-6 py-3 rounded-md my-3 flex items-center gap-3'>
            HIRE ME
            <ArrowRight />
          </button>
        </div>
        <img src={BannerPhoto} alt='' />
      </section>

      <section className='flex flex-col justify-start items-center'>
        <h2 className='text-4xl font-bold'>Full Tech Stack</h2>
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
    </div>
  );
};

export default Content;
