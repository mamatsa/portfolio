import React from 'react';
import { BannerPhoto } from '../assets';
import { ArrowRight } from './svg';

const Content = () => {
  return (
    <div className="h-full w-9/12 px-10 bg-slate-100 flex items-start justify-center">
      <section className="banner bg-white flex justify-between items-center px-16">
        <div>
          <h2 className="text-5xl font-bold leading-snug">
            I'm Otar Mamatsashvili
          </h2>
          <h2 className="text-5xl font-bold leading-snug">
            <span className=" text-amber-400">Front-End</span> Developer
          </h2>
          <p className="text-gray-400 my-5 w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <button className="bg-amber-400 px-6 py-3 rounded-md my-3 flex items-center gap-3">
            HIRE ME
            <ArrowRight />
          </button>
        </div>
        <img src={BannerPhoto} alt="" />
      </section>
    </div>
  );
};

export default Content;
