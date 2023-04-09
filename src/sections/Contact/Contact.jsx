import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { Input, ContactCard } from './components';

const Contact = ({ contactRef, messageSendHandler }) => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      e.target.reset();
      messageSendHandler(true);
    } catch (err) {
      console.log(err);
      messageSendHandler(false);
    }
  };

  return (
    <div
      id='contact'
      className='flex flex-col-reverse w-full gap-[2%] md:flex-row'
      ref={contactRef}
    >
      {/* Contact form side */}
      <div className='flex flex-col justify-between mt-4 md:mt-0 md:w-[61%] '>
        <h2 className='text-2xl font-bold mb-1 mx-auto md:text-3xl md:mb-8 2xl:text-4xl'>
          Leave me a message
        </h2>
        <form
          className='p-5 bg-white flex flex-col gap-4 md:p-10'
          onSubmit={(e) => sendEmail(e)}
          ref={form}
        >
          <Input id='name' type='text' label='Your Name (Required)' />
          <Input id='email' type='email' label='Your Email (Required)' />
          <Input id='subject' type='text' label='Subject' />
          <Input
            id='message'
            type='text'
            label='Your Message'
            textarea={true}
          />

          <button
            type='submit'
            className='px-4 py-2 bg-amber-400 place-self-start mt-4 w-full md:w-auto'
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Contact information side */}
      <div className='flex flex-col md:w-[37%] '>
        <h2 className='text-2xl font-bold mx-auto mb-2 md:text-3xl md:mb-8 2xl:text-4xl'>
          Contact information
        </h2>
        <div className='flex flex-col justify-between gap-3 h-full'>
          <ContactCard
            icon={faMap}
            contacts={[
              { label: 'Country:', value: 'Georgia' },
              { label: 'City:', value: 'Tbilisi' },
              { label: 'Street:', value: 'Dadiani' },
            ]}
          />
          <ContactCard
            icon={faEnvelope}
            contacts={[
              { label: 'Email:', value: 'otar.mamatsashvili@gmail.com' },
              { label: 'Discord:', value: 'Otar#7677' },
            ]}
          />
          <ContactCard
            icon={faPhone}
            contacts={[{ label: 'Phone Number:', value: '+995598561151' }]}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
