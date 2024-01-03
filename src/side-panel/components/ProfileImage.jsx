import React from 'react';

const ProfileImage = () => {
  return (
    <div className='relative'>
      <img
        src='/assets/profile-photo.webp'
        alt='Image'
        className='rounded-full w-24 2xl:w-[150px]'
      />
      <div className='absolute h-3 w-3 bottom-2 right-2 bg-green-500 rounded-full drop-shadow-md 2xl:w-4 2xl:h-4 2xl:bottom-2 2xl:right-5'></div>
    </div>
  );
};

export default ProfileImage;
