import React from 'react';
import { ProfilePhoto } from 'src/assets';

const ProfileImage = () => {
  return (
    <div className='relative'>
      <img
        src={ProfilePhoto}
        alt='Image'
        className='rounded-full max-w-[150px]'
      />
      <div className='absolute bottom-2 right-5 w-4 h-4 bg-green-500 rounded-full drop-shadow-md'></div>
    </div>
  );
};

export default ProfileImage;
