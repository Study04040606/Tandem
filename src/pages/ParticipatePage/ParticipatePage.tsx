import Layout from '@/components/Layout/Layout.tsx';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ParticipatePage = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState({text: 'Send message status', class: 'invisible'});
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const nameValidation = {
    required: { value: true, message: t('participate-name-required')}, 
    minLength: { value: 2, message: t('participate-name-min-length') } ,
    maxLength: { value: 50, message: t('participate-name-max-length') } ,
  };

  const emailValidation = {
    required: { value: true, message: t('participate-email-required')},
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      message: t('participate-email-invalid')
    }
  };

  const messageValidation = {
    required: { value: true, message: t('participate-message-required') },
    minLength: { value: 2, message: t('participate-message-min-length') } ,
    maxLength: { value: 1000, message: t('participate-message-max-length') } ,
  };

  const handleSubmitFunction = async () => {
    setStatus({ text: t('participate-send-message-status-sending'), class: 'visible' });

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(form);

    if (data.success) {
      setStatus({ text: t('participate-send-message-status-ok'), class: 'visible text-green-500' });
    } else {
      setStatus({ text: t('participate-send-message-status-error'), class: 'visible text-red-500' });
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center my-4">{t('participate-title')}</h1>
      <p className="text-center mb-4">{t('participate-lead')}</p>
      <div className="flex justify-center items-center flex-col">
        <form onSubmit={handleSubmit(handleSubmitFunction)} className="w-[50%]">
          <fieldset className="fieldset place-items-center text-base bg-base-200 border-base-400 rounded-box border p-4 py-6">
            <div className="w-[50%] mb-3">
              <label htmlFor="name" className="block mb-1">
                {t('participate-name-label')}:*{' '}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t('participate-name-label')}
                className="input pl-3"
                {...register('name', nameValidation)}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <p className={`text-red-500 text-xs mt-1 ${errors.name ? '' : 'invisible'}`}>
                {' '}
                {errors.name ? errors.name?.message : 'errors.name.message'}
              </p>
            </div>
            <div className="w-[50%] mb-3">
              <label htmlFor="email" className="block mb-1">
                {t('participate-email-label')}:*{' '}
              </label>
              <input
                id="email"
                type=""
                placeholder={t('participate-email-label')}
                className="input"
                {...register('email', emailValidation)}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <p className={`text-red-500 text-xs mt-1 ${errors.email ? '' : 'invisible'}`}>
                {' '}
                {errors.email ? errors.email?.message : 'errors.email.message'}
              </p>
            </div>
            <div className="w-[50%] mb-3">
              <label htmlFor="message" className="block mb-1">
                {t('participate-message-label')}:*{' '}
              </label>
              <textarea
                id="message"
                placeholder={t('participate-message-label')}
                className="textarea"
                {...register('message', messageValidation)}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
              <p className={`text-red-500 text-xs mt-1 ${errors.message ? '' : 'invisible'}`}>
                {' '}
                {errors.message ? errors.message?.message : 'errors.message.message'}
              </p>
            </div>
            <button className="btn btn-primary" type="submit">
              {t('participate-send-message-button')}
            </button>
            <p className={`pt-3 ${status.class}`}>{status.text}</p>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
};

export default ParticipatePage;
