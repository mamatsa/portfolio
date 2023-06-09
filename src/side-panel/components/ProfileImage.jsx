import React from 'react';
import { ProfilePhoto } from 'src/assets';

const ProfileImage = () => {
  return (
    <div className='relative'>
      <img
        src={ProfilePhoto}
        alt='Image'
        className='rounded-full w-24 xl:w-[150px]'
      />
      <div className='absolute h-3 w-3 bottom-2 right-2 bg-green-500 rounded-full drop-shadow-md xl:w-4 xl:h-4 xl:bottom-2 xl:right-5'></div>
    </div>
  );
};

export default ProfileImage;
