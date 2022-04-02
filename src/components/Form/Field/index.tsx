import React from 'react';

import clsx from 'clsx';

import { Text } from '../../Text';
import { Wrapper } from '../../Wrapper';
import { WrapperProps } from '../../Wrapper/types';
import { TextInput } from '../Input';
import { FormFieldProps } from './types';

export const FormField = ({
  children,
  className,
  error,
  errorMessage = 'This field is required',
  id,
  input,
  label,
  name,
  register,
  type = 'text',
  ...rest
}: FormFieldProps) => (
  <Wrapper
    as="div"
    {...(rest as WrapperProps)}
    className={clsx('content-start items-stretch', className)}
  >
    {label && (
      <Text as="label" is="meta" className="mb-1" htmlFor={id || name}>
        {label}
      </Text>
    )}
    {children || (
      <TextInput
        id={id || name}
        name={name}
        register={register}
        type={type}
        {...input}
      />
    )}
    {error && (
      <Text is="caption" className="mt-1 text-primary-accent">
        {error.message || errorMessage}
      </Text>
    )}
  </Wrapper>
);
