import React from 'react';

import clsx from 'clsx';

import { Box } from '../Box';
import { SwitchProps } from './types';

export const Switch = ({
  checked,
  children,
  className,
  color = 'default',
  disabled,
  id = 'switch',
  is = 'default',
  size = 'md',
  onChange,
  ...rest
}: SwitchProps) => {
  const handleKeyPress = (event: any) => {
    if (event.keyCode !== 32) return;
    event.preventDefault();
    if (onChange) onChange(!checked);
  };

  return (
    <>
      <Box
        {...rest}
        className={clsx(
          'relative inline-block',
          'w-10 align-middle select-none',
          className
        )}
      >
        <input
          type="checkbox"
          name={id}
          id={id}
          className={clsx('hidden appearance-none')}
          checked={checked}
          onChange={(event: any) => onChange && onChange(event.target.checked)}
        />
        {id && (
          <label
            htmlFor={id}
            tabIndex={disabled ? -1 : 1}
            className={clsx(
              'relative block overflow-hidden cursor-pointer',
              size === 'sm' && 'h4',
              size === 'md' && 'h-5',
              size === 'lg' && 'h-6',
              color === 'default' && 'bg-paper-accent',
              color === 'primary' && 'bg-primary-paper-accent',
              color === 'secondary' && 'bg-secondary-paper-accent',
              is === 'default' && 'rounded-sm',
              is === 'pill' && 'rounded-full'
            )}
            onKeyDown={(event: any) => handleKeyPress(event)}
          >
            <span
              className={clsx(
                'block absolute top-0 bottom-0',
                'transition-all duration-250 ease-in',
                size === 'sm' && 'w-4 h-4',
                size === 'md' && 'w-5 h-5',
                size === 'lg' && 'w-6 h-6',
                color === 'default' && 'bg-paper',
                color === 'primary' && 'bg-primary-paper',
                color === 'secondary' && 'bg-secondary-paper',
                is === 'default' && 'rounded-sm',
                is === 'pill' && 'rounded-full',
                checked ? 'right-0' : 'right-5',
                disabled && 'cursor-not-allowed pointer-events-none bg-gray-500'
              )}
              tabIndex={-1}
            />
          </label>
        )}
      </Box>
      {children}
    </>
  );
};

// References:
// - https://codesandbox.io/s/react-toggle-component-de4uy?from-embed=&file=/src/components/ToggleSwitch.js
// - https://github.com/sitepoint-editors/ToggleSwitch
