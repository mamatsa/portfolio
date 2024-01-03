import React from 'react';
import { Button } from 'src/components';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Banner = ({ homeRef }) => {
  const { t } = useTranslation();

  return (
    <section
      id='home'
      className='banner bg-white flex justify-between items-center px-6 py-20 md:px-12 2xl:px-16 lg:pb-0 lg:pt-6 dark:bg-zinc-800'
      ref={homeRef}
    >
      <div>
        <h2 className='text-2xl font-bold leading-snug md:text-4xl 2xl:text-5xl dark:text-white'>
          {t('banner.name')}
        </h2>
        <div className='w-min'>
          <h2 className='w-min animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-amber-400 font-bold leading-snug text-2xl md:border-r-4 md:text-4xl 2xl:text-5xl dark:text-white'>
            <span className=' text-amber-400'>{t('banner.role')}</span>{' '}
            {t('banner.profession')}
          </h2>
        </div>
        <p className='text-gray-400 my-4 md:my-6 2xl:w-3/5'>
          {t('banner.about')}
        </p>
        <a href='#contact'>
          <Button text={t('banner.contact')} icon={faArrowRight} />
        </a>
      </div>
      <img
        src='/assets/banner-photo.webp'
        alt='banner-image'
        className='hidden lg:block'
      />
    </section>
  );
};

export default Banner;
