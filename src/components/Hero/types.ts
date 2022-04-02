import { SectionProps } from '../Section/types';

export type HeroPattern = 'card' | 'default' | 'page' | 'panel';

export interface HeroProps extends Omit<SectionProps, 'is'> {
  is?: HeroPattern;
}
