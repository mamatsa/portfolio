import React from 'react';
import { BannerPhoto } from 'src/assets';
import { Button } from 'src/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Banner = ({ homeRef }) => {
  return (
    <section
      id='home'
      className='banner bg-white flex justify-between items-center px-16'
      ref={homeRef}
    >
      <div>
        <h2 className='text-5xl font-bold leading-snug'>
          I'm Otar Mamatsashvili
        </h2>
        <h2 className='text-5xl font-bold leading-snug'>
          <span className=' text-amber-400'>Front-End</span> Developer
        </h2>
        <p className='text-gray-400 my-6 w-3/5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <Button text='HIRE ME' icon={faArrowRight} />
      </div>
      <img src={BannerPhoto} alt='' />
    </section>
  );
};

export default Banner;
