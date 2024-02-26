import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

interface ResponsiveProps {
  children: ReactNode;
}

export const Mobile = ({ children }: ResponsiveProps) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  return <>{isMobile && children}</>;
};

export const Tablet = ({ children }: ResponsiveProps) => {
  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return <>{isTablet && children}</>;
};

export const LargeTablet = ({ children }: ResponsiveProps) => {
  const isLargeTablet = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  return <>{isLargeTablet && children}</>;
};


export const Desktop = ({ children }: ResponsiveProps) => {
  const isDesktop = useMediaQuery({
    query: '(max-width: 1280px)',
  });

  return <>{isDesktop && children}</>;
};

export const LargeDesktop = ({ children }: ResponsiveProps) => {
  const isLargeDesktop = useMediaQuery({
    query: '(min-width: 1281px)',
  });

  return <>{isLargeDesktop && children}</>;
};
