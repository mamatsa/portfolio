import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ contactRef }) => {
  return (
    <div id='contact' className='flex w-full gap-[2%]' ref={contactRef}>
      <div className='w-[61%] flex flex-col justify-between'>
        <h2 className='text-4xl font-bold mb-8'>Leave me a message</h2>
        <form className=' p-10 bg-white flex flex-col gap-4'>
          <div className='flex flex-col items-start justify-center'>
            <label htmlFor='name' className='text-slate-600 mb-1 text-lg'>
              Your Name (Required)
            </label>
            <input
              type='text'
              required
              id='name'
              name='name'
              minLength={3}
              className='bg-slate-200 w-full px-5 py-3'
            />
          </div>
          <div className='flex flex-col items-start justify-center'>
            <label htmlFor='email' className='text-slate-600 mb-1 text-lg'>
              Your Email (Required)
            </label>
            <input
              type='email'
              required
              id='email'
              name='email'
              className='bg-slate-200 w-full px-5 py-3'
            />
          </div>
          <div className='flex flex-col items-start justify-center'>
            <label htmlFor='subject' className='text-slate-600 mb-1 text-lg'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              className='bg-slate-200 w-full px-5 py-3'
            />
          </div>
          <div className='flex flex-col items-start justify-center'>
            <label htmlFor='message' className='text-slate-600 mb-1 text-lg'>
              Your Message
            </label>
            <textarea
              name='message'
              id='message'
              rows='8'
              className='bg-slate-200 w-full px-5 py-3'
            ></textarea>
          </div>
          <button
            type='submit'
            className='px-4 py-2 bg-amber-400 place-self-start mt-4'
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      <div className='w-[37%] flex flex-col'>
        <h2 className='text-4xl font-bold mb-8'>Contact information</h2>
        <div className='flex flex-col justify-between h-full'>
          <div className='w-full flex flex-col items-center p-8 bg-white'>
            <FontAwesomeIcon
              icon={faMap}
              className='mr-2 bg-amber-400 p-4 rounded-full mb-7'
            />
            <div className='w-full flex justify-between items-center mb-3 '>
              <p className='text-lg text-slate-600 '>Country:</p>
              <p className='text-slate-600'>Georgia</p>
            </div>
            <div className='w-full flex justify-between items-center mb-3'>
              <p className='text-lg text-slate-600 '>City:</p>
              <p className='text-slate-600'>Tbilisi</p>
            </div>
            <div className='w-full flex justify-between items-center'>
              <p className='text-lg text-slate-600 '>Street:</p>
              <p className='text-slate-600'>Dadiani</p>
            </div>
          </div>
          <div className='w-full flex flex-col items-center p-8 bg-white'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='mr-2 bg-amber-400 p-4 rounded-full mb-7'
            />
            <div className='w-full flex justify-between items-center mb-3'>
              <p className='text-lg text-slate-600 '>Email:</p>
              <p className='text-slate-600'>otar.mamatsashvili@gmail.com</p>
            </div>
            <div className='w-full flex justify-between items-center'>
              <p className='text-lg text-slate-600 '>Discord:</p>
              <p className='text-slate-600'>Otar#7677</p>
            </div>
          </div>
          <div className='w-full flex flex-col items-center p-8 bg-white'>
            <FontAwesomeIcon
              icon={faPhone}
              className='mr-2 bg-amber-400 p-4 rounded-full mb-7'
            />
            <div className='w-full flex justify-between items-center'>
              <p className='text-lg text-slate-600 '>Phone Number:</p>
              <p className='text-slate-600'>+995598561151</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
