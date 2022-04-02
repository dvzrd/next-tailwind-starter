import { SectionPattern, SectionProps } from '../Section/types';

export type MainPattern = 'content' | 'default';

export interface MainProps extends Omit<SectionProps, 'is'> {
  is?: MainPattern;
  section?: SectionPattern;
}
