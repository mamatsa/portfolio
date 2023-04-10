import React from 'react';
import { BannerPhoto } from 'src/assets';
import { Button } from 'src/components';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Banner = ({ homeRef }) => {
  return (
    <section
      id='home'
      className='banner bg-white flex justify-between items-center px-6 py-12 md:px-12 2xl:px-16 xl:py-6'
      ref={homeRef}
    >
      <div>
        <h2 className='text-2xl font-bold leading-snug md:text-5xl '>
          I'm Otar Mamatsashvili
        </h2>
        <h2 className='text-2xl font-bold leading-snug md:text-5xl'>
          <span className=' text-amber-400'>Front-End</span> Developer
        </h2>
        <p className='text-gray-400 my-6 2xl:w-3/5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <Button text='HIRE ME' icon={faArrowRight} />
      </div>
      <img src={BannerPhoto} alt='banner-image' className='hidden xl:block' />
    </section>
  );
};

export default Banner;
