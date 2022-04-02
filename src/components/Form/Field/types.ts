import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { WrapperProps } from '../../Wrapper/types';
import { TextInputProps, InputType } from '../Input/types';

export interface FormFieldProps extends WrapperProps {
  error?: FieldError;
  errorMessage?: string;
  id?: string;
  input?: TextInputProps;
  label?: string;
  name: string;
  register?: UseFormRegisterReturn;
  type?: InputType;
}
