import React, { useState, useRef } from 'react';

import clsx from 'clsx';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Box } from '../../../components/Box';
import { Form } from '../../../components/Form';
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
  const [status, setStatus] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSetStatus = (type: string) => {
    setStatus(type);
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  const onSubmit: SubmitHandler<ContactFormData> = (data: ContactFormData) => {
    setStatus('sending');
    fetch('/api/contact-sheet', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
