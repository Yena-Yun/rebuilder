import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const isTabletS = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const isTabletM = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  const isTabletL = useMediaQuery({
    query: '(max-width: 1200px)',
  });

  const overTabletL = useMediaQuery({
    query: '(min-width: 1200px)',
  });

  const isLaptop = useMediaQuery({
    query: '(max-width: 1280px)',
  });

  return { isMobile, isTabletS, isTabletM, isTabletL, overTabletL, isLaptop };
};
