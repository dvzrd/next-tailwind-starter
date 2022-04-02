import { ReactNode } from 'react';

import { SwitchProps } from '../../components/Switch/types';

export type Theme = 'dark' | 'light';

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (event: MouseEvent | boolean) => void;
}

export interface ThemeSwitchProps extends SwitchProps {}

export interface ThemeProviderProps {
  children?: Element | ReactNode;
}
