import React, { useRef } from 'react';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { Input, ContactCard } from './components';
import { SectionTitle } from 'src/components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './schemas';

const Contact = ({ contactRef, messageSendHandler }) => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (_, e) => {
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
      <div className='flex flex-col justify-between mt-20 md:mt-0 md:w-[61%]'>
        <SectionTitle title='Leave me a message' />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-6 bg-white flex flex-col gap-6 md:px-10 md:py-12 dark:bg-zinc-800'
          // onSubmit={(e) => sendEmail(e)}
          ref={form}
        >
          <Input
            id='name'
            type='text'
            label='Your Name (Required)'
            register={register}
            errors={errors}
          />

          <Input
            id='email'
            type='email'
            label='Your Email (Required)'
            register={register}
            errors={errors}
          />
          <Input
            id='subject'
            type='text'
            label='Subject'
            register={register}
            errors={errors}
          />
          <Input
            id='message'
            type='text'
            label='Your Message'
            textarea={true}
            register={register}
            errors={errors}
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
        <SectionTitle title='Contact Information' />
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
