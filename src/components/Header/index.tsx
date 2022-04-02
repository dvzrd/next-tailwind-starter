import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import { CgClose, CgMenu } from 'react-icons/cg';
import { useMedia } from 'react-use';

import { Brand } from '../../containers/Brand';
import { HeaderMenu } from '../../containers/Menu/Header';
import { Button } from '../Button';
import { SplitSection } from '../Section/Split';
import { HeaderProps } from './types';

export const Header = ({
  brand,
  children,
  className,
  color = 'primary',
  is,
  isFixed,
  left,
  leftProps,
  menu,
  right,
  rightProps,
  showBrand = true,
  showMenu = true,
  split,
  ...rest
}: HeaderProps) => {
  const isMobile = useMedia('(max-width: 768px');
  const [fixed, setFixed] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;
      // scrolling down
      if (currentPosition > scrollTop) {
        // scrolled to bottom
        setFixed(true);
      } else if (window.scrollY === 0) {
        // scrolled to top
        setFixed(false);
      } else {
        setFixed(true);
      }

      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <SplitSection
      as="header"
      is="topbar"
      color={color}
      {...rest}
      className={clsx(
        'fixed w-full z-30 py-4 md:py-5 xl:py-6',
        is === 'page' && 'm-0',
        isFixed || fixed ? 'fixed top-0 left-0' : 'bg-transparent',
        className
      )}
      left={
        <>
          {showBrand && <Brand {...brand} color={color} />} {left}
        </>
      }
      leftProps={{
        ...leftProps,
        className: clsx('flex-none', leftProps?.className),
      }}
      right={
        <>
          {right}{' '}
          {showMenu && (
            <>
              {isMobile ? (
                <Button is="icon" className="z-10" onClick={toggleMenu}>
                  {menuOpened ? (
                    <CgClose className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
                  ) : (
                    <CgMenu className="w-6 h-5 md:w-8 md:h-6 xl:w-10 xl:h-10" />
                  )}
                </Button>
              ) : (
                <HeaderMenu {...menu} color={color} />
              )}
            </>
          )}
        </>
      }
      rightProps={{
        ...rightProps,
        className: clsx('justify-end', rightProps?.className),
      }}
      split={{
        ...split,
        className: clsx('order-0', split?.className),
      }}
    >
      {showMenu && isMobile && menuOpened && (
        <HeaderMenu is="mobile" {...menu} color={color} />
      )}
      {children}
    </SplitSection>
  );
};
