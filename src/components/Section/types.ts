import { ReactNode } from 'react';

import { CaptionProps } from '../Caption/types';
import { ContainerProps } from '../Container/types';
import { WrapperProps } from '../Wrapper/types';

export type SectionPattern =
  | 'content'
  | 'cta'
  | 'error'
  | 'feature'
  | 'form'
  | 'heel'
  | 'hero'
  | 'layout'
  | 'main'
  | 'topbar';

export type SectionVerticalHeight =
  | '1/12'
  | '1/6'
  | '1/5'
  | '1/4'
  | '1/3'
  | '1/2'
  | '2/3'
  | '2/5'
  | '3/4'
  | '3/5'
  | '4/5'
  | '5/6'
  | '11/12'
  | 'auto'
  | 'full'
  | 'zero';

export type SectionMod =
  | 'col'
  | 'compact'
  | 'fluid'
  | 'full'
  | 'inherit'
  | 'row'
  | 'transparent'
  | string;

export interface SectionProps extends Omit<WrapperProps, 'is' | 'media'> {
  caption?: CaptionProps;
  container?: ContainerProps;
  content?: Element | ReactNode;
  footer?: Element | ReactNode;
  header?: Element | ReactNode;
  is?: SectionPattern;
  isContained?: boolean;
  mod?: SectionMod;
  vh?: SectionVerticalHeight;
}
