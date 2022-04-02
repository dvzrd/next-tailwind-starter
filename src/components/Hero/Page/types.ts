import { HeroProps, HeroPattern } from '../types';

export type PageHeroPattern = 'content' | 'default';

export interface PageHeroProps extends Omit<HeroProps, 'is'> {
  hero?: HeroPattern;
  is?: PageHeroPattern;
}
