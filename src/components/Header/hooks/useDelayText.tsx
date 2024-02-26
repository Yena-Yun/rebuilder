import { useEffect, useState } from 'react';

export const useDelayText = (flag: boolean) => {
  const [isShowMenuText, setIsShowMenuText] = useState(false);

  useEffect(() => {
    delayDropdownText();
  }, [flag]);

  const delayDropdownText = () => {
    setTimeout(() => {
      setIsShowMenuText((prev) => !prev);
    }, 300);
  };

  return { isShowMenuText };
};
