import { HeelProps } from '../types';

export type PageHeelPattern = 'content' | 'default';

export interface PageHeelProps extends Omit<HeelProps, 'is'> {
  is?: PageHeelPattern;
}
