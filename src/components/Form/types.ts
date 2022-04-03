import { SubmitHandler } from 'react-hook-form';

import { BoxProps } from '../Box/types';
import { ButtonProps } from '../Button/types';

export interface FormProps extends BoxProps {
  actions?: BoxProps;
  button?: boolean | string;
  buttonProps?: ButtonProps;
  className?: string;
  errorMessage?: boolean | string;
  hasErrors?: boolean;
  isSubmitSuccessful?: boolean;
  method?: string;
  name?: string;
  successMessage?: boolean | string;
  onSubmit?: SubmitHandler<any>;
}
