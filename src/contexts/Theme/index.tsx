import React, { createContext, useContext, useEffect, useState } from 'react';

import { Switch } from '../../components/Switch';
import { SwitchProps } from '../../components/Switch/types';
import { ThemeContextProps, Theme, ThemeProviderProps } from './types';

// check if color scheme preference for user's OS is configured for dark mode.
const prefersDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be called inside ThemeProvider.');
  }

  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // get theme value from localStorage
    const storedTheme: Theme = localStorage.getItem('theme') as Theme;
    if (storedTheme !== null) {
      setTheme(storedTheme);
    } else if (prefersDarkMode()) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const isDark = theme === 'dark';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeSwitch = ({ children, ...rest }: SwitchProps) => {
  const [switchOn, setSwitchOn] = useState(false);
  const { toggleTheme } = useTheme();

  const handleSwitchToggle = (checked: boolean) => {
    setSwitchOn(checked);
    toggleTheme(checked);
  };

  return (
    <Switch
      id="theme"
      {...rest}
      checked={switchOn}
      onChange={handleSwitchToggle}
    >
      {children}
    </Switch>
  );
};
