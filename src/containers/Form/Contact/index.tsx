import React, { useState, useRef } from 'react';

import clsx from 'clsx';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Box } from '../../../components/Box';
import { encodeData, Form } from '../../../components/Form';
import { FormField } from '../../../components/Form/Field';
import { Text } from '../../../components/Text';
import styles from './ContactForm.module.scss';
import { ContactFormProps, ContactFormData } from './types';

export const ContactForm = ({ className, ...rest }: ContactFormProps) => {
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    register,
    reset,
  } = useForm<ContactFormData>();
  const [captured, setCaptured] = useState('');
  const [status, setStatus] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSetStatus = (type: string) => {
    setStatus(type);
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  const onSubmit: SubmitHandler<ContactFormData> = async (
    data: ContactFormData
  ) => {
    if (Object.keys(data).length > 0 && recaptchaRef.current) {
      const captchaResponse = await recaptchaRef.current.executeAsync();
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeData({
          'form-name': 'contact',
          'bot-field': captured,
          'g-recaptcha-response': captchaResponse,
          ...data,
        }),
      };

      setStatus('sending');

      fetch('/', options)
        .then(() => {
          setTimeout(() => {
            reset();
            handleSetStatus('sent');
          }, 3000);
        })
        .catch((error) => {
          handleSetStatus('failed');
          console.error(error);
        });
    } else {
      handleSetStatus('failed');
      console.error(JSON.stringify(errors));
    }
  };

  return (
    <>
      <Form
        method="POST"
        name="contact"
        button="Contact Us"
        hasErrors={Object.keys(errors).length > 0}
        isSubmitSuccessful={isSubmitSuccessful}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}
        className={clsx(styles.contactForm, className)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <input
            name="bot-field"
            onChange={(event) => setCaptured(event.target.value)}
          />
        </div>
        <Box className={styles.contactFormFields}>
          <FormField
            error={errors.name}
            errorMessage="Please enter your full name."
            label="Full name"
            name="name"
            register={register('name', { required: true })}
          />
          <FormField
            error={errors.email}
            errorMessage="Please enter an email address."
            label="Email address"
            name="email"
            register={register('email', { required: true })}
            type="email"
          />
          <FormField
            error={errors.phone}
            label="Phone number"
            name="phone"
            register={register('phone', { required: false })}
            type="tel"
          />
          <FormField
            error={errors.description}
            errorMessage="Please provide a reason for contact."
            label="Description"
            name="description"
            register={register('description', { required: true })}
            type="textarea"
          />
          {process.env.NEXT_PUBLIC_RECAPTCHA_KEY && (
            <ReCAPTCHA
              ref={recaptchaRef}
              className={styles.contactFormRecaptcha}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
              size="invisible"
            />
          )}
        </Box>
      </Form>
      {status === 'sending' && (
        <Text is="meta" className={styles.contactFormMessage}>
          Please wait while we process your request...
        </Text>
      )}
      {status === 'sent' && (
        <Text is="meta" className={styles.contactFormMessage}>
          Thank you! We&apos;ll get back to you within one business day.
        </Text>
      )}
      {status === 'failed' && (
        <Text is="meta" className={styles.contactFormMessage}>
          Something went wrong, please try again or get in touch with us by
          phone or email.
        </Text>
      )}
    </>
  );
};
