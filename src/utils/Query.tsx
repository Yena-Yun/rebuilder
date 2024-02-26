import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return { isTablet };
};
