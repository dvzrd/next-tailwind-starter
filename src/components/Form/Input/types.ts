import { HTMLProps } from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

// input types: https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types
export type InputType =
  | 'email'
  | 'file'
  | 'number'
  | 'select'
  | 'tel'
  | 'text'
  | 'textarea'
  | string;

export interface InputProps<E extends HTMLElement = HTMLInputElement>
  extends Omit<HTMLProps<E>, 'register' | 'type'> {
  register?: UseFormRegisterReturn;
  type?: InputType;
}

export interface TextInputProps<E extends HTMLElement = HTMLInputElement>
  extends Omit<InputProps<E>, 'max' | 'min' | 'rows'> {
  rows?: number;
}
