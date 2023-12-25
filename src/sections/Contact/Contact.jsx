import React, { useRef } from 'react';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { Input, ContactCard } from './components';
import { SectionTitle } from 'src/components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './schemas';
import { useTranslation } from 'react-i18next';

const Contact = ({ contactRef, messageSendHandler }) => {
  const { t } = useTranslation();
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
        <SectionTitle title={t('contact.message.title')} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-6 bg-white flex flex-col gap-6 md:px-10 md:py-12 dark:bg-zinc-800'
          // onSubmit={(e) => sendEmail(e)}
          ref={form}
        >
          <Input
            id='name'
            type='text'
            label={t('contact.message.nameLabel')}
            register={register}
            errors={errors}
          />

          <Input
            id='email'
            type='email'
            label={t('contact.message.emailLabel')}
            register={register}
            errors={errors}
          />
          <Input
            id='subject'
            type='text'
            label={t('contact.message.subjectLabel')}
            register={register}
            errors={errors}
          />
          <Input
            id='message'
            type='text'
            label={t('contact.message.messageLabel')}
            textarea={true}
            register={register}
            errors={errors}
          />

          <button
            type='submit'
            className='px-4 py-2 bg-amber-400 place-self-start mt-4 w-full text-sm 2xl:text-base md:w-auto'
          >
            {t('contact.message.buttonText')}
          </button>
        </form>
      </div>

      {/* Contact information side */}
      <div className='flex flex-col md:w-[37%] '>
        <SectionTitle title={t('contact.details.title')} />
        <div className='flex flex-col justify-between gap-3 h-full'>
          <ContactCard
            icon={faMap}
            contacts={[
              {
                label: t('contact.details.countryLabel'),
                value: t('contact.details.country'),
              },
              {
                label: t('contact.details.cityLabel'),
                value: t('contact.details.city'),
              },
              {
                label: t('contact.details.streetLabel'),
                value: t('contact.details.street'),
              },
            ]}
          />
          <ContactCard
            icon={faEnvelope}
            contacts={[
              {
                label: t('contact.details.emailLabel'),
                value: 'otar.mamatsashvili@gmail.com',
              },
              { label: t('contact.details.discordLabel'), value: 'Otar#7677' },
            ]}
          />
          <ContactCard
            icon={faPhone}
            contacts={[
              {
                label: t('contact.details.phoneLabel'),
                value: '+995598561151',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
