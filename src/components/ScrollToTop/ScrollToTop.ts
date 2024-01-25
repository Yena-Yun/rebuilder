import { useEffect } from 'react';

export const ScrollToTop = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return null;
};
