import { FormProps } from '../../../components/Form/types';

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  description: string;
};

export interface ContactFormProps extends FormProps {
  location?: any;
}
