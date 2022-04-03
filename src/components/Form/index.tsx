import React from 'react';

import clsx from 'clsx';

import { Box } from '../Box';
import { GridBox } from '../Box/Grid';
import { Button } from '../Button';
import { Text } from '../Text';
import { FormField } from './Field';
import { FormFieldProps } from './Field/types';
import { FormProps } from './types';

export const renderField = (field: FormFieldProps) => {
  switch (field.type) {
    case 'text':
    default:
      return <FormField {...field} />;
  }
};

export const encodeData = (data: any) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export const Form = ({
  as = 'form',
  actions,
  button = 'Submit',
  buttonProps,
  children,
  errorMessage = 'Fill out all the required fields and try again.',
  hasErrors,
  isSubmitSuccessful,
  name,
  successMessage,
  onSubmit,
  ...rest
}: FormProps) => {
  return (
    <Box as={as} name={name} onSubmit={onSubmit} {...rest}>
      {children}
      {button && (
        <GridBox
          {...actions}
          className={clsx(
            'col-span-full flex items-center justify-between mt-4 order-last',
            actions?.className
          )}
        >
          {isSubmitSuccessful
            ? successMessage && (
                <Text className="text-service-pass">{successMessage}</Text>
              )
            : errorMessage &&
              hasErrors && (
                <Text className="text-service-fail">{errorMessage}</Text>
              )}
          <Button color="primary" type="submit" {...buttonProps}>
            {button}
          </Button>
        </GridBox>
      )}
    </Box>
  );
};
